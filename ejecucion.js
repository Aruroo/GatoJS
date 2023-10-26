//0 = esta libre, 1 = está ocupado por x, 2 = está ocupado por o
const gato = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let turno = 1;

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

function clickCelda(celda, index) {
    if (gato[index] == 0) {
        console.log(`Se hizo clic en ${celda.id}`);
        gato[index] = turno;
        if (turno == 1) {
            celda.textContent = 'X';
            turno = 2;
        } else {
            celda.textContent = 'O';
            turno = 1;
        }
    } else {
        console.log(`${celda.id} ya está ocupada`);
        document.querySelector('#error').textContent = 'Esa celda ya está ocupada!!';
    }
}

// Agregar un eventListener a cada celda
c0.addEventListener('click', () => clickCelda(c0, 0));
c1.addEventListener('click', () => clickCelda(c1, 1));
c2.addEventListener('click', () => clickCelda(c2, 2));
c3.addEventListener('click', () => clickCelda(c3, 3));
c4.addEventListener('click', () => clickCelda(c4, 4));
c5.addEventListener('click', () => clickCelda(c5, 5));
c6.addEventListener('click', () => clickCelda(c6, 6));
c7.addEventListener('click', () => clickCelda(c7, 7));
c8.addEventListener('click', () => clickCelda(c8, 8));

