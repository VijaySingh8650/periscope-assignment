import { Request, Response } from "express";
import {labelUpdateValidationSchema, labelValidationSchema } from "../types-validation";
import { z } from "zod";
import {prisma} from "../prisma";


export const createLabel = async(req: Request, res: Response) =>{

    try{
        // validate request body using zod
        const validationRequestBody = labelValidationSchema.parse(req.body);

        if(req.params?.groupid){

            await prisma.labels.create(
                {
                    data:{
                        name: validationRequestBody?.name,
                        groupId: parseInt(req.params.groupid),
                    }
                }
            );
    
            res.status(201).json({message: "Label created successfully"});

        }
        else res.status(400).json({ error: "Invalid Group ID" });
        
       
    

    }
    catch(err){

        if(err instanceof z.ZodError){

            res.status(500).send({validationError: err.errors});

        }
       else  res.status(500).json({ error: "Something went wrong!" });
    }

}


export const getlabel = async(req: Request, res: Response) => {
    try{

       if(req.params?.id){

            const response = await prisma.labels.findFirst({
                where:{
                    id: parseInt(req.params.id)
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

export const updateLabel  = async(req:Request, res: Response) => {
    try{

        
        const validationRequestBody =labelUpdateValidationSchema.parse(req?.body);
        
        if(req?.params?.id){

            const response = await prisma.labels.update({
                where:{
                    id: parseInt(req.params.id)
                },
                data: {
                        name: validationRequestBody?.name
                }
            });

            if(!response) res.status(404).send({message: "Invalid id"});
            else res.status(200).send({message: "Label updated successfully"});

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

export const deleteLabel = async(req: Request, res: Response) => {
 

    try{

        if(req?.params?.id){

            const response = await prisma.labels.delete({
                where:{
                    id: parseInt(req.params.id)
                }
            });

            if(!response) res.status(404).send({message: "Invalid id"});
            else res.status(200).send({message: "Label deleted successfully"});

        }

    }

    catch(err){
        res.status(500).json({ error: "Something went wrong" });
    }


}


export const getAllLabel = async(req: Request, res: Response) => {
    try{

       if(req.params?.groupid){

            const response = await prisma.labels.findMany({
                where:{
                    groupId: parseInt(req.params.groupid)
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




