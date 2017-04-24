# swagio's Arduino firmware
Sends data about the Arduino's pins over serial.

## Protocol
The data sent by the Arduino is formatted in JSON like so (but compacted to a single line):
```json
{
  "D2": 0,
  "D3": 0,
  "D4": 1,
  "D5": 0,
  "A0": 0.23,
  "A1": 0.86,
  "A3": 0.15
}
```
