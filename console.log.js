let products = [];
let id = 0;

function AddProduct(product) {
    if (!product.name || !product.code || !product.price) {
        console.log("Error: Todos los campos son obligatorios")
    return;

    }

    const existeProduct = products.find(p => p.code === product.code);
    if (existeProduct) {
        console.log("Error: ya existe un producto con ese codigo");
        return;
    }

    const newProduct = {
        id: ++id,
        name: product.name,
        code: product.code,
        price: product.price
    };

    products.push(newProduct);
    console.log(`Producto adicionado: ${JSON.stringify(newProduct)}`);

}

function getProducts() {
    return products;
}

function getProductById(id) {
    const product = products.find(p => p.id === id);
    if (!product) {
        console.log("Error: Not found");
        return;
    }
    return product;
}
// Probando los productos

AddProduct({name: "Producto1", code: "P01", price: 10 });
AddProduct({name: "Producto2", code: "P02", price: 20 });
AddProduct({name: "Producto3", code: "P03", price: 30 });

// Adicionando producto con codigo repetido

AddProduct({name: "Producto3", code: "P01", price: 30 });

console.log(getProducts());

console.log(getProductById(1));
console.log(getProductById(3));
console.log(getProductById(4));

