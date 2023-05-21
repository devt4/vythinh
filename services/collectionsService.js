const database = require("../data.json")
const { defaultFilter, PRICE_DOWN, PRICE_UP, BSL } = require("../const/const")

const getCollectionById = (id, filter) => {
    const database = require("../data.json")
    for (let index = 0; index < database.collection.length; index++) {
        const element = database.collection[index];
        if (element._id === id) {
            return { ...element, products: _sortProductions(element.products, sort = filter.sort) }
        }
    }
    return {}
}

const getCollections = (tags=[]) => {
    const database = require("../data.json")
    let rs = database.collection
    for (let index = 0; index < rs.length; index++) {
        rs[index] = {...rs[index], products: filterProductionsByTags(rs[index].products, tags)}
    }
    return rs;

}

const filterProductionsByTags = (listProduct = [], tagsCheck = []) => {
    let rs = []
    for (let index = 0; index < listProduct.length; index++) {
        const element = listProduct[index];
        if (_check(element.tags, tagsCheck)) {
            rs.push(element)
        }
    }
    console.log(`product by tag: ${rs.length}`);
    return rs
}


const _check =(tagsPro=[], tagsCheck=[])=>{
    for (let index = 0; index < tagsPro.length; index++) {
        const tPro = tagsPro[index];
        for (let index = 0; index < tagsCheck.length; index++) {
            const tCheck = tagsCheck[index];
            if (tCheck===tPro) {
                console.log("co tag trung" + tCheck + tPro);
                return true
            }
             
        }
    }
    return false
}

const _sortProductions = (list = [], sort) => {

    list.sort((a, b) => {
        if (sort === PRICE_UP) {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return 1;
            return 0
        }
        if (sort === PRICE_DOWN) {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            return 0
        }
        if (sort === BSL) {
            if (a.selled < b.selled) return 1;
            if (a.selled > b.selled) return -1;
            return 0
        }

    })
    console.log(list);
    return list
}

module.exports = {
    getCollectionById: getCollectionById,
    getCollections: getCollections
}
