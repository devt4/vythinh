const clientPromise =  require("../libs/mongodb-client")

const getAdminInfo = async () => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("admin").findOne({})
    return rs
}

const updateAdmin = async (admin) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("admin").updateOne({ "_id": admin._id },
        {
            "$set": admin
        })
    return rs
}


const getPages = async () => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("pages").find({})
    return rs
}

const getPagesByID = async (id) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("pages").findOne({"_id": id})
    return rs
}

const updatePage= async (page) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("pages").updateOne({ "_id": page._id },
        {
            "$set": page
        })
    return rs
}



module.exports = {
    getAdminInfo: getAdminInfo,
    updateAdmin: updateAdmin,
    getPages: getPages,
    getPagesByID: getPagesByID,
    updatePage: updatePage
}