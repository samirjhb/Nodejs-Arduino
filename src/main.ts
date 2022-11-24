import { NestFactory } from '@nestjs/core';
import { ReadlineParser, SerialPort } from 'serialport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = new SerialPort(
    {
      path: '/dev/ttyACM0',
      baudRate: 9600,
    },
    function (err) {
      if (err) {
        return console.log('Error: ', err.message);
      }
    },
  );

  const parser = new ReadlineParser();
  port.pipe(parser);

  parser.on('data', (data) => {
    const user = parseInt(data);
    const number = 147147224011;

    if (user == number) {
      console.log(' user registrado');
    } else {
      console.log(' user no registrado');
    }

    console.log(user);
  });

  // Open errors will be emitted as an error event
  parser.on('error', function (err) {
    console.log('Error: ', err.message);
  });

  await app.listen(3000);
}
bootstrap();
