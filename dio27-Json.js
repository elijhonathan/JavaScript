let invoice = {
    name: "Eli",
    lastName: "Jhonathan",
    age: 31,
    products: {
        0: ["mouse", 29.90],
        1: ["teclado", 89.00],
        2: ["monitor", 1585.69],
        3: ["headset", 150.35]
    }
}


generateInvoice(invoice)

function generateInvoice(invoice)
{
  console.log("O comprador é " + invoice.name + " " + invoice.lastName + " que possui a idade de " + invoice.age + " anos")
  console.log("-----------")

  for(let index in invoice.products)
  {
    let [productName, productPrice] = invoice.products[index]
    console.log(`${productName}: R$ ${productPrice}`)
  }
  
}




// let name = "Eli"
// let lastName = "Jhonathan"
// let age = 31
// let products = ["mouse", "teclado", "monitor"]
// let productsValues = [29.90, 89.00, 1585.69]

// generateInvoice(name, lastName, products,productsValues, age)

// function generateInvoice(name, lastName, products,productsValues, age)
// {
//   console.log("O comprador é " + name + " " + lastName + " que possui a idade de " + age + " anos")
//   console.log("-----------")
//   console.log("O produto é " + products[0])
//   console.log(`O valor é ${productsValues[0]}`)
// }
