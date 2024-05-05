import { inputVerifier } from "../../../utils/array_Utils/inputsVerifier";
import arrayHandler from "../arrayLogic";

export function replaceValue(){
    const indexToReplace = document.getElementById('replaceValueIndex').value
    const newValue = document.getElementById('newValue').value
    const warning = document.getElementById('replaceWarning')

    if(!inputVerifier(indexToReplace, newValue, warning)){
        return;
    }
    arrayHandler.replaceValue(indexToReplace, newValue);
}