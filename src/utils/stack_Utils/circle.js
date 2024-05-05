function addCircleSmoothly(value, isHead = false, isTail = false) {
    const circleMainDiv = document.getElementById("circleMain");

    var circularBorder = document.createElement("div");
    circularBorder.classList.add("circular-border", "text-white", "hidden");
    if (isHead) {
        console.log("headddd here");
        circularBorder.classList.add("bg-success"); 
        circularBorder.id = value;
    }else if(isTail){
        console.log("tail here");
        circularBorder.classList.add("bg-warning"); 
        circularBorder.id = value;
    } else {
        circularBorder.classList.add("bg-dark"); 
        circularBorder.id = value;
    }
    

    var centerText = document.createElement("div");
    centerText.classList.add("center-text");
    centerText.textContent = value;

    circularBorder.appendChild(centerText);

    circleMainDiv.appendChild(circularBorder);

    requestAnimationFrame(() => {
        circularBorder.classList.remove("hidden");
    });
}


function removeCircleSmoothly(value) {
    const circleToRemove = document.getElementById(value);
    if (circleToRemove) {
        console.log("Removing circle:", circleToRemove);
        circleToRemove.classList.add("hidden");
        circleToRemove.addEventListener("transitionend", () => {
            console.log("Circle removed:", circleToRemove);
            circleToRemove.remove();
        }, { once: true });
    }
}
export { addCircleSmoothly, removeCircleSmoothly };