const KEY = "products";

export function saveProducts(products){
  localStorage.setItem(KEY, JSON.stringify(products));
}

export function getProducts(){
  return JSON.parse(localStorage.getItem(KEY)) || [];
}
