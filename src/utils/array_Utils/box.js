function addBoxSmoothly(value, boxID, position = null) {
    const circleMainDiv = document.getElementById("arrayBoxMain");
    const boxes = circleMainDiv.querySelectorAll('.box');

    var box = document.createElement("div");
    box.classList.add("box", "bordered-box", "text-white", "hidden");

    box.classList.add("bg-dark");
    box.id = boxID;
    var centerText = document.createElement("div");
    centerText.classList.add("center-text");
    centerText.textContent = value;
    box.appendChild(centerText);

    if (position === null) {
        circleMainDiv.appendChild(box);
    } else {
        circleMainDiv.insertBefore(box, boxes[position]);
    }

    requestAnimationFrame(() => {
        box.classList.remove("hidden");
    });


}

function removeBoxSmoothly(boxNum) {
    const boxID = boxNum;
    const ArrayMain = document.getElementById("arrayBoxMain");
    let boxToRemove = ArrayMain.children[boxID]

    if (boxToRemove) {
        console.log("Removing box:", boxToRemove);
        boxToRemove.classList.remove("bg-dark")
        boxToRemove.classList.add("bg-danger")
        boxToRemove.classList.add("hidden");
        boxToRemove.addEventListener("transitionend", () => {
            console.log("Box removed:", boxToRemove);
            boxToRemove.remove();
        }, { once: true });
    }
}

function replaceValueInBox(boxIndex, newValue) {
    const ArrayMain = document.getElementById("arrayBoxMain");
    let boxToUpdate = ArrayMain.children[boxIndex]


    boxToUpdate.classList.remove('bg-dark')
    boxToUpdate.classList.add('bg-success');
    if (boxToUpdate) {
        const centerText = boxToUpdate.querySelector('.center-text');
        centerText.textContent = newValue;

        setTimeout(() => {
            boxToUpdate.classList.remove('bg-success')
            boxToUpdate.classList.add('bg-dark');
        }, 1500)
    } else {
        console.log("Box not found")
    }
}
export { addBoxSmoothly, removeBoxSmoothly, replaceValueInBox }