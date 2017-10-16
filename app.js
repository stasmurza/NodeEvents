'use strict';


let id = 0;

var event = require("events");

var emitter = new event.EventEmitter();

emitter.on("login", function () {
    let currentDatetime = new Date();
    let strLog = String(currentDatetime) + " user " + String(++id) + " logged in";
    console.log(strLog);
});

emitter.on("logout", function () {
    let currentDatetime = new Date();
    let strLog = String(currentDatetime) + " user " + String(++id) + " logged out";
    console.log(strLog);
});

emitter.on("scrollDownAction", function () {
    let currentDatetime = new Date();
    let strLog = String(currentDatetime) + " user " + String(++id) + " scrolled down";
    console.log(strLog);
});

emitter.emit("login");
emitter.emit("scrollDownAction");
emitter.emit("logout");
