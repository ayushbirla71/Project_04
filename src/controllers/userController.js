const userModel = require('../models/userModel')
const timeSlot = require('available-time-slots')
const daySlotModel = require('../models/daySlotModel')
const { json } = require('express')


const createUser = async (req, res) => {
    try {
        const data = req.body
        let { Name, phoneNumber, Age, AatharNo, password } = data
        const userdata = await userModel.create(data)

        return res.status(201).send({ status: true, message: "Success", data: userdata })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}
const userLogin = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}
const getUserProfile = async (req, res) => {
    try {
        const { userId, Date } = req.body
        let userData = await userModel.findById(userId)
        let slotData = await daySlotModel.find({ slotData: { $elemMatch: { avalableSlot:{$gte:1}} }, Date }).select({ avalableSlot: 1, slotData: 1 })
        userData._doc.avalableTimeSlot = slotData
        return res.status(200).send({ status: true, data: userData })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const bookSlot = async (req, res) => {
    try {
        const data = req.body
        let { Date, userId, SlotNo, timeSlot } = data
        console.log(Date)
        let ssData = await daySlotModel.findOne({ Date: Date }).select({ _id: 1, Date: 1, TotalSlot: 1, avalableSlot: 1, slotData: 1 }).lean()
        let xyz = ssData.slotData
        let a = xyz.findIndex(X => X.timeSlot >= timeSlot)
        let dd = xyz[a]
        if (dd.avalableSlot == 0) return res.status(404).send({ status: false, message: "slot not avalable" })
        ssData.slotData[a].avalableSlot = dd.avalableSlot - 1
        ssData.avalableSlot = ssData.avalableSlot - 1
        let userData = await userModel.findByIdAndUpdate(userId, { VaccinationRegister: { firstDose: { Date: Date, status: "Register", timeSlotId: ssData._id,timeSlot:timeSlot } } },{new :true})


        console.log(userData)
        let finalData = await daySlotModel.findByIdAndUpdate(ssData._id, { $set: ssData }, { new: true })

        return res.status(200).send({ status: true, data: finalData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = { createUser, userLogin, getUserProfile, bookSlot }