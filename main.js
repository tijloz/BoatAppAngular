const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron;
const os = require('os');
const osPlatform = os.platform();
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const parser = new Readline();
// port.pipe(parser);

// const parser = osSwap().pipe(new Readline({ delimiter: '\r\n' }));
const port = new SerialPort(osSwap(), {
  baudRate: 9200
});




function osSwap() {
  switch (osPlatform) {
    case 'win32':
      return 'COM3';
      break;
    case 'linux':
      return '/dev/ttyACM0';
  }
}

function timeoutFunc() {
  console.log('Problem connecting to protection device!');
}
setInterval(timeoutFunc, 30000);

// Listen for app to be ready
app.on('ready', function () {

    /*      Create the main window      */
    let mainWindow = new BrowserWindow({
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
  console.log(`Light state is: ${light.lightState}`);
  let control = '!';
  port.write(control + light.lightDevice + light.lightTimer + light.lightChan + light.lightState + light.lightBrightness + '\n');
});


/*
A function for listening to messages from the slave board
 */
parser.on('data', function(){
  console.log(data);
  switch (data) {
    case '!Protection 1 Alive' :
      clearInterval(timeoutFunc);
      setInterval(timeoutFunc, 30000);
      console.log("timeout reset");

    case '!Voltage':
      console.log("dump voltage box reset");
  }
});
