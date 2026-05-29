export function validateProduct(name, price){
  if(!name.trim()) throw new Error("El nombre es obligatorio");
  if(price <= 0) throw new Error("Precio inválido");
}
