const fs = require("fs");
//read filesystem
if (fs.existsSync("./docs/blog.txt")) {
  fs.readFile("./docs/blog.txt", (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(`File Data : ${data.toString()}`);
  });
} else {
  fs.writeFile("./docs/blog.txt", "File Created at run time", () => {
    console.log("File Created at run time");
  });
}

//write filesystem

fs.writeFile("./docs/blog.txt", "File Updated at run time", () => {
  console.log("File updated at run time");
});

//directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Folder deleted");
  });
}

//deleting filesystem

if (fs.existsSync("./docs/blog.txt")) {
  fs.unlink("./docs/blog.txt", (err) => {
    if (err) {
      console.error(err);
    }
    console.log("File deleted");
  });
}
