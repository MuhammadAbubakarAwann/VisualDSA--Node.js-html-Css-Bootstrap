import { busBody, busBodyColor } from "../BusSturcture/busBody.js";
import bus from "../objectLogic.js";

export function busColor() {
    const busColor = document.getElementById("busColor").value;
    console.log(busColor);
    bus.Color = busColor;
    console.log("i am Colored bus:", bus)

    busBodyColor(bus.Color)

}