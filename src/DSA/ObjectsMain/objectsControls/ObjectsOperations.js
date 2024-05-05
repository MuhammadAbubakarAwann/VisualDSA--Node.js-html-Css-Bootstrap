
import { busColor } from "../Functions/busColor.js";
import { busName } from "../Functions/busName.js";
import { busWheels } from "../Functions/busWheels.js";
import { createObj } from "../Functions/createObject.js";
import { busWindows } from "../Functions/busWindows.js";
import { addBusDoor } from "../Functions/busDoor.js";

const createBusObjBtn = document.getElementById('create_bus_obj_Btn');
const busName_Go_Btn = document.getElementById('busName_go_btn');
const busColor_Go_Btn = document.getElementById('busColor_go_btn');
const busWheels_Go_Btn = document.getElementById('buswheels_go_btn');
const busWindows_Go_Btn = document.getElementById('busWindows_go_btn');
const busDoors_Go_Btn = document.getElementById('busDoors_go_btn');

function objectsOPT() {
    createBusObjBtn.addEventListener('click', () => {
        console.log(" create but button clicked");
        createObj();

        busName_Go_Btn.addEventListener('click', () => {
            busName()
        })

        busColor_Go_Btn.addEventListener('click', () => {
            busColor()
        })

        busWheels_Go_Btn.addEventListener('click', () => {
            busWheels()
        })
        busWindows_Go_Btn.addEventListener('click', () =>{
            busWindows()
        })

        busDoors_Go_Btn.addEventListener('click', () => {
            addBusDoor();
        })

    })
}
export default objectsOPT;