import React from 'react';
import {Label} from "@/components/ui/label";
import CustomInput from "@/components/custom/CustomInput";
import {Bold, Italic, Link2, List, Mail} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {FaListOl} from "react-icons/fa6";
import {Textarea} from "@/components/ui/textarea";
import CustomButton from "@/components/custom/CustomButton";

const SettingsProfileContent = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
                <p className="font-semibold text-lg text-[#101828]">
                    Profil
                </p>
                <p className="text-sm text-[#475467]">
                    Veuillez renseigner vos informations personnelles.
                </p>
            </div>
            <hr/>

            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-4 gap-1.5 md:gap-8">
                    <Label
                        htmlFor="firstName"
                        className="md:w-96"
                    >
                        Prénom
                    </Label>
                    <div className="col-span-2">
                        <CustomInput
                            id="firstName"
                            name="firstName"
                            className="w-full"
                            defaultValue="Ihsan"
                            readOnly={true}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-1.5 md:gap-8">
                    <Label
                        htmlFor="lastName"
                        className="md:w-96"
                    >
                        NOM
                    </Label>
                    <div className="col-span-2">
                        <CustomInput
                            id="lastName"
                            name="lastName"
                            className="w-full"
                            defaultValue="MOHAMAD"
                            readOnly={true}
                        />
                    </div>
                </div>
                <hr/>

                <div className="grid grid-cols-4 gap-1.5 md:gap-8">
                    <Label
                        htmlFor="email"
                        className="md:w-96"
                    >
                        Adresse e-mail
                    </Label>
                    <div className="col-span-2">
                        <CustomInput
                            id="email"
                            name="email"
                            type="email"
                            className="w-full"
                            leftIcon={<Mail/>}
                            defaultValue="ihsan@example.com"
                            readOnly={true}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-1.5 md:gap-8">
                    <Label
                        htmlFor="phone"
                        className="md:w-96"
                    >
                        Numéro Whatsapp
                    </Label>
                    <div className="col-span-2">
                        <CustomInput
                            id="phone"
                            name="phone"
                            className="w-full"
                            defaultValue="+33 07 60 39 27 88"
                            readOnly={true}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-1.5 md:gap-8">
                    <Label
                        htmlFor="linkedin"
                        className="md:w-96"
                    >
                        Linkedin
                    </Label>
                    <div className="col-span-2">
                        <CustomInput
                            id="linkedin"
                            name="linkedin"
                            className="w-full"
                            defaultValue="www.linkedin.com/ihsanmohamad"
                            readOnly={true}
                        />
                    </div>
                </div>

                <hr/>

                <div className="grid grid-cols-4 gap-1.5 md:gap-8">
                    <Label
                        htmlFor="post"
                        className="md:w-96"
                    >
                        Votre poste
                    </Label>
                    <div className="col-span-2">
                        <CustomInput
                            id="post"
                            name="post"
                            className="w-full"
                            defaultValue="Chief Marketing Officer"
                            readOnly={true}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-1.5 md:gap-8">
                    <Label
                        htmlFor="skills"
                        className="md:w-96"
                    >
                        Compétences (5 max)
                    </Label>
                    <div className="col-span-2">
                        <CustomInput
                            id="skills"
                            name="skills"
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-1.5 md:gap-8">
                    <div className="flex flex-col gap-1">
                        <Label
                            htmlFor="bio"
                        >
                            Votre bio
                        </Label>
                        <p className="text-sm text-[#475467]">
                            Rédigez une brève présentation
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full col-span-2">
                        <div className="flex items-center gap-3 w-full">
                            <Select>
                                <SelectTrigger
                                    className="max-w-40 w-full !h-[2.75rem]  bricolage-grotesque tracking-tighter font-semibold px-3.5 bg-white rounded-[0.5rem] text-[#101828] text-sm border border-[#D0D5DD] ">
                                    <SelectValue placeholder="Font weight"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Font weight
                                        </SelectLabel>
                                        <SelectItem value="regular">
                                            Regular
                                        </SelectItem>
                                        <SelectItem value="medium">
                                            Medium
                                        </SelectItem>
                                        <SelectItem value="semibold">
                                            Semibold
                                        </SelectItem>
                                        <SelectItem value="bold">
                                            Bold
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div className="flex gap-1">
                                <button
                                    className="flex justify-center items-center size-8 rounded cursor-pointer hover:bg-gray-100">
                                    <Bold className="size-5 text-[#98A2B3]"/>
                                </button>
                                <button
                                    className="flex justify-center items-center size-8 rounded cursor-pointer hover:bg-gray-100">
                                    <Italic className="size-5 text-[#98A2B3]"/>
                                </button>
                                <button
                                    className="flex justify-center items-center size-8 rounded cursor-pointer hover:bg-gray-100">
                                    <Link2 className="size-5 text-[#98A2B3]"/>
                                </button>
                                <button
                                    className="flex justify-center items-center size-8 rounded cursor-pointer hover:bg-gray-100">
                                    <List className="size-5 text-[#98A2B3]"/>
                                </button>
                                <button
                                    className="flex justify-center items-center size-8 rounded cursor-pointer hover:bg-gray-100">
                                    <FaListOl className="size-4 text-[#98A2B3]"/>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Textarea
                                className="min-h-28 shadow-sm shadow-[#1018280D] bg-white rounded-[0.5rem] text-[#1B55F5] text-sm"
                                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                            />
                            <p className="text-sm text-[#475467]">
                                275 caractères restants
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <hr/>

            <div className="flex justify-end items-center w-full gap-3">
                <CustomButton
                    className="bg-white border border-[#D0D5DD] text-[#344054] hover:bg-gray-100"
                >
                    Annuler
                </CustomButton>
                <CustomButton>
                    Enregistrer
                </CustomButton>
            </div>
        </div>
    );
};

export default SettingsProfileContent;