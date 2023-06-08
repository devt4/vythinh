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
    if (collection === null) {
        return {}
    }
    let rs = []
    collection.products.forEach(e => {
        if (e.id === id) {
            rs = { ...e, idcol: collection._id }
        }
    });
    console.log(rs);
    return rs
}

const getProductsByName = async (keywords) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const collections = await db.collection("collections").find({}).toArray();
    let rs = []
    keywords = keywords.toLowerCase() || ""
    console.log("keyw" + keywords);
    collections.forEach((e) => {
        e.products.forEach((product) => {
            const pname = product.name.toLowerCase()
            if (pname.includes(keywords)) {
                rs = [...rs, product]
            }
        })
    })
    return rs
}

const getProducts = async (ids_col = []) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const query = {}
    let rs = []
    if (ids_col.length > 0) {
        query = { _id: { $in: ids_col } };
    }
    const collections = await db.collection("collections").find(query).toArray();
    collections.forEach((e) => {
        rs = [...rs, ...e.products]
    })
    console.log(rs);
    return rs
}

const saveProduction = async (idcol,production) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const result = await db.collection("collections").updateOne(
        { "_id": idcol }, // Match the collection document using its _id
        { "$push": { "products": production } } // Push the new product to the products array
    );
    console.log(result);
    return production
}

const updateProduction = async (idcol,production) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("collections").updateOne(
        { "_id": idcol }, // Match the collection document using its _id
        { "$pull": { "products": { "id": production.id } } } // Remove the product with matching ID from the products array
      );
    const result = await db.collection("collections").updateOne(
        { "_id": idcol }, // Match the collection document using its _id
        { "$push": { "products": production } } // Push the new product to the products array
    );

    return result
}

const deleteProduction = async (idcol,id)=>{
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("collections").updateOne(
        { "_id": idcol }, // Match the collection document using its _id
        { "$pull": { "products": { "id": id } } } // Remove the product with matching ID from the products array
      );
    return rs
}

module.exports = {
    getColorById: getColorById,
    getDetailById: getDetailById,
    getProductsByName: getProductsByName,
    getProducts: getProducts,
    saveProduction: saveProduction,
    updateProduction: updateProduction,
    deleteProduction: deleteProduction
}