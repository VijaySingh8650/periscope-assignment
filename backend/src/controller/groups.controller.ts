import { Request, Response } from "express";
import { groupUpdateValidationSchema, groupValidationSchema } from "../types-validation";
import { z } from "zod";
import {prisma} from "../prisma";


export const createGroup = async(req: Request, res: Response) =>{

    try{
        // validate request body using zod
        const validationRequestBody = groupValidationSchema.parse(req.body);

        if(req.params?.userid){

            await prisma.groups.create(
                {
                    data:{
                        name: validationRequestBody?.name,
                        userId: parseInt(req.params.userid),
                        type: validationRequestBody?.type,
                        members: validationRequestBody?.members
                    }
                }
            );
    
            res.status(201).json({message: "Group created successfully"});

        }
        else res.status(400).json({ error: "Invalid User ID" });
        
       
    

    }
    catch(err){

        if(err instanceof z.ZodError){

            res.status(500).send({validationError: err.errors});

        }
       else  res.status(500).json({ error: "Something went wrong" });
    }

}


export const getGroup = async(req: Request, res: Response) => {
    try{

       if(req.params?.id){

            const response = await prisma.groups.findFirst({
                where:{
                    id: parseInt(req.params.id)
                },
                include:{

                   label: true
                        

                }
            });

            if(!response) res.status(400).send({message: "invalid id"});

            else res.status(200).send({
                data: response
            })

       }
       else res.status(400).json({ error: "Invalid ID" });
       

    }
    catch(err){
        res.status(500).json({ error: "Something went wrong" });
    }
}

export const updateGroup  = async(req:Request, res: Response) => {
    try{

        
        const validationRequestBody = groupUpdateValidationSchema.parse(req?.body);
        
        if(req?.params?.id){

            const response = await prisma.groups.update({
                where:{
                    id: parseInt(req.params.id)
                },
                data: {
                        name: validationRequestBody?.name,
                        type: validationRequestBody?.type,
                        members: validationRequestBody?.members
                }
            });

            if(!response) res.status(404).send({message: "Invalid id"});
            else res.status(200).send({message: "Group updated successfully"});

        }else{

            res.status(400).json({ error: "Invalid ID" });

        }
        


    }
    catch(err){

        if(err instanceof z.ZodError){

            res.status(500).send({validationError: err.errors});

        }

        else res.status(500).json({ error: "Something went wrong" });
    }
}

export const deleteGroup = async(req: Request, res: Response) => {
 

    try{

        if(req?.params?.id){

            const response = await prisma.groups.delete({
                where:{
                    id: parseInt(req.params.id)
                }
            });

            if(!response) res.status(404).send({message: "Invalid id"});
            else res.status(200).send({message: "Group deleted successfully"});

        }

    }

    catch(err){
        res.status(500).json({ error: "Something went wrong" });
    }


}


export const getAllGroups = async(req: Request, res: Response) => {
    try{

       if(req.params?.userid){

            const response = await prisma.groups.findMany({
                where:{
                    userId: parseInt(req.params.userid)
                },
                include:{

                    label: true
                         
 
                 }
            });

            if(!response) res.status(400).send({message: "invalid id"});

            else res.status(200).send({
                data: response
            })

       }
       else res.status(400).json({ error: "Invalid ID" });
       

    }
    catch(err){
        res.status(500).json({ error: "Something went wrong" });
    }
}




