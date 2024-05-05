import listHandler from "../linkedListlogic";

function addNode(){
    const nodeData = document.getElementById('push_to_LL').value;
    const warning = document.getElementById('LL_insertAtIndexWarning')

    if(nodeData < 0 || nodeData > 99){
        console.log("please enter data between 0 and 99");
        return;
    }
    if(listHandler.size >= 8 ){
        warning.inertHTML = "List size reached, Admin allows only 8 nodes"
        setTimeout(() => {
            warning.innerHTML = "";
        })
        return;
    }

    listHandler.append(nodeData)
    listHandler.display();
}
export default addNode;