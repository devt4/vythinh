const clientPromise =  require("../libs/mongodb-client")

const getAdminInfo = async () => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("admin").findOne({})
    return rs
}

module.exports = {
    getAdminInfo: getAdminInfo
    
}