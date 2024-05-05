import { busWindow } from "../BusSturcture/busBody.js";
import bus from "../objectLogic.js";

export function busWindows(){
    const windowColor = document.getElementById('busWindowColor').value;
    const windowQTY = document.getElementById('busWindowsQTY').value;

    bus.windows.color = windowColor;
    bus.windows.qty = windowQTY;

    console.log("i am windowed bus:", bus)
    
    busWindow(bus.windows.color, bus.windows.qty);
}