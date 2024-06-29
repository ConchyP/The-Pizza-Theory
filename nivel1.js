// Ingredientes para la masa

let ingredientesMasa = [
    {ingrediente: "harina", cantidad: "400 gr"},
    {ingrediente: "agua tibia", cantidad: "200 ml"},
    {ingrediente: "aceite de oliva", cantidad: "2 cucharadas"},
    {ingrediente: "levadura fresca", cantidad: "15 gr"},
    {ingrediente: "sal", cantidad: "1 pizca"}
];

// Función para mezclar los ingredientes de la masa

function mezclarIngredientesMasa() {
    ingredientesMasa.forEach(item => {
        console.log(`Mezclamos ${item.cantidad} de ${item.ingrediente}`);
    });
}

// Función para amasar y dar forma a la pizza

function amasar() {
    console.log("Amasando...");
    console.log("Dando forma a la base");
}

// Ingredientes de la pizza 

let ingredientesPizza = [
    {ingrediente:"Tomate triturado", cantidad:"100 gr"},
    {ingrediente:"Mozzarella fresca", cantidad:"90 gr"},
    {ingrediente:"Albahaca fresca", cantidad:"Un par de hojas"}
];

// Función de añadir ingredientes 

function añadirIngredientes() {
    ingredientesPizza.forEach(item => {
        console.log(`Añadir ${item.cantidad} de ${item.ingrediente}`);
    });
}

// Función de hornear pizza

function hornearPizza() {
    console.log("Horneando la pizza");
    console.log("...Tiempo de espera 15 min...")
}

console.log("Comencemos a preparar su pizza, empezando por la masa")
mezclarIngredientesMasa();
amasar();
añadirIngredientes();
hornearPizza();

console.log("¡Su pizza está lista!");
console.log("Pizza entregada")
