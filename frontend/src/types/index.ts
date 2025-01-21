import { LucideIcon } from "lucide-react";


export  type TypeOfItems = {
    id: number;
    icon: LucideIcon;
    label: string;
}

export type TypeOfLabelsResponse = {
    id: number;
    name: string;
    groupId: number;
}

export type TypeOfGroupsResponse = {
   id: number;
   name: string;
   checkbox?: boolean;
   userId: number;
   type: "Demo" | "Clients";
   members: number;
   lastActive: string;
   label: TypeOfLabelsResponse[];
}

export type TypeOfHomeResponse = {
    id: number | null;
    name: string;
    email: string;
    contactNumber: string;
    groups:TypeOfGroupsResponse[]
}


export type TypeOfHeader = {
    id: number;
    name: string;
}