const express = require("express");
const app = express();
const routes = require("./routes");
app.listen(3000, () => { console.log("Listening on port 3000")});
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(routes);
