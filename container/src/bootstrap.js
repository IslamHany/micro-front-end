//if we do not have products dependency in our project, webpack will look inside ModuleFederationPlugin in the remotes section
import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

const productEl = document.querySelector("#my-products");
const cartEl = document.querySelector("#my-cart");

mountProducts(productEl);
mountCart(cartEl);