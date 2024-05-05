import stack from "../stackLogic.js";


export function popValue() {
    const circleMainDiv = document.getElementById("circleMain")
    stack.pop();

        if(stack.size > 0){circleMainDiv.removeChild(circleMainDiv.firstChild);}
        
}