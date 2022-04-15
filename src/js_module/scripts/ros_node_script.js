#!/usr/bin/env node

'use strict';
const rosnodejs = require('rosnodejs');
const custom_messages_module = rosnodejs.require('custom_messages_module').msg;
const std_msgs  = rosnodejs.require('std_msgs').msg;

console.log("- Loaded expected nodes");

var test =new custom_messages_module.gpsState();


function talker() {
rosnodejs.initNode('my_node', { onTheFly: true })
  .then((rosNode) => {
    const custom_messages_module = rosnodejs.require('custom_messages_module').msg;
    
  });
}

if (require.main === module) {
  // Invoke Main Talker Function
  talker();
}