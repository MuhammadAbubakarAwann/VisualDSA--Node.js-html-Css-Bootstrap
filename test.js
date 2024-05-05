let array = [66, 57, 6, 44, 5, 89]


let min = array[0];
let minIndex = 0;

for (let i = 1; i < array.length; i++) {
   


    if (array[i] < min) {
        min = array[i];
        minIndex = i;
    }
}
console.log("Min value: ", min, "min index: ", minIndex);