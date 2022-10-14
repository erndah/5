const express = require("express");
const app = express();

const port = 4000;
app.use((req, res, next) => {
  console.log("test");
  next();
});

app.get("/", (req, res) => {
  res.send("Halo Dunia");
});
app.get("/about/:id/nama/:name", (req, res) => {
  res.send("Halo about");
  console.log(req.params.id);
  console.log(req.params.name);
});
app.use("/", (req, res) => {
  res.send("Error 404");
});
app.listen(port, () => console.log(`server running in localhost:${port}`));
