import listHandler from "../../DSA/LinkedListMain/linkedListlogic.js";

export function inputChecker(index, inputValue) {

    const warning = document.getElementById('LL_insertAtIndexWarning')
    const sizeOfList = listHandler.size;

    if (inputValue > 99 || inputValue === "") {
        warning.innerHTML = "Value can't be empty or greater than 99!"
        setTimeout(() => {
            warning.innerHTML = ""
        }, 3000)
        return false;
    }

    if (index > sizeOfList-1|| index < 0) {
        warning.innerHTML = "Index not found"
        setTimeout(() => {
            warning.innerHTML = ""
        }, 3000)
        return false;
    }

    if(sizeOfList >= 8 ){
        warning.inertHTML = "List size reached, Admin allows only 8 nodes"
        setTimeout(() => {
            warning.innerHTML = "";
        })
        return false
    }
    return true;
}