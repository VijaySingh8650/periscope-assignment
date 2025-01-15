import {z} from "zod";

export const userValidationSchema = z.object({

    name: z.string(),
    contactNumber: z.string().length(10, {message: "Contact number must be of 10 characters"}),
    email: z.string()

});

export const userUpdateValidationSchema = z.object({

    name: z.string().optional(),
    contactNumber: z.string().length(10, {message: "Contact number must be of 10 characters"}).optional(),
    email: z.string().optional()

});

export const groupValidationSchema = z.object({
    
    name: z.string(),
    type: z.enum(["Demo", "Clients"]),
    members: z.number().optional()

});

export const groupUpdateValidationSchema = z.object({
    
    name: z.string().optional(),
    userId: z.number().optional(),
    type: z.enum(["Demo", "Clients"]).optional(),
    members: z.number().optional()

});


export const labelValidationSchema = z.object({
    
    name: z.string()

});

export const labelUpdateValidationSchema = z.object({
    
    name: z.string().optional()
});