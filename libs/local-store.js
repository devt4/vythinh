// Save data to local storage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Get data from local storage
function getFromLocalStorage(key) {
    var data = localStorage.getItem(key);
    return JSON.parse(data);
}

module.exports ={
    saveToLocalStorage: saveToLocalStorage,
    getFromLocalStorage: getFromLocalStorage
}