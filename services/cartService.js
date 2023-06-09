const clientPromise = require("../libs/mongodb-client")
const { getFromLocalStorage } = require("../libs/local-store")

const getCarts = () => {
    const cart = getFromLocalStorage("cart")
    return cart
}

const getOrderById = async (id) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("orders").findOne({_id: id})
    return rs
}

const saveOrder = async (order) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("orders").insertOne(order)
    return rs
}

const getOrders = async () => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("orders").find({}).toArray()
    return rs
}

const updateOrder = async (order) => {
    const client = await clientPromise
    const db = client.db("lamapex");
    const rs = await db.collection("collections").updateOne({ "_id": order._id },
        {
            "$set": order
        })
    return rs
}

module.exports = {
    getCarts: getCarts,
    getOrderById: getOrderById,
    saveOrder: saveOrder,
    getOrders,
    updateOrder
}