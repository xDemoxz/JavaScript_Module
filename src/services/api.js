const URL = "http://localhost:3000/products";

export async function getProductsApi(){
  const response = await fetch(URL);
  return await response.json();
}

export async function createProductApi(product){
  const response = await fetch(URL,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify(product)
  });
  return await response.json();
}

export async function updateProductApi(id, product){
  const response = await fetch(`${URL}/${id}`,{
    method:"PUT",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify(product)
  });
  return await response.json();
}

export async function deleteProductApi(id){
  await fetch(`${URL}/${id}`,{
    method:"DELETE"
  });
}
