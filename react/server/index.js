const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/browse", require("./routes/browseRouter"));
app.use("/item", require("./routes/itemRouter"));
app.use("/like", require("./routes/likeRouter"));

app.listen(port, function() {
  console.log("Example app listening at localhost:%s", port);
});
