import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReadlineParser, SerialPort } from 'serialport';

@Injectable()
export class AppService {
  getHello() {
    return `This action returns all conexionArduino`;
    //   const port = new SerialPort(
    //     {
    //       path: '/dev/ttyACM0',
    //       baudRate: 9600,
    //     },
    //     function (err) {
    //       if (err) {
    //         return console.log('Error: ', err.message);
    //       }
    //     },
    //   );
    //   const parser = new ReadlineParser();
    //   port.pipe(parser);
    //   parser.on('data', (data) => {
    //     const user = parseInt(data);
    //     const number = 147147224011;

    //     if (user == number) {
    //       console.log(' user registrado');
    //     } else {
    //       console.log(' user no registrado');
    //     }

    //     console.log(user);
    //   });
    //   // Open errors will be emitted as an error event
    //   parser.on('error', function (err) {
    //     console.log('Error: ', err.message);
    //   });
  }
}
