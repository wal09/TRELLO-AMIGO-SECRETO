// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);
        inputAmigo.value = ""; // Limpiar el campo de entrada
        actualizarListaAmigos();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos 2 amigos para realizar el sorteo.");
        return;
    }

    // Copia del array original para no modificar el original
    let amigosSorteados = [...amigos];

    // Mezclar el array de amigos de manera aleatoria
    let asignacionesValidas = false;

    while (!asignacionesValidas) {
        // Mezclar el array
        for (let i = amigosSorteados.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]];
        }

        // Verificar que nadie sea asignado a sí mismo
        asignacionesValidas = true;
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === amigosSorteados[i]) {
                asignacionesValidas = false;
                break;
            }
        }
    }

    // Mostrar los resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${amigos[i]} ➔ ${amigosSorteados[i]}`;
        resultado.appendChild(li);
    }
}