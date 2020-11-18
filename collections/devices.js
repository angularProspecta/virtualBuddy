
//requiring the mongoose 
const mongoose = require('mongoose');
const randomize = require('randomatic');

const devicesSchema = new mongoose.Schema({
    deviceType:{
        type:String,
        required:true    
    },
    modelNo:{
        type:Number,
            },
    osType:{
        type:String,
        
    },  
    osVersion:{
        type:String
    },
    deviceUID:{
        type:String,   
    },
    deviceId:{
        type:String,
       
    }

})



devicesSchema.pre('findOneAndUpdate',async function(next){
     if(this.isNew){
         console.log('hello');
         this.deviceId="ING"+randomize('0',3)
     }
});
const deviceModel = new mongoose.model("deviceModel",devicesSchema,"devices");
module.exports = deviceModel;