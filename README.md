# swagio
Serial, Websocket and Arduino based General-purpose Input/Output

## Requirements
- Arduino with/and the ability to connect serially
- Arduino IDE or other software that can compile and upload to your Arduino
- nodejs (developed with Ubuntu 16.04's nodejs v4.2.6)
- npm (developed with Ubuntu 16.04's npm 3.5.2)
- web browser that supports `WebSocket` and `<canvas>`

## Usage
1) `git clone https://github.com/asmundstavdahl/swagio.git`
2) Flash the Arduino firmware. Open `arduino/arduino.ino` in the Arduino IDE and upload it
3) Open the frontend. Open `frontend/index.html` in your browser
4) Start the serial-to-websocket intermediary. `cd swagio/intermetiary && node main.js -s /dev/tty/USB*`
