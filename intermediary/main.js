'use strict';

const WebSocket = require('ws')
const SerialPort = require('serialport')
const args = require("optimist").argv

/**
 * @see usage
 */
const defaultBaudRate = 115200
const defaultPort = 53491

/**
 * Print usage information
 */
function usage() {
  var myName = process.mainModule.filename.replace(/^.*\//, "")
  console.log(`
Usage:
    ${myName} -s serial_port [-b baud_rate (${defaultBaudRate})] [-w websocket_port (${defaultPort})]

Tip:
    node ${myName} -s /dev/ttyUSB*
`)
}

/**
 * Validate arguments
 */
if (!args.s) {
  usage()
  process.exit(1)
}

/**
 * Apply arguments or defaults
 */
const baudRate = args.b !== undefined ? args.b : defaultBaudRate
const port = args.b !== undefined ? args.b : defaultPort

/**
 * Open WebSocket
 * @type {WebSocket}
 */
const wss = new WebSocket.Server({
  port: port
})

/**
 * Broadcast data to all listeners
 */
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data)
    }
  })
}

/**
 * Open serial port read line-by-line
 * @type {SerialPort}
 */
var serialPort = new SerialPort(args.s, {
  baudRate: baudRate,
  parser: SerialPort.parsers.readline('\n')
})

serialPort.on("data", function(data) {
  wss.broadcast(data)
})
