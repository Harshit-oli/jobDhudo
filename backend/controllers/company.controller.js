import {Company} from "../models/company.model.js"

export const registerCompany=async(req,res)=>{
    try {
        const {companyName}=req.body;
        if(!companyName){
            res.status(400).json({
                success:false,
                message:"company name is required",
            });
        }
        let company=await Company.findOne({name:companyName});
        if(company){
            return res.status(400).json({
                message:"you can't register same company",
                success:false,
            })
        };
       company=await Company.create({
            name:companyName,
            userId:req.id,
        });

        return res.status(201).json({
            message:"comapny registered successfully",
            company,
            success:false,
        })
        
    } catch (error) {
        
    }
}

export const getCompany=async (req,res)=>{
    try{

        const userId=req.id;
        const companies=await Company.find({userId});
        if(!companies){
            res.status(404).json({
                success:false,
                message:"companies not found",
            })
        }
        res.status(200).json({
            companies,
            success:true,
            
        })

    }catch(error){
        console.log(error);

    }
}
export const getCompanyById=async (req,res)=>{
    try{
        const companyId=req.params.id;
        const company=await Company.findById(companyId);
        if(!company){
            return res.status(404).json({
                success:false,
                message:"companies not found",
            })

        }
        return res.status(200).json({

            company,
            success:true,
        })

    }
    catch(error){

        console.log(error);
    }
}

export const updateCompany=async(req,res)=>{
    try{
        const {name,description,website,location}=req.body;
        const file=req.file;
        //idhar cloudinary aayega
        const updateData={name,description,website,location};
        const company=await Company.findByIdAndUpdate(req.params.id,updateData,{new:true});
        if(!company){
            return res.status(404).json({
                success:false,
                message:"companies not found",
            })
        }
        return res.status(200).json({
            message:"company information updated",
            success:true,
        });
    }
    catch(error){

        console.log(error);
    }
}
