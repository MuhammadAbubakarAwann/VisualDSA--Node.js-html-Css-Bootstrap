import bus from "../objectLogic.js"

export function busName (){
    const busName = document.getElementById("busName").value;
    console.log(busName);
    bus.Name = busName;
    console.log("i am named bus:",bus)
    
}   