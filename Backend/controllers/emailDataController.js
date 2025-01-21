import emailData from "../models/emailDataModel.js";

export async function getData(req,res) {
    
    const id=req.params.id;

    const data= await emailData.findOne({"emailId":id});
        if(!data){
        return res.status(404).json({message:"Product for the id not found"})
    }

    return res.send(data);
}

export async function addEmailConfig(req,res){
    const {emailId,data,templateName}=req.body;

    const filter={emailId,templateName};

    const updateData={$set:{
        emailId,data,templateName
    }}


    const result = await emailData.updateOne(filter, updateData, { upsert: true });

return res.status(201).json({message:result}); 
}

export async function render(req,res) {
    
   try {
    const {emailId,temp}=req.params;
    const templateName=`Template${temp}`;

    const result=await emailData.findOne({emailId,templateName});

    if(result)
    {
        const data=result.data;
        return res.render(`Template${temp}.ejs`,{data})
    }
    return res.send("NO DATA FOUND - Please make sure to upload data first");
   } catch (error) {
    console.log(err);
    res.send(err)
   }
}

export async function recentdata(req,res) {
    
    try {
     const {emailId,temp}=req.params;
     const templateName=`Template${temp}`;
 
     const result=await emailData.findOne({emailId,templateName});
 
     if(result)
     {
         const data=result.data;
         return res.send(data);
     }
     return res.send("Invalid Parameters");
    } catch (error) {
     console.log(err);
     res.send(err)
    }
 }
 

