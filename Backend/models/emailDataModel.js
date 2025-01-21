import mongoose from "mongoose";


const emailDataSchema = mongoose.Schema({
    "emailId":{type:String,required:true},
    "data":{type:Object,required:true},
    "templateName":{type:String,required:true},
});

const emailData =mongoose.model("emailData",emailDataSchema);

export default emailData;