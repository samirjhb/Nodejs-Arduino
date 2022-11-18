// const { SerialPort, ReadlineParser } = require("serialport");

// try {
//   const port = new SerialPort({
//     path: "/dev/tty.usbmodem14101",
//     baudRate: 9600,
//   });

//   const parser = new ReadlineParser()
//   port.pipe(parser)
//   parser.on('data', (data)=>{
//     console.log(data);
//   })


// } catch (error) {
//   console.log(error);
// }

const { Board, Led } = require("johnny-five");

let myBoard, myLed;

myBoard = new Board();
myBoard.on("ready", function () {
  myLed = new Led(13);
  myLed.strobe(100);
  console.log('data');
});

myBoard.on('error', function (err) {
    console.log(err);
})
