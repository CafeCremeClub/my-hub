import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {ArrowDown} from "lucide-react";
import CustomButton from "@/components/custom/CustomButton";

export const missions = [
    {
        title: "Product Owner Data",
        tjm: 500,
        contract: "Hybride",
        duration: "3 mois",
        location: "Lille, 59000",
        publishedAt: "20/12/2024"
    },
    {
        title: "Développeur Fullstack Node | Vuejs",
        tjm: 450,
        contract: "Présentiel",
        duration: "12 mois",
        location: "Lille, 59000",
        publishedAt: "20/12/2024"
    },
    {
        title: "Développeur Fullstack Node | Vuejs",
        tjm: 300,
        contract: "Full remote",
        duration: "12 mois",
        location: "Paris, 75001",
        publishedAt: "20/12/2024"
    },
    {
        title: "Product Owner Data",
        tjm: 760,
        contract: "Présentiel",
        duration: "12 mois",
        location: "Paris, 75001",
        publishedAt: "20/12/2024"
    },
    {
        title: "Développeur Fullstack Node | Vuejs",
        tjm: 500,
        contract: "Hybride",
        duration: "12 mois",
        location: "Paris, 75001",
        publishedAt: "20/12/2024"
    },
    {
        title: "Product Owner Data",
        tjm: 500,
        contract: "Présentiel",
        duration: "12 mois",
        location: "Paris, 75001",
        publishedAt: "20/12/2024"
    },
    {
        title: "Développeur Fullstack Node | Vuejs",
        tjm: 400,
        contract: "Full remote",
        duration: "12 mois",
        location: "Paris, 75001",
        publishedAt: "20/12/2024"
    }
];


const DashboardPageDataTable = () => {
    return (
        <div className="flex flex-col gap-4 border border-[#EAECF0] rounded-[0.75rem]">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead
                            className="flex items-center gap-2 text-xs font-medium text-[#475467]">Mission <ArrowDown
                            className="size-4"/></TableHead>
                        <TableHead className="text-xs font-medium text-[#475467]">TJM</TableHead>
                        <TableHead className="text-xs font-medium text-[#475467]">Contrat</TableHead>
                        <TableHead className="text-xs font-medium text-[#475467]">Durée</TableHead>
                        <TableHead className="text-xs font-medium text-[#475467]">Localisation</TableHead>
                        <TableHead className="text-xs font-medium text-[#475467]">Publié le</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {missions.map((mission, index) => (
                        <TableRow key={index} className="h-[4.5rem]">
                            <TableCell className="font-medium text-[#101828] text-sm">{mission.title}</TableCell>
                            <TableCell className="text-[#101828] text-sm">{mission.tjm}</TableCell>
                            <TableCell>
                                <Badge variant={
                                    mission.contract === "Hybride"
                                        ? "outline"
                                        : mission.contract === "Présentiel"
                                            ? "secondary"
                                            : "default"
                                }
                                       className={`border rounded-full py-1 ${
                                           mission.contract === "Hybride" ? "bg-[#EEF4FF] border-[#C7D7FE] text-[#3538CD]"
                                               : mission.contract === "Présentiel" ? "border-[#D0D5DD] text-[#344054]" 
                                                   : "bg-[#F0F9FF] border-[#B9E6FE] text-[#026AA2]"
                                       }`}
                                >
                                    {mission.contract}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-[#101828] text-sm">{mission.duration}</TableCell>
                            <TableCell className="text-[#101828] text-sm">{mission.location}</TableCell>
                            <TableCell className="text-[#101828] text-sm">{mission.publishedAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex items-center justify-between px-6 pt-3 pb-4">
                <div className="flex items-center gap-2">
                    <CustomButton
                        className="bg-white border border-[#D0D5DD] text-[#344054]"
                    >
                        Précédent
                    </CustomButton>
                    <CustomButton
                        className="bg-white border border-[#D0D5DD] text-[#344054]"
                    >
                        Suivant
                    </CustomButton>
                </div>
                <p className="font-medium text-sm text–[#344054]">
                    Page 1 sur 10
                </p>
            </div>
        </div>
    );
};

export default DashboardPageDataTable;