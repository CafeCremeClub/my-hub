"use client";

import React from 'react';
import CustomButton from "@/components/custom/CustomButton";
import Image from "next/image";
import {defaultAvatar} from "../../../../public";
import {TbCurrencyEuro} from "react-icons/tb";
import FRIcon from "@/components/icons/FRIcon";
import {ArrowUpRight} from "lucide-react";
import PDFIcon from "@/components/icons/PDFIcon";
import useGetMe from "@/hooks/auth/useGetMe";
import ProfileSkeleton from "@/components/dashboard/profile/ProfileSkeleton";
import ErrorBox from "@/components/dashboard/ErrorBox";
import Link from "next/link";
import {FiEdit} from "react-icons/fi";

const ProfilePageContent = () => {

    const {
        isPending,
        isError,
        data
    } = useGetMe();

    if (isPending) {
        return (
            <ProfileSkeleton/>
        )
    }

    if (isError || !data) {
        return (
            <ErrorBox
                message="Une erreur est survenue lors du chargement de votre profil. Veuillez réessayer plus tard."
            />
        )
    }

    return (
        <div className="grid grid-cols-8 gap-8">
            <div
                className="col-span-8 rounded-3xl py-6 px-8 bg-[#F4F9FF] flex xl:flex-row flex-col xl:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <div className="size-[10rem] rounded-full border-4 border-white overflow-hidden flex-none">
                        <Image src={defaultAvatar} alt="User Profile Picture"
                               className="w-full h-full object-cover object-center"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-5xl text-[#1734B6] tracking-tighter bricolage-grotesque">
                            {data.firstname} {data.lastname}
                        </p>
                        <p className="text-[#475467]">
                            {data.profession}
                        </p>
                    </div>
                </div>
                <CustomButton>
                    Modifier mon profil
                </CustomButton>
            </div>
            <div
                className="col-span-8 lg:col-span-4 xl:col-span-2 rounded-3xl py-6 px-8 bg-[#F4F9FF] flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <p className="text-4xl text-[#475467] font-semibold tracking-tighter bricolage-grotesque">
                        TJM
                    </p>
                    <div className="flex items-center gap-2">
                        <TbCurrencyEuro className="text-[#667085] size-9"/>
                        <p className="text-4xl text-[#344054] font-semibold tracking-tighter bricolage-grotesque">
                            {data.tjm}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-[#475467]">
                        Localisation
                    </p>
                    <div className="flex items-center gap-2">
                        <FRIcon/>
                        <p className="font-medium text-[#344054] tracking-tighter bricolage-grotesque">
                            {data.city}, {data.country.toUpperCase()}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-[#475467]">
                        Linkedin
                    </p>
                    <Link
                        href={data.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex items-center gap-2 cursor-pointer hover:underline">
                            <p className="font-semibold text-[#004EEB] tracking-tighter bricolage-grotesque">
                                {
                                    data.linkedIn.split("/").filter(Boolean).pop()
                                }
                            </p>
                            <ArrowUpRight className="text-[#6941C6] size-5"/>
                        </div>
                    </Link>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-[#475467]">
                        Whatsapp
                    </p>
                    <div className="flex items-center gap-2 cursor-pointer hover:underline">
                        <p className="font-semibold text-[#004EEB] tracking-tighter bricolage-grotesque">
                            {data.whatsApp}
                        </p>
                        <ArrowUpRight className="text-[#6941C6] size-5"/>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-[#475467]">
                        Email
                    </p>
                    <div className="flex items-center gap-2 cursor-pointer hover:underline">
                        <p className="font-semibold text-[#004EEB] tracking-tighter bricolage-grotesque">
                            {data.email}
                        </p>
                        <ArrowUpRight className="text-[#6941C6] size-5"/>
                    </div>
                </div>
            </div>
            <div
                className="col-span-8 lg:col-span-4 xl:col-span-6 rounded-3xl py-6 px-8 bg-[#F4F9FF] flex flex-col gap-8 h-max">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-2">
                        <p className="text-[#101828] text-xl font-semibold tracking-tighter bricolage-grotesque">
                            À propos de moi :
                        </p>
                        <CustomButton
                            className="size-9 bg-white border border-[#D0D5DD] hover:bg-[#D0D5DD]"
                        >
                            <FiEdit className="size-4 text-[#344054]"/>
                        </CustomButton>
                    </div>
                    <p className="text-[#475467] text-justify">
                        {
                            data.bio ? data.bio : "Vous pouvez mettre en avant votre expérience, votre secteur d’activité ou vos compétences."
                        }
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-[#101828] text-xl font-semibold tracking-tighter bricolage-grotesque">
                        CV :
                    </p>
                    <Link href={data.cv} target="_blank" rel="noopener noreferrer">
                        <div
                            className="max-w-md flex items-start justify-between p-3.5 bg-white border border-[#EAECF0] rounded-[0.75rem]">
                            <div className="flex items-center gap-3">
                                <PDFIcon/>
                                <div className="text-sm">
                                    <p className="text-[#344054]">{data.firstname + " " + data.lastname + " CV"}.pdf</p>
                                    <p className="text-[#475467]">100% uploaded</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfilePageContent;