const {BrowserWindow, app} = require('electron');
const url = require('url');

let win = null;

function boot() {
    win = new BrowserWindow({
        width: 405, 
        height: 820,
        frame: false,
        resizable: false,
        transparent: true
    });
    win.loadURL(`file://${__dirname}/public/index.html`)
}

app.on('ready', boot);