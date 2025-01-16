import { sidePanelTabs } from "@/constants/constant";
import { TypeOfGroupsResponse } from "@/types";

import {
  User,
  RefreshCw
} from "lucide-react";
import React from "react";
import GroupDetails from "./group-details";
import ExportExitButton from "./export-exit";

type TypeOfPageProps = {
  data: TypeOfGroupsResponse[];
};

const SidePanel: React.FC<TypeOfPageProps> = ({ data }) => {
  return (
    <section>
      {/* heading */}
      <section className="m-4 flexAndGapAndCenter justify-between">
        <div className="flexAndGapAndCenter">
          <User size={20} />
          <h1 className="text-sm font-semibold">{data?.[0]?.name}</h1>
        </div>
        <div className="flexAndGapAndCenter">
          <RefreshCw size={15} className="text-grayColor" />
          <p className="text-sm">Refresh</p>
        </div>
      </section>

      {/* tabs */}
      <section className="flex items-center gap-6 px-4 border-b-1 border-grayColor">
        {sidePanelTabs?.map((el) => {
          return (
            <button
              key={el?.id}
              className={`text-sm ${
                el?.id === data?.[0]?.id ? "border-b-2 border-b-greenColor" : ""
              }`}
            >
              {el?.name}
            </button>
          );
        })}
      </section>

      {/* details of a group */}
      <GroupDetails data={data} />

      {/* export & Exit buttons */}
      <ExportExitButton/>
    </section>
  );
};

export default SidePanel;
