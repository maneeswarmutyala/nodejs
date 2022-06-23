const fs = require("fs");
const rs = fs.createReadStream("./docs/blog3.txt", { encoding: "utf8" });
const ws = fs.createWriteStream("./docs/blog5.txt", { encoding: "utf8" });

// rs.on("data", (chunk) => {
//   console.log("----N C---");
//   console.log(chunk);
//   ws.write("\n New \n");
//   ws.write(chunk);
// });

//piping

rs.pipe(ws);