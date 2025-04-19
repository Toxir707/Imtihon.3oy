import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import { join } from "node:path";
import express from "express";
// import { engine } from "express-handlebars";

if(module.hot) {
  module.hot.accept();
}

const app = express();

// View engine o'rnatish
// app.engine("hbs", engine({
//   defaultLayout: "main",
//   extname: "hbs"
// }));
// app.set("view engine", "hbs");
// app.set("views", join(process.cwd(),"views"));

// app.use("/js", express.static(join(process.cwd(), "js")));

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/login", (req, res) => {
//   res.render("login", { layout: "login" });
// });

app.listen(4000, () => {
  console.log(`front ${4000} port'da`);
});
 