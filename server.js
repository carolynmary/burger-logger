//=== EXPRESS APP =============================================
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=== HANDLEBARS ==============================================
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//=== STATIC DIRECTORY ========================================
app.use(express.static("public"));

//=== ROUTES ==================================================
const routes = require("./controllers/burgers_controller");
app.use(routes);

//=============================================================
app.listen(PORT, () => {
    console.log("🌎 => live on http://localhost:%s", PORT);
});