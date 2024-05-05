import insert_To_index from "../Funcions/insertValueToIndex.js";
import { insertValue } from "../Funcions/insertValue.js";
import { removeArrayIndex } from "../Funcions/removeArrayIndex.js";
import { replaceValue } from "../Funcions/replaceValue.js";
import { maxValue } from "../Funcions/maxValue.js";
import { minValue } from "../Funcions/minValue.js";

const insertAtIndexButton = document.getElementById("insert_at_index_array_go_btn");
const insertSubmitBtn = document.getElementById('insert_go_btn');
const removeArrayIndexBtn = document.getElementById('removeArrayIndex_GO_Btn');
const replaceValueBtn = document.getElementById("replaceValueIndexGO")
const maxBtn = document.getElementById("arrayMax")
const minBtn = document.getElementById('arrayMin')


function arrayOPT(){

    insertSubmitBtn.addEventListener('click', () => {
        console.log(" insert value button clicked")
        
        insertValue()
    })
    insertAtIndexButton.addEventListener('click', ()=>{
        insert_To_index()
        console.log(" insert to specific button clicked")
    });
    removeArrayIndexBtn.addEventListener('click', ()=>{
        removeArrayIndex()
        console.log(" remove index clicked")
    });
    replaceValueBtn.addEventListener('click', () => {
        console.log(" replace value at index clicked")
        replaceValue()

    })
    maxBtn.addEventListener('click', ()=>{
        maxValue();
    })

    minBtn.addEventListener('click', ()=>{
        minValue();
    });


}
export default arrayOPT;

