import { sidePanelTabs } from "@/constants/constant";

import { User, RefreshCw } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import GroupDetails from "./group-details";
import ExportExitButton from "./export-exit";
import { CreateContext } from "@/contextAPI";
import { TypeOfGroupsResponse, TypeOfHeader } from "@/types";

type TypeOfPageProps = {
  selectedGroup: number | null;
};

const SidePanel: React.FC<TypeOfPageProps> = ({ selectedGroup }) => {
  const { data } = useContext(CreateContext);
  const [selectedGroupDetail, setSelectedGroupDetail] = useState<
    TypeOfGroupsResponse[]
  >([]);

  useEffect(() => {
    const filterData: TypeOfGroupsResponse[] = data?.groups?.filter(
      (item) => item.id === selectedGroup
    );

    if (filterData?.length > 0) {
      setSelectedGroupDetail(filterData);
    } else {
      setSelectedGroupDetail([]);
    }
  }, [data, selectedGroup]);


  return (
    <section>
      {/* heading */}
      <section className="m-4 flexAndGapAndCenter justify-between">
        <div className="flexAndGapAndCenter">
          <User size={20} />
          <h1 className="text-sm font-semibold">
            {selectedGroupDetail?.[0]?.name || ""}
          </h1>
        </div>
        <div className="flexAndGapAndCenter">
          <RefreshCw size={15} className="text-grayColor" />
          <p className="text-sm">Refresh</p>
        </div>
      </section>

      {/* tabs */}
      <section className="flex items-center gap-6 px-4 border-b-1 border-grayColor">
        {sidePanelTabs?.map((el:TypeOfHeader, index:number) => {
          return (
            <button
              key={el?.id}
              className={`text-sm ${
                index===0
                  ? "border-b-2 border-b-greenColor"
                  : ""
              }`}
            >
              {el?.name}
            </button>
          );
        })}
      </section>

      {selectedGroupDetail?.length > 0 ? (
        <>
          {/* details of a group */}
          <GroupDetails data={selectedGroupDetail} />

          {/* export & Exit buttons */}
          <ExportExitButton />
        </>
      ) : (
        <p className="text-center py-4 text-sm">Loading...</p>
      )}
    </section>
  );
};

export default SidePanel;
