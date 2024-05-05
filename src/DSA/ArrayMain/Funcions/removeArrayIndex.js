import { inputVerifier } from "../../../utils/array_Utils/inputsVerifier.js";
import arrayHandler from "../arrayLogic.js";

export function removeArrayIndex (){
     
    const indexToRemoveInp = document.getElementById('indexToRemove').value;
    const warning = document.getElementById("indexToRemoveWarning");
    console.log(" i am remove function")
    if(! inputVerifier(indexToRemoveInp, null, warning)){
        return
    }

    arrayHandler.removeIndex(parseInt(indexToRemoveInp))

}