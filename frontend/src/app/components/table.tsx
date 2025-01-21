import { CreateContext } from "@/contextAPI";
import { TypeOfGroupsResponse, TypeOfHeader, TypeOfLabelsResponse } from "@/types";
import { getRelativeTime } from "@/utils";
import { User } from "lucide-react";
import React, { useContext } from "react";

type TypeOfPageProps = {
  tableHeader: TypeOfHeader[];
  handleGroupChange: (id:number) => void;
  selectedGroup: number | null;
};

const Table: React.FC<TypeOfPageProps> = ({ tableHeader, handleGroupChange, selectedGroup }) => {

  const {data, loading} = useContext(CreateContext);



  return (
    <section className="overflow-auto h-[80vh] bg-white border-r-1 border-r-grayColor">
      <table className="min-w-full pl-2 pr-2 ">
        <thead>
          <tr className="border-b-1 border-b-grayColor">
            {tableHeader?.map((item: TypeOfHeader, index: number) => {
              if (index === 0) {
                return (
                  <th key={item.id} className="text-center  py-2 px-4 w-[5%]">
                    <div className="h-3 w-3 border-1 border-grayColor rounded-sm"></div>
                  </th>
                );
              }

              return (
                <th
                  key={item.id}
                  className={`whitespace-nowrap py-2 
                  text-left text-sm font-semibold ${item?.name==="Group Name" ? "w-[300px]" : "w-[200px]"}`}
                  //   onClick={ }
                >
                  {item?.name}{" "}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className="text-center ">
          {data?.groups?.length > 0 ? (
            data?.groups?.map((el)=>{
              return {
                checkbox: true,
                ...el
              }
            })?.map((item: TypeOfGroupsResponse) => (
              <tr  key={item.id} onClick={()=>handleGroupChange(item?.id)} className={`${selectedGroup===item.id ? "bg-mediumGrayColor" : ""} border-b-1 border-b-grayColor cursor-pointer`}>
                <td className="text-left  py-2 px-4 text-sm">
                  <div className="h-3 w-3 border-1 border-grayColor rounded-sm"></div>
                </td>
                <td className="text-left  py-2 text-sm w-[300px] whitespace-nowrap flexAndGapAndCenter">
                   <User size={15}/>
                    <p>

                    {item?.name}

                    </p>
                  
                </td>

                <td className="text-left  py-2">
                    <div className={`w-[50%]  text-xs whitespace-nowrap rounded-xl p-1 ${item.type==="Demo" ? "text-violet-500 bg-violet-100" : "text-orange-500 bg-orange-100"}`}>
                       {"#"+item?.type}
                    </div>
                   
                </td>

                <td className="text-left  py-2 flex gap-2">
                  {
                     item?.label?.map((label: TypeOfLabelsResponse)=>{

                       return <div key={label?.id} className="border-1 border-grayColor p-1 rounded-xl text-center flex gap-1 items-center">
                          <div className={`w-1 h-1 ${label.name==="High" ? "bg-red-500" : label.name==="Medium" ? "bg-green-500" : "bg-yellow-500"} rounded-full`}></div>
                          <p className="whitespace-nowrap text-xs">{label?.name}</p>
                       </div>
                     
                     
                     })
                  }
                </td>

                <td className="text-left px-2  py-2 text-sm whitespace-nowrap">

                   {item?.members}
                </td>

                <td className="text-left  py-2 text-sm whitespace-nowrap">
                  {getRelativeTime(item?.lastActive)}
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={tableHeader.length} className="text-center py-4">
                {loading ? "Loading..." : "No data available"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
