const Contact = require("../models/contactModel");

exports.getContact = async(req,res)=>{
    
    try{
        const contact = await Contact.find();

        res.status(200).json({
            success:true,
            message:"Get all Contacts",
            contact : contact
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Couldn't fetched all Contacts"
        })
    }
}

exports.createContact = async(req,res)=>{
  try{
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
     return res.status(400).json({
         success:false,
         message:"All fields are required"
     })
    }

    // create Conatct
    const createContact = await Contact.create({
        name,
        email,
        phone

    });
     // console.log("The request body",req.body);
     if(createContact){
        return res.status(200).json({
            success:true,
            message:"Created Contact Successfully",
            data:createContact
        })
     }
  }
  catch(err){
    return res.status(500).json({
        success:false,
        message:"Couldn't Create Contacts"
    })
  }
}
exports.updateContact = async(req,res)=>{
    // res.send("Get all Conatcts")
   try{
    res.status(200).json({
        success:true,
        message:`Update Contact ${req.params.id}`
    })
}
   catch(err){
    return res.status(500).json({
        success:false,
        message:"Couldn't Update Contacts"
    })
   }
}
exports.deleteContact = async(req,res)=>{
    // res.send("Get all Conatcts")
try{

    
    res.status(200).json({
        success:true,
        message:`Delete Contact ${req.params.id}`
    })
} 
catch(err){
    return res.status(500).json({
        success:false,
        message:"Couldn't Delete Contacts"
    })
}
}

exports.getContactId = async(req,res)=>{
    // res.send("Get all Conatcts")
    try{
        const id = req.params.id;
        const findConatctId = await Contact.findById(id);
        if(!findConatctId){
            return  res.status(400).json({
                success:false,
                message:"This Id of Conatct Not Available"
            })
        }

    
    res.status(200).json({
        success:true,
        message:`Get Contact ${req.params.id}`,
        data:findConatctId
    })


}
catch(err){
    return res.status(500).json({
        success:false,
        message:"Couldn't fetch with id Contacts"
    })
}
}