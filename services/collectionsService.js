const { defaultFilter, PRICE_DOWN, PRICE_UP, BSL } = require("../const/const")
const clientPromise =  require("../libs/mongodb-client")
const {filterProductionsByTags, sortProductions} = require("../libs/collection-until")

const getCollectionById = async (id, filter) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("collections").findOne({ "_id": id })
   
    return { ...rs, products: sortProductions(rs.products, sort = filter.sort) }
}

const getCollections = async (tags = []) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("collections").find({}).toArray()
    for (let index = 0; index < rs.length; index++) {
        rs[index] = { ...rs[index], products: filterProductionsByTags(rs[index].products, tags) }
    }
    return rs;
}

const findCollectionByProductId= async (idProduct) =>{
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("collections").findOne({ "products.id": idProduct })
    return rs
}

module.exports = {
    getCollectionById: getCollectionById,
    getCollections: getCollections,
    findCollectionByProductId: findCollectionByProductId
}
