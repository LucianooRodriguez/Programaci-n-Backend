const Product = require("./Product.js")

class ProductManager {

    constructor() {
        this.products = [];
    }

    //identificador unico de producto (autoincrementable)
    static id = 0;

    /*  Metodos de gestion de productos
    */

    addProduct = (product) => {
        //console.log(product)

        //Verifico si el codigo del producto ya se encuentra cargado
        let codes = this.products.map((x) => {
            return x.code;
            
        });
        //console.log(codes)

        if (codes.includes(product.code)) {
            console.log(
                "El producto con el codigo ingresado ya se encuentra cargado"
            );
        } else {
            ProductManager.id++;
            let item = { id: ProductManager.id, ... product };
            this.products.push(item);
            
        }
    };

    //Retorna todos los productos
    getProducts = () => {
        return this.products;
    };

    //Retorna un producto 
    getProductById = (id) => {
        let res = this.products.filter((item) => item.id == id);

        if (res.length == 0) {
            return "404 NOT FOUND";
        } else {
            return res[0];
        }
    };

}

const productManager=new ProductManager()
const product1=new Product("Notebooks", "SO: Windows", 250, "./path", "A1", 25)
const product2=new Product("Equipos de audio", "Mini parlantes", 100, "./path", "A2", 5)
const product3=new Product("Monitores", "27' pulgadas", 150, "./path", "A3", 15)
const product4=new Product("Mouse y Teclados", "Combos inalambricos", 50, "./path", "A4", 10)

productManager.addProduct(product1)
productManager.addProduct(product2)
productManager.addProduct(product3)
productManager.addProduct(product4)

console.log(productManager.getProducts())
console.log(productManager.getProductById(1))