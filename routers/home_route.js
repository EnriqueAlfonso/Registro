/* Modulos Nativos. */
/* Modulos Instalados. */
const express = require("express");
const app = express();
const router = express.Router();
const ejs = require("ejs");
/* Modulos Personales. */
const home_controller = require("../controllers/home_controller");
/*
===================================================================================================

===================================================================================================
*/
router.get("/", home_controller.home);

module.exports = router;
