"use client";

import React, {useState} from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {ArrowDown} from "lucide-react";
import useGetMissions from "@/hooks/mission/useGetMissions";
import MissionSkeletonTable from "@/components/dashboard/mission/MissionSkeletonTable";
import {MissionStatus} from "@/types/mission/MissionStatus";
import {formatDateToFRFormat} from "@/utils/formatDateToFRFormat";
import MissionTablePaginationControls from "@/components/dashboard/mission/MissionTablePaginationControls";
import ErrorBox from "@/components/dashboard/ErrorBox";
import {BsDatabaseFillSlash} from "react-icons/bs";

interface MissionPageDataTableProps {
    page?: number;
    title?: string;
    setPage?: (page: number) => void;
}

const MissionPageDataTable = ({
                                  page = 1,
                                  title = "",
                                  setPage = () => {
                                  }
                              }
                              :
                              MissionPageDataTableProps
    ) => {

        const {
            isPending,
            isError,
            data: missions
        } = useGetMissions({
            page,
            title: title && title.trim() !== "" ? title : undefined
        });

        const handlePageChange = (newPage: number) => {
            setPage(newPage);
        };

        if (isPending) {
            return (
                <MissionSkeletonTable/>
            )
        }

        if (isError) {
            return (
                <ErrorBox
                    message="Une erreur est survenue lors du chargement des missions. Veuillez réessayer plus tard."
                />
            )
        }

        return (
            <div className="flex flex-col gap-4 border border-[#EAECF0] rounded-[0.75rem]">
                {
                    missions && missions.data.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead
                                        className="flex items-center gap-2 text-xs font-medium text-[#475467] min-w-40">Mission <ArrowDown
                                        className="size-4"/></TableHead>
                                    <TableHead className="text-xs font-medium text-[#475467] min-w-40">Client</TableHead>
                                    <TableHead className="text-xs font-medium text-[#475467] min-w-40">TJM</TableHead>
                                    <TableHead className="text-xs font-medium text-[#475467] min-w-40">Contrat</TableHead>
                                    <TableHead className="text-xs font-medium text-[#475467] min-w-40">Publié le</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {missions.data.map((mission, index) => (
                                    <TableRow key={index} className={`h-[4.5rem] ${
                                        index < missions.data.length - 1 ? "!border-b border-b-[#EAECF0]" : ""
                                    }`}>
                                        <TableCell
                                            className="font-medium text-[#101828] text-sm">{mission.title}</TableCell>
                                        <TableCell className="text-[#101828] text-sm">{mission.client}</TableCell>
                                        <TableCell className="text-[#101828] text-sm">{mission.tjm}</TableCell>
                                        <TableCell>
                                            <Badge variant={
                                                mission.status === MissionStatus.OPEN
                                                    ? "default"
                                                    : "secondary"
                                            }
                                                   className={`border rounded-full py-1 ${
                                                       mission.status === MissionStatus.OPEN
                                                           ? "bg-[#ECFDF3] border-[#ABEFC6] text-[#067647]"
                                                           : "bg-[#F2F4F7] border-[#D0D5DD] text-[#344054]"
                                                   }`}
                                            >
                                                {mission.status === MissionStatus.OPEN ? "Ouvert" : "Fermé"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell
                                            className="text-[#101828] text-sm">{formatDateToFRFormat(mission.createdAt)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <div
                            className="h-full flex flex-col justify-center items-center gap-4 p-6 text-center text-sm text-[#475467]">
                            <BsDatabaseFillSlash className="flex-none size-10"/>
                            Aucune mission disponible pour le moment.
                        </div>
                    )
                }

                {
                    missions ?
                        <MissionTablePaginationControls
                            currentPage={missions.page}
                            totalCount={missions.count}
                            perPage={missions.perPage}
                            onPageChange={handlePageChange}
                        /> : null
                }
            </div>
        );
    }
;

export default MissionPageDataTable;