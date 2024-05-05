function busBody() {
    const busMain = document.getElementById("objMain")

    const busBody = document.createElement('div')
    busBody.id = "busBody"
    busBody.classList.add("box");

    busMain.appendChild(busBody)
}

function busBodyColor(color) {
    const busBody = document.getElementById("busBody")

    busBody.style.backgroundColor = color;

}

function busWheel(color, qty) {
    const busBody = document.getElementById("busBody");

    const wheelContainer = document.createElement('div');
    wheelContainer.id = "wheelContainer";

    for (let i = 0; i < qty; i++) {
        const wheel = document.createElement('div');
        wheel.classList.add('circle');
        wheel.id = "wheel"
        wheel.style.backgroundColor = color;
        wheelContainer.appendChild(wheel);

    }
    busBody.appendChild(wheelContainer);
}

function busWindow(color, qty) {
    const busBody = document.getElementById('busBody');

    const windowContainer = document.createElement('div');
    windowContainer.id = "windowContainer";


    for (let i = 0; i < qty; i++) {
        const window = document.createElement('div');
        window.classList.add('box');
        window.id = "window"
        window.style.backgroundColor = color;
        windowContainer.appendChild(window);

    }
    busBody.appendChild(windowContainer);
}

function busDoor(color) {
    const busBody = document.getElementById('busBody');

    const door = document.createElement('div');
    door.classList.add('box');
    door.id = "door"
    door.style.backgroundColor = color;
    busBody.appendChild(door);


}


export { busBody, busBodyColor, busWheel, busWindow, busDoor }