require('./config')
const { app, BrowserWindow, Menu } = require("electron");

let mainWindow = null;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width:700,
        height:550,
        resizable: false,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    });
    Menu.setApplicationMenu(null);
    mainWindow.loadFile(__dirname + "/views/index.html");
    
    mainWindow.on('closed', ()=>{
        app.quit();
    })
});