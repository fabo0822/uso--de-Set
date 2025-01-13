const listaInvitados = new Set();

// Función para agregar un invitado
function agregarInvitado(nombre) {
    if (listaInvitados.has(nombre)) {
        console.log(`${nombre} ya está en la lista de invitados.`);
    } else {
        listaInvitados.add(nombre);
        console.log(`${nombre} ha sido agregado a la lista de invitados.`);
    }
}

// Función para eliminar un invitado
function eliminarInvitado(nombre) {
    if (listaInvitados.has(nombre)) {
        listaInvitados.delete(nombre);
        console.log(`${nombre} ha sido eliminado de la lista de invitados.`);
    } else {
        console.log(`${nombre} no está en la lista de invitados.`);
    }
}

// Función para mostrar todos los invitados
function mostrarInvitados() {
    if (listaInvitados.size === 0) {
        console.log("La lista de invitados está vacía.");
    } else {
        console.log("Lista de invitados:");
        console.log(listaInvitados);
    }
}

// Simulación de uso
agregarInvitado("Ana");         // Ana ha sido agregado a la lista de invitados.
agregarInvitado("Carlos");      // Carlos ha sido agregado a la lista de invitados.
agregarInvitado("Ana");         // Ana ya está en la lista de invitados.
eliminarInvitado("Carlos");     // Carlos ha sido eliminado de la lista de invitados.
mostrarInvitados();             // Lista de invitados: Set { 'Ana' }