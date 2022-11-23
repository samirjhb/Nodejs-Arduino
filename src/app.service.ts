import { Injectable } from '@nestjs/common';
import { ReadlineParser, SerialPort } from 'serialport';

@Injectable()
export class AppService {
   getHello() {
    try {
      const port = new SerialPort({
        path: "COM3",
        baudRate: 9600,
      });

      const parser = new ReadlineParser()
      port.pipe(parser)

     parser.on('data', (data) => {
        const user = parseInt(data);
        const number = 147147224011;

        if (user ==number ) {
          console.log(' user registrado');
          
        } else {
          console.log(' user no registrado');
        }

        console.log(user);
        

      })

  
    } catch (error) {
      console.log(error);
    }

  }
}
