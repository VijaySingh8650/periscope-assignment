import { TypeOfItems } from '@/types';
import { House, MessageCircleMore, Circle,  Users, Contact, BellRing, File, Settings, CircleHelp  } from 'lucide-react';

export const sidebarItems:TypeOfItems[] = [
    {
        id: 1,
        icon: House,
        label: 'Dashboard',
    },
    {
        id: 2,
        icon: MessageCircleMore,
        label: 'Chats',
    },
    {
        id: 3,
        icon: Users,
        label: 'Groups',
    },
    {
        id: 4,
        icon: Contact,
        label: 'Contacts',
    },
    {
        id: 5,
        icon: BellRing,
        label: 'Logs',
    },
    {
        id: 6,
        icon: File,
        label: 'Files',
    },
    {
        id: 7,
        icon: Settings,
        label: 'Settings',
    },  
    
]

export const headerItems:TypeOfItems[] = [
    {
        id: 1,
        icon: CircleHelp,
        label: 'Docs',
    },
    {
        id: 2,
        icon: Circle,
        label: '',
    },
    {
        id: 3,
        icon: BellRing,
        label: '',
    }
];


export const tableHeader = [
    {
        id: 0,
        name: ""
    },
    {
        id: 1,
        name: "Group Name"
    },
    {

        id: 2,
        name: "Project"

    },
    {

        id: 3,
        name: "Labels"

    },
    {

        id: 4,
        name: "Members"

    },
    {

        id: 5,
        name: "Last Active"

    }
]
