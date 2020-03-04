const fs = require("fs")

const addOrder = (myOrders) => {
    const allOrders = loadOrders()
    allOrders.push({reminder: myOrders})

    saveOrder(allOrders)
}

const listOrders = () => {
    const allOrders = loadOrders()

    allOrders.map(order => {
        console.log(order)
    })
}

const removeOrders = orderToDelete => {
    const allOrders = loadOrders()

    const ordersToKeep = allOrders.filter(order => {
        return  order.reminder != orderToDelete
    })

    saveOrder(ordersToKeep)
}





const loadOrders = () => {
    try{
        const datdBuffer = fs.readFileSync("orders.json")
        const ordersJson = datdBuffer.toString()
        return JSON.parse(ordersJson)
    } catch (error){
        return []
    }
}

const saveOrder = allOrders => {
    const ordersJson = JSON.stringify(allOrders)
    fs.writeFileSync("orders.json", ordersJson)
}

module.exports = {
    addOrder,
    listOrders,
    removeOrders
}