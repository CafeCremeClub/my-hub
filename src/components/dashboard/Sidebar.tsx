"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {lightBlueLogo} from "../../../public";
import {Button} from "@/components/ui/button";
import HouseIcon from "@/components/icons/HouseIcon";
import {FiUser} from "react-icons/fi";
import {Bookmark, LogOut, Settings} from "lucide-react";
import {TbUsers} from "react-icons/tb";
import {usePathname, useRouter} from "next/navigation";
import {logout} from "@/app/actions/logout";
import useGetMe from "@/hooks/auth/useGetMe";
import {Skeleton} from "@/components/ui/skeleton";
import {useQueryClient} from "@tanstack/react-query";

const routes = [
    {
        id: 1,
        name: "Accueil",
        icon: HouseIcon,
        route: "/dashboard",
    },
    {
        id: 2,
        name: "Mon profil",
        icon: FiUser,
        route: "/dashboard/profile",
    },
    {
        id: 3,
        name: "Mes missions",
        icon: Bookmark,
        route: "/dashboard/missions",
    },
    {
        id: 4,
        name: "Notre communauté",
        icon: TbUsers,
        route: "/dashboard/community",
    },
    {
        id: 5,
        name: "Paramètres",
        icon: Settings,
        route: "/dashboard/settings",
    }
]


const Sidebar = () => {


    const queryClient = useQueryClient();
    const {
        isPending,
        data
    } = useGetMe()
    const router = useRouter();
    const pathname = usePathname();

    const [selectedRoute, setSelectedRoute] = useState<string>(routes[0].route);

    const onRoutePress = (name: string) => {
        /*if (isOpen && onClose) {
            onClose();
        }*/
        setSelectedRoute(name)
        router.push(name);
    }

    const handleLogout = async () => {
        await logout();
        queryClient.clear();
        router.replace('/auth/signin');
    }

    useEffect(() => {
        const currentRoute = routes.find(route => route.route === pathname);
        if (currentRoute) {
            setSelectedRoute(currentRoute.route);
        } else {
            setSelectedRoute(routes[0].route);
        }
    }, [pathname])

    return (
        <aside className="h-full flex flex-col w-[17.625rem] bg-[#142057] px-4 pt-9 pb-6 flex-none">
            <div className="flex flex-col gap-4 h-full">
                <Image
                    src={lightBlueLogo}
                    alt="logo"
                    className="object-center object-cover w-64"
                />
                <div className="flex flex-col gap-2 h-full">
                    {
                        routes.map((route) => (
                            <Button
                                key={route.id}
                                className={`flex justify-start items-center gap-3 w-full rounded-[0.375rem] text-[#BCD8FF] font-semibold tracking-tighter bricolage-grotesque cursor-pointer hover:bg-[#697194]/90 ${
                                    selectedRoute === route.route
                                        ? "bg-[#697194]"
                                        : "bg-transparent"
                                }`}
                                onClick={() => onRoutePress(route.route)}
                                aria-label={route.name}
                            >
                                {<route.icon width={16} height={16} stroke="#BCD8FF" className="shrink-0"/>}
                                {route.name}
                            </Button>
                        ))
                    }

                    <div className="flex items-center justify-between mt-auto">
                        {
                            isPending ? (
                                <div className="flex flex-col gap-1">
                                    <Skeleton className="h-4 w-24 rounded-md"/> {/* name placeholder */}
                                    <Skeleton className="h-4 w-36 rounded-md"/> {/* email placeholder */}
                                </div>
                            ) : data ?
                                <div className="flex flex-col">
                                    <p className="text-[#EEF5FF] font-semibold text-sm">
                                        {data.firstname} {data.lastname}
                                    </p>
                                    <p className="text-[#2970FF] text-sm">
                                        {data.email}
                                    </p>
                                </div> : null
                        }

                        <Button
                            size="icon"
                            variant="ghost"
                            className="text-[#BCD8FF]  hover:text-[#BCD8FF]  hover:bg-[#697194] cursor-pointer"
                            onClick={handleLogout}
                        >
                            <LogOut className="size-5"/>
                        </Button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;