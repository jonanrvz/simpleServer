// importa el modulo http de Nodejs que permite crear un servidor web
const http = require('http');
// Importa el modulo fs (File System), que permite trabajar con archivos (leer, escribir, etc)
const fs = require('fs');
// Define una constante llamada PORT con el valor 3000, 
// que sera el numero de puerto donde tu servidor escuchara las conexiones.
const PORT = 3000;


// Crea un servidor HTTP usando http.createServer
// Esta función recibe un callback que se ejecuta 
// cada vez que llega una solicitud (req = request, res = response)
const server = http.createServer(function (req, res) {
  // Responde al cliente enviando las cabeceras(headers)
  // 200 indica que la solicitud fue exitosa y 'content-type' indica el tipo de contenido que se está enviando.
  // el metodo writeHead() se usa para enviar la respuesta HTTP al cliente.
  res.writeHead(200, {'content-type': 'text/html'});
  // El método createReadStream() de fs se usa para leer un archivo de forma asíncrona.
  // Abre el archivo index.html como un stream de lectura (no carga todo el archivo en memoria de golpe)
  // .pipe(res) conecta ese stream directamente con la respuesta del servidor,
  // enviando el contenido del archivo al navegador.
  fs.createReadStream('index.html').pipe(res);
});

// Instruye al servidor para que empiece a escuchar conexiones en el puerto definido (3000)
server.listen(PORT);
// Muestra un mensaje en la consola indicando que el servidor ha comenzado a escuchar en el puerto 3000
console.log(`Server started on port ${PORT}`);

//ejecutar con el comando node simpleServer.js