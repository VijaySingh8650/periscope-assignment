
"use client";

export const dynamic = "force-dynamic";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import Home from "@/client-side-pages/home";


function AsyncPage() {




    return <Home/>

 
}

export default function Page() {
  return (


      <Suspense fallback={<LoadingComponent/>}>
       
        <AsyncPage/>

      </Suspense>

  );
}
