import { busWheel } from "../BusSturcture/busBody.js";
import bus from "../objectLogic.js";

export function busWheels(){
    const wheelColor = document.getElementById('busWheelsColor').value;
    const wheelQTY = document.getElementById('busWheelsQTY').value;

    bus.wheels.color = wheelColor;
    bus.wheels.qty = wheelQTY;

    console.log("i am wheeled bus:", bus)
    
    busWheel(bus.wheels.color, bus.wheels.qty);
}