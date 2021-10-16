"use strict"
const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Product = require("./modelo/product");
const product = require("./modelo/product");
const cors =require("cors");

const app = express();
app.use(cors())
const port = process.env.PORT || 3001


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/product", (req, res) => {
    Product.find({}, function (err, productos) {
        if (err)
            return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!productos)
            return res.status(404).send({ message: `No existen productos` })
        res.send(200, { productos })
    })
})

app.get("/api/product/:productId", (req, res) => {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!product) return res.status(404).send({ message: `El producto no existe` })

        res.status(200).send({ product })
    })



})

app.post("/api/product", (req, res) => {
    console.log("POST /api/product")
    console.log(req.body)

    let product = new Product()
    product.id = req.body.id
    product.nombre = req.body.nombre
    product.precio = req.body.precio
    product.estado = req.body.estado
    //product.category = req.body.category
    //product.description = req.body.description


    product.save((err, productStored) => {
        if (err) {
            res.status(500).send({ message: `Error al salvar la base de datos: ${err} ` })
        }
        res.status(201).send({ product: productStored })

    })
})

app.put("/api/product/:productID", (req, res) => {

})

app.delete("/api/product/:productID", (req, res) => {



})

mongoose.connect("mongodb://localhost:27017/shop", (err, res) => {
    if (err) {
        return console.log(`error al conectar en base de datos: ${err} `)
    }
    console.log("conexion de bases establecida con éxito")

    app.listen(port, () => {

        console.log(`API REST corriendo en http:/localhost:${port}`)
    })


});