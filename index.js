const {app, BrowserWindow} = require('electron');

let appWindow;

app.on('ready', () => {
    appWindow = new BrowserWindow({
        width: 700,
        height: 500,
        resizable: false,
        autoHideMenuBar: true,
    });
    appWindow.loadURL(`file://${__dirname}/index.html`)
});