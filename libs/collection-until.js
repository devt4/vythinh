const { PRICE_UP, PRICE_DOWN, BSL } = require("../const/const");


const filterProductionsByTags = (listProduct = [], tagsCheck = []) => {
    let rs = []
    for (let index = 0; index < listProduct.length; index++) {
        const element = listProduct[index];
        if (_checkTag(element.tags, tagsCheck)) {
            rs.push(element)
        }
    }
    return rs
}

const _checkTag = (tagsPro = [], tagsCheck = []) => {
    for (let index = 0; index < tagsPro.length; index++) {
        const tPro = tagsPro[index];
        for (let index = 0; index < tagsCheck.length; index++) {
            const tCheck = tagsCheck[index];
            if (tCheck === tPro) {
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

module.exports={
    filterProductionsByTags: filterProductionsByTags,
    checkTag: _checkTag,
    sortProductions: _sortProductions
}