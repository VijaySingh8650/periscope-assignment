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

})