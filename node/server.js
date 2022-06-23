const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const server = http.createServer((req, res) => {
  //lodash
  const num = _.random(0, 20);

  //set header
  res.setHeader("Content-Type", "text/html");
  //routing
  let path = "./views/";
  switch (req.url) {
    case "/random":
      //   res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      res.write(num.toString());
      res.end();
      break;
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  //writing response
  //   res.write('<p>Maneesh</p>');
  //   res.write('<p>Maneesh</p>');
  //   res.end();
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
