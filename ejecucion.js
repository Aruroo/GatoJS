//0 = esta libre, 1 = está ocupado por x, 2 = está ocupado por o
const gato = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let movimientos = 0;
let turno = 1;

//recuperamos todas las celdas
const c = [document.querySelector('#celda0'),
        document.querySelector('#celda1'),
        document.querySelector('#celda2'),
        document.querySelector('#celda3'),
        document.querySelector('#celda4'), 
        document.querySelector('#celda5'),
        document.querySelector('#celda6'),
        document.querySelector('#celda7'),
        document.querySelector('#celda8')];

function verificarGanador() {
    if (gato[0][0] === gato[1][1] && gato[1][1] === gato[2][2]) {
        return gato[0][0];
    }
    if (gato[0][2] === gato[1][1] && gato[1][1] === gato[2][0]) {
        return gato[0][2];
    }
    for (let i = 0; i < 3; i++) {
        if (gato[i][0] === gato[i][1] && gato[i][1] === gato[i][2]) {
            return gato[i][0];       
        }
        if (gato[0][i] === gato[1][i] && gato[1][i] === gato[2][i]) {
            return gato[0][i];
        }
    }
    return 0;
}

function clickCelda(celda, indexX, indexY) {
    if (gato[indexX][indexY] == 0) {
        console.log(`Se hizo clic en ${celda.id}`);
        gato[indexX][indexY] = turno;
        movimientos += 1;
        if (turno == 1) {
            celda.innerHTML ='<img src="x.png"/>';
            turno = 2;
        } else {
            celda.innerHTML ='<img src="circulo.png"/>';
            turno = 1;
        }
    } else {
        console.log(`${celda.id} ya está ocupada`);
        document.querySelector('#error').textContent = 'Esa celda ya está ocupada!!';
    }
    determinarGanador()
}

function determinarGanador() {
    if (movimientos > 4) {
        const ganador = verificarGanador()
        if (ganador !== 0 || movimientos === 9) {
            for (let index = 0; index < 9; index++) {
                c[index].classList.add('disable')
            }
            setTimeout(() => {
                if (ganador === 1) {
                    alert('Ganador es X!');
                } else if (ganador === 2) {
                    alert('Ganador es O!');
                } else {
                    alert('Empate :(');
                }
            }, 100);
        }
    }
}



// Agregar un eventListener a cada celda
c[0].addEventListener('click', () => clickCelda(c[0], 0,0));
c[1].addEventListener('click', () => clickCelda(c[1], 0,1));
c[2].addEventListener('click', () => clickCelda(c[2], 0,2));
c[3].addEventListener('click', () => clickCelda(c[3], 1,0));
c[4].addEventListener('click', () => clickCelda(c[4], 1,1));
c[5].addEventListener('click', () => clickCelda(c[5], 1,2));
c[6].addEventListener('click', () => clickCelda(c[6], 2,0));
c[7].addEventListener('click', () => clickCelda(c[7], 2,1));
c[8].addEventListener('click', () => clickCelda(c[8], 2,2));

