const daySlotModel = require("../models/daySlotModel")
const { timeSlots } = require("./slotTime")

const createSlot = async (req, res) => {
    try {
       // const data = req.body
       let slot=timeSlots()
        let data={slotData :slot,Date:Date()}

        let slotData = await daySlotModel.create(data)
        return res.status(201).send({status:true,message:"Success",data:slotData})
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}
module.exports = { createSlot }