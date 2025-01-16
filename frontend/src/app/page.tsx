
export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import Home from "@/client-side-pages/home";


 async function AsyncPage() {
  try{

    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"/user/2", {
      cache: 'no-store',
    });
    const data = await response.json();

    if(response?.status!==200){
      return notFound();
    }
    console.log(data, "sdlksd")
    return <Home data={data?.data}/>

  }
  catch(err){
    console.error(err);
    notFound();
  }
 
}

export default function Page() {
  return (


      <Suspense fallback={<LoadingComponent/>}>

        <AsyncPage/>

      </Suspense>

  );
}
