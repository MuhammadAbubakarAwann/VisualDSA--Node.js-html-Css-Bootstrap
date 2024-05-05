import pushValue from "./stack/push.js"
import { popValue } from "./stack/pop.js"
import { searchValue } from "./stack/search.js"
import { peekValue } from "./stack/peek.js"

const createBtn = document.getElementById("createBtn")
const pushBtn = document.getElementById("pushBtn")
const popBtn = document.getElementById("popBtn")
const searchBtn = document.getElementById("searchBtn")
const peekBtn = document.getElementById("peekBtn")

function stackOPT (){
    pushBtn.addEventListener('click', pushValue)
    popBtn.addEventListener('click', popValue)
    searchBtn.addEventListener('click', searchValue)
    peekBtn.addEventListener('click', peekValue)

}
export default stackOPT;
