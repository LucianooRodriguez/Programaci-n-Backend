const express = require('express')

const productManager = require("../ProductManager.js")
const cart = new productManager("./productos.json")
const Product = require("../Product.js")

const app = express()

app.get('/', (req,res) => {
    if(req.query.limit) {
        let prod_array = []
        let i = 1
        while(i <= parseInt(req.query.limit)) {
            prod_array.push(cart.getProductById(i))
            i++
        }
        res.json(prod_array)
    } else {
        res.json(cart.getProducts())
    }
}) 

app.post('/', () => {
    //Agrego un producto
})

app.put('/:pid', () => {
    //Update de un producto
})

app.delete('/:pid', () => {
    //Elimina un Producto
})

app.get('/:pid', (req,res) => {
    res.json(cart.getProductById(parseInt(req.params.pid)))
})

app.listen('3000', () => {
    console.log("Server running on port 3000")
})