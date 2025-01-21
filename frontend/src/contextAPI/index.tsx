"use client";

import { TypeOfHomeResponse } from '@/types';

import React, { useEffect, useState } from 'react';

type TypeOfProps = {

    data: TypeOfHomeResponse ;

}

const initialState:TypeOfProps = {
    data: {
         id: null,
            name: "",
            email: "",
            contactNumber: "",
            groups:[]
    }
}

export const  CreateContext = React.createContext(initialState);


type TypeOfPageProps = {
    children: React.ReactNode
}

export default function ContextProvider({children}:TypeOfPageProps){

   const [data, setData]  = useState<TypeOfHomeResponse>({
    id: null,
       name: "",
       email: "",
       contactNumber: "",
       groups:[]
});

    async function callAPI () {

        try{

            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"/user/2", {
                cache: 'no-store',
              });
            const resBody = await response.json();


            setData(resBody?.data);

        }
        catch(err){
            console.log(err);
        }

    }

    useEffect(()=>{

        callAPI();

    },[]);

    

    

    return(
       <CreateContext.Provider value={{data}}>

         {children}

       </CreateContext.Provider>
    )
}
