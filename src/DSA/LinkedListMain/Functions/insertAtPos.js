import { inputChecker } from "../../../utils/linkedList_Utils/inputChecker.js"
import listHandler from "../linkedListlogic.js";

export function insertAtPos() {
    const indexToInsert = document.getElementById('insertAt_to_LL').value
    const valueToInsert = document.getElementById('insertAt_to_LL_val').value

    if(!inputChecker(indexToInsert, valueToInsert)){
        return;
    }  


    listHandler.insertAt(valueToInsert, indexToInsert);
    listHandler.display();


}