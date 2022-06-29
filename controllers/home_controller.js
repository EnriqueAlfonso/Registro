/* Modulos Nativos. */
const fs = require("fs");
const path = require("path");
const path_public = path.resolve(__dirname, "./public");
/* Modulos Instalados. */
const express = require("express");
const app = express();
const ejs = require("ejs");
/* Modulos Personales. */
const Objeto = require("../dataBase/dataBase");
/*
===================================================================================================

===================================================================================================
*/
const home_controller = {
    home: function (req, res) {
        res.render("home");
    },
    jaguar: function (req, res) {
        let parametro = req.params.id;
        let respuesta = Objeto.find((element) => element.id == parametro);
        if (respuesta) {
            res.render("jaguar", { Objeto: respuesta });
        } else {
            res.render("oops");
        }
    },
};

module.exports = home_controller;
