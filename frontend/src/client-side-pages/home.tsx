"use client";

import { Users } from "lucide-react";
import { headerItems, tableHeader } from "@/constants/constant";
import { TypeOfItems } from "@/types";
import Sidebar from "@/app/components/sidebar";
import Button from "@/app/components/button";
import Filteration from "@/app/components/filter";
import Table from "@/app/components/table";
import { useContext, useState } from "react";
import SidePanel from "@/app/components/sidepanel";
import { CreateContext } from "@/contextAPI";



const Page = () => {
 
  const {data} = useContext(CreateContext);


  const [selectedGroup, setSelectedGroup] = useState<number>(
    data?.groups?.[0]?.id
  );

  const [search, setSearch] = useState<string>("");


  const handleGroupChange = (id: number) => {
    setSelectedGroup(id);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target?.value);
  };

  return (
    <section className="w-full flex">
      <Sidebar email={data?.email} />

      <section className="mt-4 w-full">
        {/* selected-sidebar-item */}
        <section className="flexAndGapAndCenter justify-between pl-4 pr-4 pt-4 pb-2 border-b-1 border-b-grayColor">
          <div className="flexAndGapAndCenter">
            <Users size={20} />
            <p className="text-sm">Groups</p>
          </div>

          <div className="flexAndGapAndCenter">
            {headerItems?.map((el: TypeOfItems, index: number) => {
              if (index === 1) {
                return (
                  <Button key={el?.id} borderColor={true}>
                    <div className=" h-2 w-2 bg-green-500 border-none rounded-full shadow-2xl"></div>

                    <p className="text-sm">{"+91 " + data?.contactNumber}</p>
                  </Button>
                );
              }
              return (
                <Button key={el?.id} borderColor={true}>
                  <el.icon size={20} />
                  {el?.label && <p className="text-sm">{el?.label}</p>}
                </Button>
              );
            })}
          </div>
        </section>

        <section className="w-full flex">
          {/* filter-and-table */}

          <section className="border-r-1 border-r-grayColor border-b-1 border-b-grayColor w-[75%]">
            <Filteration handleSearch={handleSearch} search={search} />

            <Table
              tableHeader={tableHeader}
              handleGroupChange={handleGroupChange}
              selectedGroup={selectedGroup}
            />
          </section>

          <section className="w-[25%]">
            <SidePanel
               
               data ={
                data?.groups?.filter((el)=>el.id===selectedGroup)
               }
            
            />
          </section>

        </section>
      </section>
    </section>
  );
};

export default Page;
