import { TypeOfGroupsResponse, TypeOfLabelsResponse } from "@/types";
import { getRelativeTime } from "@/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

type TypeOfPageProps = {
  data: TypeOfGroupsResponse[];
};

const GroupDetails: React.FC<TypeOfPageProps> = ({ data }) => {
  return (
    <section className="w-[100%] p-4 border-b-1 border-b-grayColor flex gap-4">
      
        <div className="w-3/5 flex flex-col gap-2">
          <p className="text-sm text-gray-500">Last Active</p>
          <p className="text-sm text-gray-500 whitespace-nowrap">Disappearing Messages</p>
          <p className="text-sm text-gray-500 whitespace-nowrap">Send Message Permission</p>
          <p className="text-sm text-gray-500">Project</p>
          <p className="text-sm text-gray-500">Labels</p>
        </div>
        <div className="w-2/5 flex flex-col gap-2">
          <p className="text-sm">{getRelativeTime(data?.[0]?.lastActive)}</p>
          <div className="flex gap-2">
            <p className="text-sm">OFF</p>
            <div className="leading-3">
              <ChevronUp size={10} />
              <ChevronDown size={10} />
            </div>
          </div>
          <div className="flex gap-2">
          <p className="text-sm">All</p>
          <div className="leading-3">
            <ChevronUp size={10} />
            <ChevronDown size={10} />
          </div>
          </div>
          <div className={` w-[60%] text-xs whitespace-nowrap rounded-xl p-1 ${data?.[0]?.type==="Demo" ? "text-violet-500 bg-violet-100" : "text-orange-500 bg-orange-100"}`}>
                       {"#"+data?.[0]?.type}
           </div>

        <div className="flex gap-2 flex-col">
          {data?.[0]?.label?.map((label: TypeOfLabelsResponse) => {
            return (
              <div
                key={label?.id}
                className="w-[70%]  border-1 border-grayColor p-1 rounded-xl text-center flex gap-1 items-center"
              >
                <div
                  className={`w-1.5 h-1.5 ${
                    label.name === "High"
                      ? "bg-red-500"
                      : label.name === "Medium"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  } rounded-full`}
                ></div>
                <p className="whitespace-nowrap text-xs">{label?.name}</p>
              </div>
            );
          })}
        </div>
        

        </div>

    </section>
  );
};

export default GroupDetails;
