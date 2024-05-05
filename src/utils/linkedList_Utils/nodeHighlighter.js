function highlightNode(index) {
    const listMainDiv = document.getElementById("listBoxMain");
    const nodeToHighlight = listMainDiv.children[index];
    const nextPart = nodeToHighlight.querySelector(".next")
    const dataPart = nodeToHighlight.querySelector(".data")

    nodeToHighlight.classList.remove("bg-dark")
    nodeToHighlight.classList.add("bg-warning");

    dataPart.classList.remove("bg-dark")
    dataPart.classList.add("bg-warning");

    nextPart.classList.remove("bg-danger", "text-white")
    nextPart.classList.add("bg-light", "text-dark");

    if (nodeToHighlight) {
        setTimeout(() => {
            nodeToHighlight.classList.remove("bg-warning")
            nodeToHighlight.classList.add("bg-dark");

            dataPart.classList.remove("bg-warning")
            dataPart.classList.add("bg-dark");

            nextPart.classList.remove("bg-light", "text-dark")
            nextPart.classList.add("bg-danger", "text-white");
        }, 5000);
    }


}



function tempHighlightNode(index) {
    const listMainDiv = document.getElementById("listBoxMain");
    const nodeToHighlight = listMainDiv.children[index];
    const nextPart = nodeToHighlight.querySelector(".next")
    const dataPart = nodeToHighlight.querySelector(".data")

    nodeToHighlight.classList.remove("bg-dark")
    nodeToHighlight.classList.add("bg-info");

    dataPart.classList.remove("bg-dark")
    dataPart.classList.add("bg-info");

    nextPart.classList.remove("bg-danger", "text-white")
    nextPart.classList.add("bg-white", "text-dark");

}


function tempUnHighlightNode(index) {
    const listMainDiv = document.getElementById("listBoxMain");
    const nodeToHighlight = listMainDiv.children[index];
    const nextPart = nodeToHighlight.querySelector(".next")
    const dataPart = nodeToHighlight.querySelector(".data")

    nodeToHighlight.classList.remove("bg-warning")
    nodeToHighlight.classList.add("bg-dark");

    dataPart.classList.remove("bg-warning")
    dataPart.classList.add("bg-dark");

    nextPart.classList.remove("bg-white", "text-dark")
    nextPart.classList.add("bg-danger", "text-white");

}

export { tempHighlightNode, tempUnHighlightNode, highlightNode }