import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob=async (req,res)=>{
    try {
       

        const userId=req.id;
        // const {id:jobId}=req.params;
        const jobId=req.params.id;
        if(!jobId){
            return res.status(400).json({
                message:"jobs is required",
                success:false,
            })
        };
        

        const existingApplication=await Application.findOne({job:jobId,applicant:userId});

        if(existingApplication){
            return res.status(400).json({
                success:false,
                message:"you have already applied for this job",
            });
        }
        
        //check if the job exist
        const job=await Job.findById(jobId);
        if(!job){
            return res.status(400).json({
                message:"job not found",
                success:false,
            })
        }

        //create a new application
        const newApplication=await Application.create({
            job:jobId,
            applicant:userId,
        });
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(200).json({
            message:"job applied successfully",
            success:true,
        })
    } catch (error) {
        console.log(error);
        
    }
};
export const getAppliedJobs=async(req,res)=>{
    try {
        const userId=req.id;
        const application=await Application.find({applicant:userId}).sort({craetedAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        });
        if(!application){
            return res.status(404).json({
                message:"no application found",
                success:false,
            })
        };
        return res.status(200).json({
            application,
            success:true,
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

//admin dekhega kitne user ne apply kiya hai

export const getApplicants=async (req,res)=>{
    try {
        const jobId=req.params.id;
        const job=await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }

        });
        if(!job){
            return res.status(400).json({
                success:false,
                message:"job not found",
            })
        };
        return res.status(200).json({
            success:true,
            job,
        });

        
    } catch (error) {
        console.log(error);
        
    }
}

export const updateStatus=async(req,res)=>{
    try {
        const {status}=req.body;
        const applicationId=req.params.id;
        if(!status){
            return res.status(404).json({
                success:false,
                message:"status not found",
            })
            
        };

        //find the application by application id

        const application=await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"Application not found",
                success:false,
            })
        };

        //update the status
        application.status=status.toLowerCase();
        await application.save();
        return res.status(200).json({
            message:"status updated successfully",
            success:true,
        })

        
    } catch (error) {
        console.log(error);
        
    }
}