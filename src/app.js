import { validateProduct } from "./utils/validators.js";
import { saveProducts, getProducts } from "./storage/localStorage.js";
import {
  createProductApi,
  updateProductApi,
  deleteProductApi,
  getProductsApi
} from "./services/api.js";
import { renderProducts } from "./ui/render.js";

const form = document.getElementById("productForm");
const list = document.getElementById("productList");
const message = document.getElementById("message");
const syncBtn = document.getElementById("syncBtn");

let products = getProducts();
let editingId = null;

render();

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);

  try {

    validateProduct(name, price);

    if(editingId){

      const updatedProduct = {
        id: editingId,
        name,
        price
      };

      products = products.map(product =>
        product.id === editingId
          ? updatedProduct
          : product
      );

      saveProducts(products);

      await updateProductApi(
        editingId,
        updatedProduct
      );

      editingId = null;

      showMessage("Producto actualizado", true);

    }else{

      const product = {
        id: Date.now(),
        name,
        price
      };

      products.push(product);

      saveProducts(products);

      await createProductApi(product);

      showMessage("Producto agregado", true);
    }

    form.reset();
    render();

  } catch(error){

    showMessage(error.message, false);

  }

});

function editProduct(id){

  const product = products.find(
    product => product.id === id
  );

  document.getElementById("name").value =
    product.name;

  document.getElementById("price").value =
    product.price;

  editingId = id;

}

async function deleteProduct(id){

  products = products.filter(
    product => product.id !== id
  );

  saveProducts(products);

  await deleteProductApi(id);

  render();

}

function render(){

  renderProducts(
    products,
    list,
    deleteProduct,
    editProduct
  );

}

function showMessage(text, success){

  message.textContent = text;

  message.className = success
    ? "mt-4 text-green-600"
    : "mt-4 text-red-600";

}

syncBtn.addEventListener("click", syncProducts);

async function syncProducts(){

  try{

    const data = await getProductsApi();

    console.log(data);

    showMessage("Sincronización exitosa", true);

  }catch{

    showMessage("Error al sincronizar", false);

  }

}
