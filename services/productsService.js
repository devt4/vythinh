const clientPromise = require("../libs/mongodb-client")


const getColorById = async (id) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const collection = await db.collection("collections").findOne({ "products.id": id })
    let rs = []
    collection.products.forEach(e => {
        if (e.id == id) {
            rs = e.colors
        }
    });
    console.log(rs);
    return rs

}

const getDetailById = async (id) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const collection = await db.collection("collections").findOne({ "products.id": id })
    let rs = []
    collection.products.forEach(e => {
        if (e.id === id) {
            rs = e
        }
    });
    console.log(rs);
    return rs
}

const getProductsByName = async (keywords) =>{
    const client = await clientPromise
    const db = client.db("lamapex");
    const collections = await db.collection("collections").find({}).toArray();
    let rs = []
    keywords = keywords.toLowerCase() || ""
    console.log("keyw"+keywords);
    collections.forEach((e)=>{
        e.products.forEach((product)=>{
            const pname = product.name.toLowerCase()
            if (pname.includes(keywords)) {
                rs = [...rs, product]
            }
        })
    })
    return rs
}

module.exports = {
    getColorById: getColorById,
    getDetailById: getDetailById,
    getProductsByName: getProductsByName
}