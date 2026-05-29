export function renderProducts(
  products,
  container,
  deleteCallback,
  editCallback
){

  container.innerHTML = "";

  products.forEach(product => {

    const li = document.createElement("li");

    li.className =
      "border p-3 rounded flex justify-between items-center";

    li.innerHTML = `
      <span>${product.name} - $${product.price}</span>

      <div class="flex gap-2">
        <button class="edit-btn bg-green-600 text-white px-3 py-1 rounded">
          Editar
        </button>

        <button class="delete-btn bg-red-500 text-white px-3 py-1 rounded">
          Eliminar
        </button>
      </div>
    `;

    li.querySelector(".edit-btn")
      .addEventListener("click", () => editCallback(product.id));

    li.querySelector(".delete-btn")
      .addEventListener("click", () => deleteCallback(product.id));

    container.appendChild(li);
  });
}
