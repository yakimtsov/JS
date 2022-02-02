Задание:
// Реазизовать игру, правилом которой является перенести все шарики
// на доске внутрь квадрата.
// - при старте игры шарики должны создаваться случайного
//   размера (80 - 120 px) и в случайном месте
// - шарики перемещаются с помощью мыши
// - шарик изчезает, если его границы оказываются внутри квадрата

// - получить ссылки на все необходимые елементы в переменные
// - сгенерировать игровое поле
// - при создании каждого шарика - вешать на него
//   обработчик mousedown
// - при нажатии клавиши мыши на шарике:
//   - сместить координаты шарика, что бы центр шарика совместился с
//     курсором
//   - повесить обработчик mousemove, что бы шарик перемещался
//     за мышью
// - при отпускании мыши:
//   - удалить ненужные обработчики
//   - проверить, находится ли шарик внутри квадрата, если да,
//     удалить шарик



const container = document.getElementById('container');
const hole = document.getElementById('hole');



const getRandomBallsProperties = () => {
    const size = Math.ceil(Math.random() * 40) + 80;
    return{
        size,
        top: (container.offsetHeight - size) * Math.random(),
        left: (container.offsetWidth - size) * Math.random(),
    };
};


const createBalls = () => {

    for(let i = 0; i < 10; i++){
        const ball = document.createElement('div');
        const ballProps = getRandomBallsProperties()
    
        ball.classList.add('ball');
        ball.style.top = `${ballProps.top}px`;
        ball.style.left = `${ballProps.left}px`;
        ball.style.width = `${ballProps.size}px`;
        ball.style.height = `${ballProps.size}px`;

        // ball.addEventListener("mousedown", onDragStart);
        container.append('ball')
    }
}

createBalls()