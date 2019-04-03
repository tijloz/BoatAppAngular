const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron;
const os = require('os');
const osPlatform = os.platform();
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const parser = new Readline();
let lastHeartBeatTime;

const heartBeatTimeOut = 30000;
let port;
let portConnected = false;
let heartBeatDetectionRunning = false;

port = getPort();

/**
 * getPort
 *
 * Attempts to open a new serial port
 * @returns {SerialPort|SerialPort}
 */
function getPort() {
  return port = new SerialPort(osSwap(), {baudRate: 9600}, function (err) {
    if (err) {
      console.error('Failed to open serial port');
      return console.log('Error: ', err.message)
    }

    console.log('Serial port opened successfully');
    portConnected = true;

    // Set up the parser
    port.pipe(parser);

    // Set up heartbeat detection
    startHeartBeatDetection();

  });

}


let mainWindow;

function osSwap() {
  switch (osPlatform) {
    case 'win32':
      return 'COM5';

    case 'linux':
      //return '/dev/ttyACM0';
      return '/dev/ttyUSB0';
  }
}

function startHeartBeatDetection() {
  if (heartBeatDetectionRunning) {
    return;
  }

  // Don't make a new subscription during lifetime of app
  heartBeatDetectionRunning = true;

  lastHeartBeatTime = new Date();

  setInterval(() => {
    const dateNow = new Date();

    if (dateNow - lastHeartBeatTime > heartBeatTimeOut) {
      portConnected = false;
      console.error('Device is disconnected');

      // Attempt to open the serial port again
      port = getPort();

      // Call the Electron front end
      mainWindow.webContents.send('serialHeatBeat', {eventType: 'disconnect'});

    }
  }, 30000);

}

/**
 *
 */
function heartBeatDetected() {
  if (!portConnected) {
    portConnected = true;
    console.log('SerialPort Reconnected');
    mainWindow.webContents.send('serialHeatBeat', {eventType: 'reconnect'});

  }
  lastHeartBeatTime = new Date();

}

// Listen for app to be ready
app.on('ready', function () {

    /*      Create the main window      */
    mainWindow = new BrowserWindow({
      show: false,
      frame: true,
      //kiosk: true,
      //alwaysOnTop: true
    });

    // and load the index.html of the app.
    mainWindow.loadFile('./dist/boatInterface/index.html');

    // open dev tools
    mainWindow.webContents.openDevTools();

    // Stop visual flashing
    mainWindow.once('ready-to-show', () => {
      mainWindow.show()
    });

    // Quit app when closed
    mainWindow.on('closed', function () {
      mainWindow = null;
      app.quit();
    })
  }
);

/*
A function for writing a light message to the slave board
 */
ipcMain.on('lightChannel', function (event, light) {
  console.log(`Got to the main.js`);
  console.log(`Light state is: ${light.lightState}`);
  let control = '!';
  let escapeChar = '\n';
  console.error(control + `${light.lightDevice}` + `${light.lightTimer}` + `${light.lightChan}` + `${light.lightState}` + `${light.lightBrightness}` + escapeChar);
  port.write(control + `${light.lightDevice}` + `${light.lightTimer}` + `${light.lightChan}` + `${light.lightState}` + `${light.lightBrightness}` + escapeChar);
});


/**
 * Subscribes to messages from the slave board
 */
parser.on('data', newLine => {
  console.log('Received data on the serial port');
  console.log(newLine);
  let str = newLine;

  /*
   * Cut up the string
   */

  let ctrlp1 = str.indexOf("!");
  let next = ctrlp1 + 1;
  let ctrlp2 = str.indexOf("!", next);
  let ctrl = str.slice(ctrlp1 + 1, ctrlp2);
  console.log(ctrl);
  next = ctrlp2 + 1;
  ctrlp1 = str.indexOf("!", next);
  let value = str.slice(ctrlp2 + 1, ctrlp1);
  console.log(value);


  switch (ctrl) { //switch on opcode

    case '!Protection 1 Alive' :
      heartBeatDetected();
      console.log("Heartbeat received on SerialPort");
      break;

    case '!Voltage':
      console.log("dump voltage");
      mainWindow.webContents.send('voltage', {success: true});
      ipcMain.send();
      break;

    case '!Current':
      console.log("dump current");
      mainWindow.webContents.send('current', {success: true});
      break;

    case '!Temperature':
      console.log("dump temperature");
      mainWindow.webContents.send('temperature', {success: true});
      break;

    default:
      console.error('Unable to decode the incoming data from serial port');

  }

});
