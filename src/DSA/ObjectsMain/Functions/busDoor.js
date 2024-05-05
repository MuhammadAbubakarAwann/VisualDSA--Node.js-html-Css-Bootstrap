import { busDoor } from "../BusSturcture/busBody.js";
import bus from "../objectLogic.js";

export function addBusDoor(){
    const doorColor = document.getElementById('busDoors').value;

    bus.DoorColor = doorColor;
    console.log("i am doored bus:", bus)
    busDoor(doorColor);
    
}