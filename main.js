const electron = require('electron');
const SerialPort = require('serialport');
const {app, BrowserWindow, ipcMain} = electron;
const os = require('os');
const osPlatform = os.platform();
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

ipcMain.on('lightChannel', function (event, light) {
  console.log(`Light state is: ${light.lightState}`);

  if (light.lightState) {
    port.write('ON' + '\n');
  } else {
    port.write('OFF' + '\n');
  }
  if (light.lightBrightness === "Bright") {
    port.write('Bright');
  } else if (light.lightBrightness === "Bright"){
    port.write('Normal');
  } else if (light.lightBrightness === "Dark"){
    port.write('Dark');
  }
});
