#! /usr/bin/env node
// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

// get CLI duration argument
var duration = process.argv[2];

// default to 5 minutes
if (!duration) {
  duration = 5 * 60000;
}

// set current time and end time based on given / default duration
var startTime = new Date();
var endTime = new Date(startTime.getTime() + parseInt(duration * 60000));

// Speed up the mouse.
robot.setMouseDelay(2);

// math prep for moving the mouse in a circlular motion
var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = screenSize.height / 2 - 10;
var width = screenSize.width;

let i = 0;

while (true) {
  let x = height * Math.cos((twoPI * i) / width) + height;
  let y = height * Math.sin((twoPI * i) / width) + height;
  robot.moveMouse(x, y);
  i += 1;
  if (new Date().getTime() >= endTime.getTime()) {
    return;
  }
}
