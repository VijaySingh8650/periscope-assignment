"use client";

import { TypeOfHomeResponse } from '@/types';

import React, { useEffect, useState } from 'react';

type TypeOfProps = {
    loading: boolean;
    data: TypeOfHomeResponse ;

}

const initialState:TypeOfProps = {
    loading: true,
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

   const [data, setData]  = useState<TypeOfProps>({
    loading: true,
    data:{

        id: null,
       name: "",
       email: "",
       contactNumber: "",
       groups:[]

    }
    
});

    async function callAPI () {

        try{

            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"/user/2", {
                cache: 'no-store',
              });
            const resBody = await response.json();

          
            setData({data: resBody?.data, loading:false});

        }
        catch(err){
            console.log(err);
        }

    }

    useEffect(()=>{

        callAPI();

    },[]);

    

    

    return(
       <CreateContext.Provider value={{loading: data?.loading, data: data?.data}}>

         {children}

       </CreateContext.Provider>
    )
}
