import stack from "../stackLogic.js";
const outputDiv = document.getElementById('output');
function updateOutput(message) {
    outputDiv.innerHTML = message;
}
export function searchValue() {
    const stackInput = document.getElementById('stackInput');
    const value = stackInput.value;

    const index = stack.search(value);
    if (index !== -1) {
        updateOutput(`Value ${value} found at index ${index}.`);
    } else {
        updateOutput(`Value ${value} not found in the stack.`);
    }
}