import prompt from "prompt-sync"
import { pizza } from "./modules/pizzas.js"
import { hacerPizza } from "./modules/hacerPizza.js"
import { entregaPizza } from "./modules/entregaPizza.js";

const promptSync = prompt();
const pizzaPrompt = promptSync('Escoja su pizza ');
const variedades = pizza.find(p => p.nombre.toLowerCase() === pizzaPrompt.toLowerCase())

if (variedades) {
hacerPizza(variedades)
entregaPizza();
} else {
    console.log('Lo siento, no tenemos esa variedad')
}

