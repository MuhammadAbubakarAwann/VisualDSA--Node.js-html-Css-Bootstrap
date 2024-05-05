function addNodeSmoothly(value, nodeID, position = null) {
    const listMainDiv = document.getElementById("listBoxMain");
    const nodes = listMainDiv.querySelectorAll('.box');

    var node = document.createElement("div");
    node.classList.add("box", "LL-bordered-box", "text-white", "hidden");

    // Main box styling
    node.classList.add("bg-dark");
    node.id = nodeID;

    // Data partition
    var dataPartition = document.createElement("div");
    dataPartition.classList.add("partition", "data", "bg-dark");
    dataPartition.textContent = value;

    // Next pointer partition
    var nextPartition = document.createElement("div");
    nextPartition.classList.add("partition", "next", "bg-danger");
    nextPartition.textContent = "Next";

    // Append partitions to box
    node.appendChild(dataPartition);
    node.appendChild(nextPartition);

    // Insert box at specified position or append to the end
    if (position === null) {
        listMainDiv.appendChild(node);
    } else {
        listMainDiv.insertBefore(node, nodes[position]);
    }

    // Smooth animation and color change
    requestAnimationFrame(() => {
        node.classList.remove("hidden");
        node.classList.add("bg-success"); // Change color when added
        setTimeout(() => {
            node.classList.remove("bg-success"); // Remove color after a delay
        }, 1500);
    });
}

function removeNodeSmoothly(nodeNum) {

    const listMainDiv = document.getElementById("listBoxMain");
    let nodeToRemove = listMainDiv.children[nodeNum]

    if (nodeToRemove) {
        console.log("Removing box:", nodeToRemove);
        nodeToRemove.classList.remove("bg-dark")
        nodeToRemove.classList.add("bg-danger")
        nodeToRemove.classList.add("hidden");
        nodeToRemove.addEventListener("transitionend", () => {
            console.log("Box removed:", nodeToRemove);
            nodeToRemove.remove();
        }, { once: true });
    }
}

export { addNodeSmoothly, removeNodeSmoothly }