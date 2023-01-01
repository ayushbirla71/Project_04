const mongoose = require('mongoose')

const daySlots = new mongoose.Schema({
  Date:{type:Date},
  TotalSlot:{type:Number,default:140},
  avalableSlot:{type:Number,default:140},
  slotData:[{
    timeSlot:String,
    totalSlot:Number,
    avalableSlot:Number
  }]

})

module.exports=mongoose.model('SlotData',daySlots)