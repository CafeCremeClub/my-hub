import React from 'react';
import CustomButton from "@/components/custom/CustomButton";
import Image from "next/image";
import {user} from "../../../../public";
import {TbCurrencyEuro} from "react-icons/tb";
import FRIcon from "@/components/icons/FRIcon";
import {ArrowUpRight} from "lucide-react";
import PDFIcon from "@/components/icons/PDFIcon";

const ProfilePageContent = () => {
    return (
        <div className="grid grid-cols-8 gap-8">
            <div className="col-span-8 rounded-3xl py-6 px-8 bg-[#F4F9FF] flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <div className="size-[10rem] rounded-full border-4 border-white overflow-hidden flex-none">
                        <Image src={user} alt="User Profile Picture"
                               className="w-full h-full object-cover object-center"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-5xl text-[#1734B6] tracking-tighter bricolage-grotesque">
                            0livia Rhye
                        </p>
                        <p className="text-[#475467]">
                            Développeur Full Stack
                        </p>
                    </div>
                </div>
                <CustomButton>
                    Modifier mon profil
                </CustomButton>
            </div>
            <div className="col-span-2 rounded-3xl py-6 px-8 bg-[#F4F9FF] flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <p className="text-4xl text-[#475467] font-semibold tracking-tighter bricolage-grotesque">
                        TJM
                    </p>
                    <div className="flex items-center gap-2">
                        <TbCurrencyEuro className="text-[#667085] size-9"/>
                        <p className="text-4xl text-[#344054] font-semibold tracking-tighter bricolage-grotesque">
                            450
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
                            Paris, FRANCE
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-[#475467]">
                        Linkedin
                    </p>
                    <div className="flex items-center gap-2 cursor-pointer hover:underline">
                        <p className="font-semibold text-[#004EEB] tracking-tighter bricolage-grotesque">
                            jayawillis.com
                        </p>
                        <ArrowUpRight className="text-[#6941C6] size-5"/>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-[#475467]">
                        Whatsapp
                    </p>
                    <div className="flex items-center gap-2 cursor-pointer hover:underline">
                        <p className="font-semibold text-[#004EEB] tracking-tighter bricolage-grotesque">
                            @jayawillis
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
                            hi@jayawillis.com
                        </p>
                        <ArrowUpRight className="text-[#6941C6] size-5"/>
                    </div>
                </div>
            </div>
            <div className="col-span-6 rounded-3xl py-6 px-8 bg-[#F4F9FF] flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                    <p className="text-[#101828] text-xl font-semibold tracking-tighter bricolage-grotesque">
                        À propos de moi :
                    </p>
                    <p className="text-[#475467] text-justify">
                        I&#39;m a Product Designer based in Melbourne, Australia. I enjoy working on product design,
                        design
                        systems, and Webflow projects, but I don&#39;t take myself too seriously. <br/><br/>
                        I’ve worked with some of the world’s most exciting companies, including Coinbase, Stripe, and
                        Linear. I&#39;m passionate about helping startups grow, improve their UX and customer
                        experience,
                        and to raise venture capital through good design. <br/><br/>
                        My work has been featured on Typewolf, Mindsparkle Magazine, Webflow, Fonts In Use, CSS Winner,
                        httpster, Siteinspire, and Best Website Gallery.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-[#101828] text-xl font-semibold tracking-tighter bricolage-grotesque">
                        CV :
                    </p>
                    <div className="max-w-md flex items-start justify-between p-3.5 bg-white border border-[#EAECF0] rounded-[0.75rem]">
                        <div className="flex items-center gap-3">
                            <PDFIcon/>
                            <div className="text-sm">
                                <p className="text-[#344054]">Tech design requirements.pdf</p>
                                <p className="text-[#475467]">200 KB – 100% uploaded</p>
                            </div>
                        </div>
                        <input
                            type="checkbox"
                            checked={true}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePageContent;