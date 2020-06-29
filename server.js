const express = require("express");
const exphbs = require("express-handlebars");
const PORT = 5000;
const app = express();

app.use(express.static("public"));
app.engine(
  "hbs",
  exphbs({
    defaultLayout: "layout",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.use("/", require("./routes/index"));
app.listen(PORT, (err) => {
  if (err) {
    console.log("Error starting server");
  } else console.log(`Server started on port ${PORT}`);
});
