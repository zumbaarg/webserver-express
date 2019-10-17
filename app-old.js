const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "applicarion/json" });

    let salida = {
      nombre: "Cristian",
      edad: 34,
      url: req.url
    };
    res.write(JSON.stringify(salida));
    res.end();
  })
  .listen(8080);
console.log("Escuchando puerto 8080");
