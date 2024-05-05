import { inputVerifier } from "../../../utils/array_Utils/inputsVerifier";
import arrayHandler from "../arrayLogic";

export function insertValue() {
    const inputValue = document.getElementById('inputValue_1').value;
    const warning = document.getElementById('insertWarning');
    let array = JSON.parse(localStorage.getItem('array'));
    if(!array){
        array = []
    }

    const totalArrayLen = array.length;


    if (inputValue > 99 || inputValue < -99 || inputValue === "") {
        warning.innerHTML = "Value can't be empty or greater than 99 or less then -99!"
        setTimeout(() => {
            warning.innerHTML = ""
        }, 3000)
        return false;
    }
    inputVerifier(null, inputValue, warning)

    if (totalArrayLen >= 14) {
        warning.innerHTML = "only 14 indexes allowd"
        setTimeout(() => {
            warning.innerHTML = ""
        }, 3000)
        return false;
    }


    arrayHandler.insert(inputValue);
}