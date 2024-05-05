import stack from "../stackLogic.js";

function pushValue() {

    const stackInput = document.getElementById('stackInput');
    const value = stackInput.value;

    if (value !== null && value !== "") {

        stack.push(value)
    }
}
export default pushValue;