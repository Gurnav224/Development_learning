import { createStore } from "redux";
import cartReducer from "./cartReducer";
import { addToCart, calculateTotal, removeFromCart } from "./actions";

const store = createStore(cartReducer);

store.subscribe(() => {
  console.log(store.getState());
  renderProducts();
  renderCartProducts();
});

const productList = document.querySelector("#product_list");
const cartList = document.querySelector("#cart_list");
const cartTotal = document.querySelector("#cart_total");

const products = [
  { id: 1, name: "Product A", price: 10, quantity: 1 },

  { id: 2, name: "Product B", price: 20, quantity: 1 },

  { id: 3, name: "Product C", price: 15, quantity: 1 },
];

function addToCartHandler(product) {
  store.dispatch(addToCart(product));
  store.dispatch(calculateTotal());
}

function removeFromCartHandler(productId) {
  store.dispatch(removeFromCart(productId));
  store.dispatch(calculateTotal());
}

function renderProducts() {
  productList.innerHTML = products
    .map(
      (product) => `<li>
   Name: ${product.name} - RS: ${product.price}
   
 <button onClick='addToCartHandler(${JSON.stringify(product)})'>
          Add To Cart
        </button>
  </li>`
    )
    .join(" ");
}

function renderCartProducts() {
  const state = store.getState();
  cartList.innerHTML =
    state.cart.length > 0
      ? state.cart
          .map(
            (product) => `
  <li>
  ${product.name} - ${product.price} - Quantity: ${product.quantity}
  <button onClick="removeFromCartHandler(${product.id})">Remove</button>
  </li>
 `
          )
          .join(" ")
      : "No Product in cart";

  cartTotal.innerHTML = `Total: ${state.total}`;
}

renderProducts();

window.addToCartHandler = addToCartHandler;
window.removeFromCartHandler = removeFromCartHandler;
