import { busBody } from "../BusSturcture/busBody.js";
import bus from "../objectLogic.js";

export function createObj(){
    bus.Name = "Abubakars bus";
    console.log("changed bus:",bus);
    busBody()
}