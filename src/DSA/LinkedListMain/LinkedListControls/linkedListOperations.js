import addNode from "../Functions/addNode.js";
import { emptyList } from "../Functions/emptyList.js";
import { getValueAt } from "../Functions/getAt.js";
import { getSize } from "../Functions/getSize.js";
import { insertAtPos } from "../Functions/insertAtPos.js";
import { removeAt } from "../Functions/removeAt.js";

const addNodeBtn = document.getElementById('LL_push_go_btn');
const insertAtPosBtn = document.getElementById('insertAt_to_LL_go_btn');
const removeAtBtn = document.getElementById('LL_indexToRemove_go_btn');
const getAtBtn = document.getElementById('LL_indexToGet_GO_Btn');
const getSizeBtn = document.getElementById('LL_getSize');
const emptyListBtn = document.getElementById('LL_isEmpty')


function linkedListOPT() {
    addNodeBtn.addEventListener('click', () => {
        addNode();
    });

    insertAtPosBtn.addEventListener('click', () => {
        insertAtPos();
    })

    removeAtBtn.addEventListener('click', () => {
        removeAt();
    })

    getAtBtn.addEventListener('click', () => {
        getValueAt();
    })

    getSizeBtn.addEventListener('click', () => {
        getSize();
    })

    emptyListBtn.addEventListener('click', () => {
        emptyList()
    })
}
export default linkedListOPT;