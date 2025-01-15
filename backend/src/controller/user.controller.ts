import { Request, Response } from "express";
import { userUpdateValidationSchema, userValidationSchema } from "../types-validation";
import { z } from "zod";
import {prisma} from "../prisma";


export const createUser = async(req: Request, res: Response) =>{

    try{
        // validate request body using zod
        const validationRequestBody = userValidationSchema.parse(req.body);
        
        await prisma.user.create(
            {
                data:{
                    name: validationRequestBody?.name,
                    contactNumber: validationRequestBody?.contactNumber,
                    email: validationRequestBody?.email,
                }
            }
        );

        res.status(201).json({message: "User created successfully"});
    

    }
    catch(err){

        if(err instanceof z.ZodError){

            res.status(500).send({validationError: err.errors});

        }
       else  res.status(500).json({ error: "Something went wrong" });
    }

}


export const getUser = async(req: Request, res: Response) => {
    try{

       if(req.params?.id){

            const response = await prisma.user.findFirst({
                where:{
                    id: parseInt(req.params.id)
                },
                include:{
                    groups:{
                        include:{
                            label: true
                        }
                    }
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

export const updateUser  = async(req:Request, res: Response) => {
    try{

        
        const validationRequestBody = userUpdateValidationSchema.parse(req?.body);
        
        if(req?.params?.id){

            const response = await prisma.user.update({
                where:{
                    id: parseInt(req.params.id)
                },
                data: {
                    name: validationRequestBody?.name,
                    contactNumber: validationRequestBody?.contactNumber,
                    email: validationRequestBody?.email
                }
            });

            if(!response) res.status(404).send({message: "Invalid id"});
            else res.status(200).send({message: "User updated successfully"});

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

export const deleteUser = async(req: Request, res: Response) => {
 

    try{

        if(req?.params?.id){

            const response = await prisma.user.delete({
                where:{
                    id: parseInt(req.params.id)
                }
            });

            if(!response) res.status(404).send({message: "Invalid id"});
            else res.status(200).send({message: "User deleted successfully"});

        }

    }

    catch(err){
        res.status(500).json({ error: "Something went wrong" });
    }


}



export const getAllUsers = async(req: Request, res: Response) => {
    try{

            const response = await prisma.user.findMany({
                include:{
                    groups:{
                        include:{
                            label: true
                        }
                    }
                }
            });

            if(!response) res.status(400).send({message: "invalid id"});

            else res.status(200).send({
                data: response
            })

       

    }
    catch(err){
        res.status(500).json({ error: "Something went wrong" });
    }
}

