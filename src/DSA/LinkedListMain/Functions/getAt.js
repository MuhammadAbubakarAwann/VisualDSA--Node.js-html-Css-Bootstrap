import { inputChecker } from "../../../utils/linkedList_Utils/inputChecker.js";
import listHandler from "../linkedListlogic.js";


export function getValueAt(){
    const indexToGet = document.getElementById('LL_indexToGet').value;

    if(!inputChecker(indexToGet)){
        return;
    }
    listHandler.getAt(indexToGet)
    
}