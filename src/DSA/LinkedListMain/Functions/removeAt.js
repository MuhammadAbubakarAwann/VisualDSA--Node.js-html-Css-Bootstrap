import { inputChecker } from "../../../utils/linkedList_Utils/inputChecker"
import listHandler from "../linkedListlogic";

export function removeAt(){
    const indexToRemove = document.getElementById('LL_indexToRemove').value;

    if(!inputChecker(indexToRemove)){
        return;
    }
    listHandler.removeAt(indexToRemove);

    listHandler.display();
}