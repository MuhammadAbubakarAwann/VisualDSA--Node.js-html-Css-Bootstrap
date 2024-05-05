import stack from "../stackLogic.js";
const outputDiv = document.getElementById('output');
function updateOutput(message) {
    outputDiv.innerHTML = message;
}
export function peekValue() {
    const topValue = stack.peek();
    if (topValue !== null) {
        updateOutput(`Top of stack: ${topValue}`);
    } else {
        updateOutput("Stack is empty.");
    }
}