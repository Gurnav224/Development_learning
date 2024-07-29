
const products = [
    {id:1,name:"Laptop",price:19990},
    {id:2,name:"SmartPhone",price:29990},
    {id:3,name:"Headphone",price:5990},
    {id:4,name:"Tablet",price:9990}
];

const productCatelog = document.querySelector('#products__catelog');


const productListHtml = products.map((product)=>   `
<div>
<h2>ID: ${product.id}</h2>
<p>Name: ${product.name} </p>
<p>Price: ${product.price} </p>
<hr/>
    </div>
    `
)

productCatelog.innerHTML = productListHtml.join(' ')