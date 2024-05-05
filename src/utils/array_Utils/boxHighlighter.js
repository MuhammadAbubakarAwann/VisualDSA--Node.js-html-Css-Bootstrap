function highlight(index) {
    const ArrayMain = document.getElementById("arrayBoxMain");
    let boxToHighlight = ArrayMain.children[index]

    boxToHighlight.classList.remove('bg-dark')
    boxToHighlight.classList.remove('text-white')
    boxToHighlight.classList.add('bg-warning');
    boxToHighlight.classList.add('text-dark')

    if (boxToHighlight) {
        setTimeout(() => {
            boxToHighlight.classList.remove('bg-warning')
            boxToHighlight.classList.add('bg-dark');
            boxToHighlight.classList.remove('text-dark')
            boxToHighlight.classList.add('text-white')
        }, 15000);
    }


}
function unhighlight(index) {
    const ArrayMain = document.getElementById("arrayBoxMain");
    let boxToHighlight = ArrayMain.children[index]
    boxToHighlight.classList.remove('bg-warning')
    boxToHighlight.classList.add('bg-dark');
    boxToHighlight.classList.remove('text-dark')
    boxToHighlight.classList.add('text-white')

}
function temHighlight(index) {
    const ArrayMain = document.getElementById("arrayBoxMain");
    let boxToHighlight = ArrayMain.children[index]

    boxToHighlight.classList.remove('bg-dark')
    boxToHighlight.classList.add('bg-info');


}
function tempUnhighlight(index) {
    const ArrayMain = document.getElementById("arrayBoxMain");
    let boxToHighlight = ArrayMain.children[index]
    boxToHighlight.classList.remove('bg-info')
    boxToHighlight.classList.add('bg-dark');

}


export { highlight, unhighlight, tempUnhighlight, temHighlight };