export function inputVerifier(index, inputValue, warning) {
    let array = JSON.parse(localStorage.getItem('array'));
    if(!array){
        array = []
    }
    const totalArrayLen = array.length;
    
    
    if (inputValue > 99 || inputValue < -99 || inputValue === "") {
        warning.innerHTML = "Value can't be empty or greater than 99!"
        setTimeout(() => {
            warning.innerHTML = ""
        }, 3000)
        return false;
    }

    if (index > totalArrayLen - 1 || index < 0) {
        warning.innerHTML = "Index not found"
        setTimeout(() => {
            warning.innerHTML = ""
        }, 3000)
        return false;
    }

    

    return true;
}