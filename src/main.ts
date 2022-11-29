/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ReadlineParser, SerialPort } from 'serialport';
import { AppModule } from './app.module';
import { transporter } from './config/mailer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Configuracion de Versiones
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });

  //Swagger Io
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Api Node y Arduino')
    .setDescription(
      'Este proyecto tiene como finalidad la prueba de las peticiones http',
    )
    .setVersion('1.0')
    .addTag('User')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('document', app, document);

  //Conexion con Arduino y sensores
  const port = new SerialPort(
    {
      path: '/dev/cu.usbmodem14101',
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

    //Conexion a servicio de la db
    const axios = require('axios');
    const configuracion = {
      method: 'get',
      url: `${process.env.DB_GET}v1/user/${user}`,
      headers: {},
    };

    axios(configuracion)
      .then(function (response) {
        if (response.data.userID == user) {
          console.log(' user registrado');
          // volver nueva fecha y hora
          const Tiempo = new Date();
          //Contador con la hora actual
          function showTime() {
            // volver nueva fecha y hora
            const dateTime = new Date();
            // devolver el tiempo
            const time = dateTime.toLocaleTimeString();
          }
          //ejecutar la funcion de contador
          setInterval(showTime, 1000);
          setTimeout(() => {
            transporter.sendMail({
              from: '"Conductor Fatigado 😴 🚛" <prueba@example.com>',
              to: 'samirmac98@gmail.com, h.mendez@grupofirma.cl, g.aravena@grupofirma.cl',
              subject: `Conductor "${response.data.userNombre}" esta Fatigado 😴 🚛`,
              html: `<b> Conductor con el ID "${user}"  presenta Fatigacion por exceso de hora de conducion 🚛🚛🚛 </b>`, // html body
            });
          }, 180000);

          transporter.sendMail({
            from: '"PROBANDO CV" <prueba@example.com>',
            to: 'samirmac98@gmail.com, h.mendez@grupofirma.cl, dios@grupofirma.cl',
            subject: 'User Arranco ✔',
            html: `<b>User Registrado con el ID Arranco Camion "${user}"  y el nombre "${response.data.userNombre}" a la hora "${Tiempo}"  </b>`, // html body
          });
        } else {
          console.log(' user no registrado');
          transporter.sendMail({
            from: '"PROBANDO CV" <prueba@example.com>',
            to: 'samirmac98@gmail.com, h.mendez@grupofirma.cl',
            subject: 'User No Arranco X',
            html: `<b>User Registrado con el ID  "${user}" Intento arrancar el  Camion </b>`, // html body
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  // Open errors will be emitted as an error event
  parser.on('error', function (err) {
    console.log('Error: ', err.message);
  });

  await app.listen(process.env.PORT);
}
bootstrap();
