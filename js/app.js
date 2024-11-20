
const entradaTarea = document.getElementById('taskInput'); 
const botonAgregar = document.getElementById('addTask'); 
const listaTareas = document.getElementById('taskList'); 


botonAgregar.addEventListener('click', () => {
    const textoTarea = entradaTarea.value.trim(); 
    if (textoTarea === '') return; 

    
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${textoTarea}</td>
        <td>
            <button class="editar">Editar</button>
            <button class="eliminar">Eliminar</button>
        </td>
    `;

    
    
    fila.querySelector('.editar').addEventListener('click', () => {
        const nuevoTextoTarea = prompt('Edita tu tarea:', textoTarea);
        if (nuevoTextoTarea) {
            fila.querySelector('td').textContent = nuevoTextoTarea;
        }
    });

    
    fila.querySelector('.eliminar').addEventListener('click', () => {
        listaTareas.removeChild(fila); 
    });

    
    listaTareas.appendChild(fila);

    
    entradaTarea.value = '';
});
