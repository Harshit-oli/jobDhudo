import {Job} from "../models/job.model.js";

export const postJob=async (req,res)=>{
    try {
        const {title,description,requirements,salary,location,jobType,experience,created_By,position,companyId}=req.body;
        const userId=req.id;

        if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !created_By || !position || !companyId){
            return res.status(400).json({
                success:false,
                message:"something is missing",
            });
        };
        const job=await Job.create({
            title,
            description,
            requirements:requirements.split(","),
            salary:Number(salary),
            location,  
            jobType,
            experienceLevel:experience,
            position,
            company:companyId,
            created_By:userId,
        });
        return res.status(202).json({
            message:"new job created successfully",
            job,
            success:true,
        })
    } catch (error) {
        console.log(error);
    }
}
export const getAllJobs=async(req,res)=>{
    try{
        const keyword=req.query.keyword || "";
        const query={
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}},

            ]
        };
        const jobs=await Job.find(query).populate({
            path:"company"
        }).sort({createdAt:-1});
        if(!jobs){
            return res.status(404).json({
              message:"jobs not found",
              success:false,
            })
        };
        return res.status(200).json({
            jobs,
            success:true,
        })
    }
    catch(error){
        console.log(error);
    }
}

export const getJobById=async(req,res)=>{
    try{
        const jobId=req.params.id;
        const job=await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                success:false,
                message:"jobs not found",
            })
        };
        return res.status(200).json({job,success:true})

    }
    catch(error){
        console.log(error);

    }
}

//how much jobs created by admin
export const getAdminJobs=async (req,res)=>{
    try{
        const adminId=req.params.id;
        const jobs=await Job.find({created_by:adminId})
        if(!jobs){
            return res.status(404).json({
                success:false,
                message:"jobs not found"
            })
        };
        return res.status(200).json({
            jobs,
            success:true,
            
        })

    }
    catch(error){
        console.log(error);
    }
}