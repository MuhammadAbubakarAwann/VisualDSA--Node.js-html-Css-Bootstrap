//import updateArrayInLocalStorage from "./LocalStorage/arrayToLocalStorage.js"
import { addBoxSmoothly, removeBoxSmoothly, replaceValueInBox } from "../../utils/array_Utils/box.js"
import { highlight, unhighlight, temHighlight, tempUnhighlight } from "../../utils/array_Utils/boxHighlighter.js";

class ArrayHandler {
    constructor() {
        this.array = []
        this.reloadArray();
    }

    insert(value) {
        this.array.push(value);
        console.log("arrya lenjerjererjer :", this.array.length)
        addBoxSmoothly(value, "arr" + this.array.length)
        this.updateArrayInLocalStorage();
    }

    insertElementAtSpecificIndex(index, value) {
        this.array.splice(index, 0, value);
        console.log(this.array)
        console.log(this.array.length)

        addBoxSmoothly(value, null, index)
        this.updateArrayInLocalStorage()
    }

    removeIndex(index) {
        this.array.splice(index, 1)
        this.updateArrayInLocalStorage()
        removeBoxSmoothly(index)
    }

    replaceValue(index, newValue) {
        this.array.splice(index, 1, newValue);
        console.log(this.array)
        console.log(this.array.length)

        replaceValueInBox(index, newValue)
        this.updateArrayInLocalStorage()

    }
    async max() {
        let max = this.array[0];
        let maxIndex = 0;
        highlight(maxIndex);

        for (let i = 1; i < this.array.length; i++) {
            temHighlight(i);

            await new Promise(resolve => setTimeout(resolve, 1000));

            tempUnhighlight(i);

            if (this.array[i] > max) {
                unhighlight(maxIndex);
                max = this.array[i];
                maxIndex = i;
                highlight(maxIndex);
            }
        }
    }


    async min() {
        let min = this.array[0];
        console.log(this.array)
        let minIndex = 0;
        highlight(minIndex);

        for (let i = 1; i < this.array.length; i++) {
            temHighlight(i);

            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(min)

            tempUnhighlight(i);

            if (this.array[i] < min) {
                unhighlight(minIndex);
                min = this.array[i];
                minIndex = i;
                highlight(minIndex);
                console.log(this.array)

            }
        }
        console.log("Min value: ", min, "min index: ", minIndex);
    }





    reloadArray() {
        let array = JSON.parse(localStorage.getItem('array'));
        if (array) {
            for (let val of array) {
                this.insert(val);
            }
        }
    }

    updateArrayInLocalStorage() {
        localStorage.setItem('array', JSON.stringify(this.array));
    }

}
const arrayHandler = new ArrayHandler();

export default arrayHandler;