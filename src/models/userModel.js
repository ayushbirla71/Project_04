const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
    Name: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minLen: 8, maxLen: 15, trim: true },
    Age: { type: Number, required: true },
    pincode: { type: Number, required: true },
    AatharNo: { type: Number, maxLen: 12, required: true },
    VaccinationStatus: {
        type: Object,
        firstDose: {
            type: Object,
            status: { type: String, enum: ["complited", "Pending"] },
            Date: { type: Date }
        },
        seccondDose: {
            type: Object,
            status: { type: String, enum: ["complited", "Pending"] },
            Date: { type: Date }
        }
    },
    VaccinationRegister: {
        type: Object,
        firstDose: {
            type: Object,
            status: { type: String, enum: ["Reject", "Register"] },
            Date: { type: Date },
            timeSlotId:{type:ObjectId, ref:"SlotData"},
            timeSlot:String
        },
        seccondDose: {
            type: Object,
            status: { type: String, enum: ["Reject", "Register"] },
            Date: { type: Date },
            timeSlotId:{type:ObjectId, ref:"SlotData"},
            timeSlot:String
        },
    }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)