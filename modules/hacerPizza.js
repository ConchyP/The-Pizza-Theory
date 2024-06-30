export function hacerPizza(pizza) {
  console.log(`Pizza ${pizza.nombre} en preparación`);
  mezclarIngredientesMasa();
  amasar();
  añadirIngredientes(pizza);
  hornearPizza();
}

function mezclarIngredientesMasa() {
  console.log(`mezclar ingredientes`);
  console.log(`amasar`);
}

function amasar() {
  console.log(`estirando la masa`);
}

function añadirIngredientes(pizza) {
//   pizza.ingredientes.forEach(element => {
//     console.log(`añadiendo ${element}`);
//   });
// }
if (!pizza.ingredientes || !Array.isArray(pizza.ingredientes)) {
  throw new Error("Los ingredientes no están definidos o no son un arreglo");
}

pizza.ingredientes.forEach(element => {
  console.log(`añadiendo ${element}`);
});
}

function hornearPizza() {
    console.log(`horneando pizza ...15 min...`)
    
}
