import circle from "../../../utils/circle.js";
import stack from "../../stackLogic.js";



function loadStack() {
    let stackArray = JSON.parse(localStorage.getItem('stack'));
    if (stackArray) {
        for (let val of stackArray.reverse()) {
            stack.push(val);
            circle(val)
        }
    }
}
export default loadStack;