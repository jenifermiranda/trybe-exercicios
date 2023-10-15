import { Product } from "./types/product";

function getProduct() {
    const product: Product = {
        barcode: '123c456b789a',
        price: 5,
    };
    return product;
  }
  
  console.log(getProduct());