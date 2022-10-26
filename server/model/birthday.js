const mongoose = require('mongoose');


const birthday = mongoose.Schema({
    fullName:{
        type:String,
        rquired:[true,"Please provide a name."]
    },
createdBy:{
    type:
},
dateCreated:{
    type:Date,
    default:Date.now()
},
date:{
    type:Date,
    required:[true,"Please select a date."]
},
gifts:{
    type:array
}
},{timestamps:true})

module.exports =mongoose.model('Birthdays',birthday)