// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let nombre = [];

//RECIBIR Y AGREGAR AL ARRAY
function agregarAmigo() {

    let nuevoAmigo = document.getElementById("amigo").value;

    if (nuevoAmigo === "") {
    alert("Por favor, ingresa un nombre válido.");
    return; // Termina la función aquí
    }
    
    nombre.push(nuevoAmigo);
    document.getElementById("amigo").value = "";
    mostrarAmigos();
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores
}


//AMIGOS QUE SE VAN A SORTEAR
function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente
    // Agregar amigo a la lista para que se vea en la pagina :)
    
    for (let i = 0; i < nombre.length; i++) {
        let li = document.createElement('li');
        li.textContent = nombre[i]; // Asignar el nombre del amigo al <li>
        lista.appendChild(li); // Agregar el elemento <li> a la lista
    }   
}

//SORTEAR LOS AMIGOS
function sortearAmigo(){
     if (nombre.length === 0) {
            alert("No hay amigos para sortear.");
            return;
        }
    // Limpiar la lista de amigos antes de realizar el sorteo
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Borra la lista de amigos
    let indiceAleatorio = Math.floor(Math.random() * nombre.length);
    let amigoSorteado = nombre[indiceAleatorio];
    // Agregar el amigo sorteado al <ul> con ID "resultado"
    let resultado = document.getElementById("resultado");
    let li = document.createElement('li');
    li.textContent = "El amigo secreto sorteado es: " + amigoSorteado;
    resultado.appendChild(li);
    nombre = []; // Vaciar la lista después del sorteo
    mostrarAmigos(); // Mostrar lista de amigos (vacía después del sorteo)
}




