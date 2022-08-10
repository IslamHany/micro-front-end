//if we do not have products dependency in our project, webpack will look inside ModuleFederationPlugin in the remotes section
import 'products/ProductsIndex';
import 'cart/CartShow';

console.log("container");