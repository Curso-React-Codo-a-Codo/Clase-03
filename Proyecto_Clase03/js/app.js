var a = 232; //se esta dejando de usar var

let b = 120; //let empieza desde ES6 (lo mas usado)

let myDOM = document; //Es la representacion en formato de objeto del HTML. Lo que yo modifique aca es lo que 
//se va a ver en el navegador. docuement es un objeto global creado, palabra ressrevada
//permite modificar en realtime desde el JS el HTML sin modificar el archivo original.

console.log(myDOM) //imprime todo el html que tomo

let myApp = document.getElementById("myApp");

myApp.innerHTML = "Estoy modificando el placeholder...";