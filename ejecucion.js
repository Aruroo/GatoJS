//false = esta libre, true = está ocupada
const gato = [false, false, false, false, false, false, false, false, false];

//recuperamos todas las celdas
let c0 = document.querySelector('#celda0');
let c1 = document.querySelector('#celda1');
let c2 = document.querySelector('#celda2');
let c3 = document.querySelector('#celda3');
let c4 = document.querySelector('#celda4');
let c5 = document.querySelector('#celda5');
let c6 = document.querySelector('#celda6');
let c7 = document.querySelector('#celda7');
let c8 = document.querySelector('#celda8');

// Agregar un eventListener a cada celda
c0.addEventListener('click', () => {
    if (gato[0] == false) {
        console.log('Se hizo clic en c0');
        gato[0] = true ;
    } else {
        console.log('c0 ya está ocupada');
        document.querySelector('#error').textContent = 'Esa celda ya está ocupada!!';
    }
});

c1.addEventListener('click', () => {
    if (gato[1] == false) {
        console.log('Se hizo clic en c1');
        gato[1] = true ;
    } else {
        console.log('c1 ya está ocupada');
        document.querySelector('#error').textContent = 'Esa celda ya está ocupada!!';
    }
});

c2.addEventListener('click', () => {
    if (gato[2] == false) {
        console.log('Se hizo clic en c2');
        gato[2] = true ;
    } else {
        console.log('c2 ya está ocupada');
        document.querySelector('#error').textContent = 'Esa celda ya está ocupada!!';
    }
});

c3.addEventListener('click', () => {
    if (gato[3] == false) {
        console.log('Se hizo clic en c3');
        gato[3] = true ;
    } else {
        console.log('c3 ya está ocupada');
        document.querySelector('#error').textContent = 'Esa celda ya está ocupada!!';
    }
});

c4.addEventListener('click', () => {
    if (gato[4] == false) {
        console.log('Se hizo clic en c4');
        gato[4] = true ;
    } else {
        console.log('c4 ya está ocupada');
        document.querySelector('#error').textContent = 'Esa celda ya está ocupada!!';
    }
});

c5.addEventListener('click', () => {
    if (gato[5] == false) {
        console.log('Se hizo clic en c5');
        gato[5] = true ;
    } else {
        console.log('c5 ya está ocupada');
        document.querySelector('#error').textContent = 'Esa celda ya está ocupada!!';
    }
});

c6.addEventListener('click', () => {
    if (gato[6] == false) {
        console.log('Se hizo clic en c6');
        gato[6] = true ;
    } else {
        console.log('c6 ya está ocupada');
        document.querySelector('#error').textContent = 'Esa celda ya está ocupada!!';
    }
});

c7.addEventListener('click', () => {
    if (gato[7] == false) {
        console.log('Se hizo clic en c7');
        gato[7] = true ;
    } else {
        console.log('c7 ya está ocupada');
        document.querySelector('#error').textContent = 'Esa celda ya está ocupada!!';
    }
});

c8.addEventListener('click', () => {
    if (gato[8] == false) {
        console.log('Se hizo clic en c8');
        gato[8] = true ;
    } else {
        console.log('c8 ya está ocupada');
        document.querySelector('#error').textContent = 'Esa celda ya está ocupada!!';
    }
});