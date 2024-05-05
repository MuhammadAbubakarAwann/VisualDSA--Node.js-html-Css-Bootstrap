import { inputVerifier } from "../../../utils/array_Utils/inputsVerifier.js";
import arrayHandler from "../arrayLogic.js";

function insert_To_index() {
    const inputIndex = document.getElementById('inputIndex').value
    const inputValue = document.getElementById('inputValue').value
    const warning = document.getElementById('insertAtIndexWarning');

    let array = JSON.parse(localStorage.getItem('array'));
    if(!array){
        array = []
    }

    const totalArrayLen = array.length;

    if (!inputVerifier(inputIndex, inputValue, warning)) {
        return; 
    }

    if (totalArrayLen >= 14) {
        warning.innerHTML = "only 14 indexes allowd"
        setTimeout(() => {
            warning.innerHTML = ""
        }, 3000)
        return false;
    }

    arrayHandler.insertElementAtSpecificIndex(inputIndex, inputValue);
}

export default insert_To_index;