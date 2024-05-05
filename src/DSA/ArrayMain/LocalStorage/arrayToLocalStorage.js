import arrayHandler from "../arrayLogic.js";

function updateArrayInLocalStorage(){
    const array = arrayHandler.array;
    localStorage.setItem('array', JSON.stringify(array));
}
export default updateArrayInLocalStorage;