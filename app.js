/* Modulos Nativos. */
const fs = require("fs");
const path = require("path");
const path_public = path.resolve(__dirname, "./public");
/* Modulos Instalados. */
const express = require("express");
const app = express();
const ejs = require("ejs");
/* Modulos Personales. */
const PORT = 3000;
/*
===================================================================================================

===================================================================================================
*/
app.set("view engine", "ejs");
app.listen(PORT, console.log("Port: 3000"));
app.use(express.static(path_public));
