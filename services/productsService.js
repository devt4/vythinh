const database = require("../data.json")

const getColorById = (id) => {
    const collection = database.collection[0]
    let rs = []
    collection.products.forEach(e => {
        if (e.id == id) {
            rs = e.colors
        }
    });

    return rs

}

const getDetailById=(id)=>{
    const collection = database.collection[0]
    console.log(id);
    let rs = []
    collection.products.forEach(e => {
        if (e.id === id) {
            rs = e
        }
    });
    console.log(rs);
    return rs
}
module.exports = {
    getColorById: getColorById,
    getDetailById: getDetailById
}