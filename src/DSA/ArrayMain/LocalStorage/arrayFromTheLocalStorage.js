function getArrayFromLocalStorage() {
    const localStorageData = localStorage.getItem('array')
    console.log(localStorageData)

    let array = []
    if (localStorageData) {
        try {
            array = JSON.parse(localStorageData);
        } catch (error) {
            console.error('Error parsing task list:', error);
        }
    }

    return array;
}
export default getArrayFromLocalStorage