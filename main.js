const $ = selector => document.getElementById (selector);
const $$ = selector => document.querySelector (selector);

btn.addEventListener ('click', (e) => { 

const paragraph = $('paragrahp');   
const input = $('text');
const text = input.value;

    if ( text == ''|| text == null ){ // Si el input está vacio, ejecutá:
    
    paragraph.innerHTML = 'Por favor, introduzca una tarea.';
    paragraph.style.padding = '10px 10px';

    
    }else // Si no está vacio, ejecutá: // 
    {
    
    saveTask(); 
    showTask();
    deleteTask();
    paragraph.innerHTML = '';
    paragraph.style.padding = '0px 0px';

}

});

function saveTask() {

const input = $('text');
const text = input.value;

const task = {

    text

};

if (localStorage.getItem('tareas') === null){ // Si localStorage, está vacío //

    let tasks = []; // Crea una variable que contenga arrays //
    
    tasks.push(task) // Guarda información que viene del input //

    localStorage.setItem('tareas', JSON.stringify(tasks)); // Almacenala la información en localStorage //

} else { // En caso de que exista //

    let tasks = JSON.parse(localStorage.getItem('tareas')); // Agarra las tareas existentes, pasalas a formato JSON //

    tasks.push(task); // Guarda la información que viene del input //

    localStorage.setItem('tareas', JSON.stringify(tasks)); // Almacena la información en localStorage //

    }
}

function showTask() {

let localItems = JSON.parse(localStorage.getItem('tareas'));
let taskView = $$('.main-list-conteiner');  
const input = $('text');

taskView.innerHTML = ''; // Div 'ul' vacío.

for(let i = 0; i < localItems.length; i++){ // Mostrame, uno por uno, todos los elementos almacenados en localStorage//

// let text = localItems[i].text;

taskView.innerHTML += `               

    <li class = 'main-list d-flex'> 
    
    <div class = 'main-list-text d-flex'>

    <p> ${localItems[i].text} </p>

    <div class = 'main-list-delete d-flex'>    
    
    <span class = 'delete' onclick = "deleteTask('${localItems[i].text}')">

    <ion-icon name= "trash-outline"></ion-icon>

    </span>

        </div>
    </div>
</li>

`
// Una vez caputados, mostrame los elementos dentro de este div //


input.value = ''; // Una vez que se envia a localStorage, vaciame el input //
    

}}

function deleteTask(text){

let localItems = JSON.parse(localStorage.getItem('tareas')); // Capturame los elementos que se encuentran en localStorage //
                                                             // Transformalos en formato JSON //   

for(let i = 0; i < localItems.length; i++){ // Pasa por cada uno de los elementos //

if (localItems[i].text === text){ //En caso de que lo que se haya capturado sea igual a 'text', que proviene del input //
                                  
localItems.splice(i, 1); // Lo podemos eliminar //

    }
}

localStorage.setItem('tareas', JSON.stringify(localItems)); // Guarda nuevamente las tareas //

showTask(); // Ejecutá la función de mostrar //

}

showTask();



