import { sidebarItems } from "@/constants/constant";
import { TypeOfItems } from "@/types";
import Image from "next/image";
import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { highlightSideBarItem } from "@/utils";


type TypeOfSidebarProps = {
  email: string;
};

const Sidebar:React.FC<TypeOfSidebarProps> = ({email}) => {


  return (
    <section className="h-[100vh] w-[18vw] p-4 flex flex-col justify-between border-r-1  border-r-grayColor">
      <section>
        <section className="flex gap-4 items-center mb-4">
          <div>
            <Image src="/logo.png" alt="Periskope" width={40} height={40} />
          </div>

          <div className="flex flex-col gap-1 leading-4">
            <h1 className="font-bold">Periskope</h1>
            <p className="text-xs text-gray-500">{email}</p>
          </div>

          <div className="leading-3">
            <ChevronUp size={15} />
            <ChevronDown size={15} />
          </div>
        </section>

        <section className="flex flex-col gap-2">
          {sidebarItems.map((el: TypeOfItems) => {
            return (
              <div key={el?.id} className={`p-1 cursor-pointer flex gap-4 ${el?.label==="Groups" ? "bg-grayColor rounded-sm" : ""}`}>
                <el.icon  size={20} className={`${highlightSideBarItem(el?.label)}`}/>
                <p className={`text-sm  ${highlightSideBarItem(el?.label)}`}>{el?.label}</p>
              </div>
            );
          })}
        </section>
      </section>

      <section className="flex gap-2">
        <Image src="/whatsapp.png" alt="whatsapp" height={20} width={20} objectFit="cover"/>
        <p className="text-sm">Help & Support</p>
      </section>

    </section>
  );
};

export default Sidebar;
