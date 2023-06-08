const { defaultFilter, PRICE_DOWN, PRICE_UP, BSL } = require("../const/const")
const clientPromise = require("../libs/mongodb-client")
const { filterProductionsByTags, sortProductions } = require("../libs/collection-until")

const getCollectionById = async (id, filter) => {
    try {
        const client = await clientPromise
        const db = client.db("lamapex");
        const rs = await db.collection("collections").findOne({ "_id": id })
        return { ...rs, products: sortProductions(rs.products, sort = filter.sort) }
    } catch (error) {
        return {}
    }
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

const getCollectionsAll = async (tags = []) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("collections").find({}).toArray()
    return rs;
}

const findCollectionByProductId = async (idProduct) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("collections").findOne({ "products.id": idProduct })
    return rs
}

const addCollection = async (collection) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("collections").insertOne(collection)
    return rs
}

const updateCollection = async (collections) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("collections").updateOne({ "_id": collections._id },
        {
            "$set": collections
        })
    return rs
}


const deleteCollection = async (id) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("collections").deleteOne({ "_id": id })
    return rs
}

module.exports = {
    getCollectionById: getCollectionById,
    getCollections: getCollections,
    findCollectionByProductId: findCollectionByProductId,
    getCollectionsAll: getCollectionsAll,
    addCollection: addCollection,
    updateCollection: updateCollection,
    deleteCollection: deleteCollection
}
