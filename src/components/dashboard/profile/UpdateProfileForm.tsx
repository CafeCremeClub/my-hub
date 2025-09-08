import React from 'react';
import {Profile} from "@/types/auth/Profile";
import {Label} from "@/components/ui/label";
import CustomInput from "@/components/custom/CustomInput";
import CustomErrorIndicator from "@/components/custom/CustomErrorIndicator";
import {CircleQuestionMark, Mail} from "lucide-react";
import CustomPhoneInput from "@/components/custom/CustomPhoneInput";
import CustomTagInputWithCustomValues from "@/components/custom/CustomTagInputWithCustomValues";
import {skillOptions} from "@/utils/skillOptions";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Textarea} from "@/components/ui/textarea";
import CustomButton from "@/components/custom/CustomButton";
import {useFormik} from "formik";
import {toast} from "sonner";
import {useQueryClient} from "@tanstack/react-query";
import useUpdateProfile from "@/hooks/auth/useUpdateProfile";
import * as Yup from "yup";


const MAX_BIO_LENGTH = 300;

const validationSchema = Yup.object({
    firstname: Yup.string().required("Le prénom est requis"),
    lastname: Yup.string().required("Le nom est requis"),
    profession: Yup.string().required("Le poste est requis"),
    linkedIn: Yup.string().required("Le profil LinkedIn est requis"),
    whatsApp: Yup.string().required("Le numéro WhatsApp est requis"),
    bio: Yup.string().required("La bio est requise").max(MAX_BIO_LENGTH, `La bio ne peut pas dépasser ${MAX_BIO_LENGTH} caractères`),
    skills: Yup.array().min(1, "Au moins une compétence est requise").required("Les compétences sont requises")
});

interface UpdateProfileFormProps {
    data: Profile
}

const UpdateProfileForm = ({data}: UpdateProfileFormProps) => {

    const queryClient = useQueryClient();
    const {
        isPending: updateIsPending,
        mutateAsync: updateProfile
    } = useUpdateProfile();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: data?.firstname || "",
            lastname: data?.lastname || "",
            profession: data?.profession || "",
            linkedIn: data?.linkedIn || "",
            whatsApp: data?.whatsApp || "",
            bio: data?.bio || "",
            skills: data?.skills || []
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                await updateProfile(values);
                await queryClient.invalidateQueries({
                    queryKey: ["get-me"],
                    type: "all",
                    exact: true,
                });
                toast.success("Profil mis à jour avec succès", {
                    description: "Vos informations ont été mises à jour.",
                    position: "bottom-right",
                    className: "!bg-[#CBF5E5] !text-[#176448] !border !border-[#CBF5E5]",
                    descriptionClassName: "!text-[#176448] !text-xs"
                });
            } catch (error) {
                console.log(error);
                toast.error("Une erreur est survenue", {
                    description: "Un problème est survenu lors de la mise à jour de vos informations. Veuillez réessayer plus tard.",
                    position: "bottom-right",
                    className: "!bg-[#DF1C41] !text-white",
                    descriptionClassName: "!text-white !text-xs"
                });
            }
        }
    })

    return (
        <form className="flex flex-col gap-6 pb-6" onSubmit={formik.handleSubmit}>
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
                <div className="grid lg:grid-cols-4 gap-1.5 lg:gap-8">
                    <Label
                        htmlFor="firstname"
                        className="md:w-96"
                    >
                        Prénom
                    </Label>
                    <div className="col-span-2">
                        <CustomInput
                            id="firstname"
                            name="firstname"
                            className="w-full"
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isError={formik.touched.firstname && formik.errors.firstname !== undefined}
                        />
                        {formik.touched.firstname && formik.errors.firstname && (
                            <CustomErrorIndicator
                                message={formik.errors.firstname}
                            />
                        )}
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 gap-1.5 lg:gap-8">
                    <Label
                        htmlFor="lastname"
                        className="md:w-96"
                    >
                        NOM
                    </Label>
                    <div className="col-span-2">
                        <CustomInput
                            id="lastname"
                            name="lastname"
                            className="w-full"
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isError={formik.touched.lastname && formik.errors.lastname !== undefined}
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                            <CustomErrorIndicator
                                message={formik.errors.lastname}
                            />
                        )}
                    </div>
                </div>
                <hr/>

                <div className="grid lg:grid-cols-4 gap-1.5 lg:gap-8">
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
                            defaultValue={data.email}
                            readOnly={true}
                            disabled
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-1.5 lg:gap-8">
                    <Label
                        htmlFor="whatsApp"
                        className="md:w-96"
                    >
                        Numéro Whatsapp
                    </Label>
                    <div className="col-span-2">
                        <CustomPhoneInput
                            value={formik.values.whatsApp}
                            onChange={(value) => formik.setFieldValue('whatsApp', value)}
                            isError={formik.touched.whatsApp && formik.errors.whatsApp !== undefined}
                        />
                        {formik.touched.whatsApp && formik.errors.whatsApp && (
                            <CustomErrorIndicator
                                message={formik.errors.whatsApp}
                            />
                        )}
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-1.5 lg:gap-8">
                    <Label
                        htmlFor="linkedIn"
                        className="md:w-96"
                    >
                        Linkedin
                    </Label>
                    <div className="col-span-2">
                        <CustomInput
                            id="linkedIn"
                            name="linkedIn"
                            className="w-full"
                            value={formik.values.linkedIn}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isError={formik.touched.linkedIn && formik.errors.linkedIn !== undefined}
                        />
                        {formik.touched.linkedIn && formik.errors.linkedIn && (
                            <CustomErrorIndicator
                                message={formik.errors.linkedIn}
                            />
                        )}
                    </div>
                </div>

                <hr/>

                <div className="grid lg:grid-cols-4 gap-1.5 lg:gap-8">
                    <Label
                        htmlFor="profession"
                        className="md:w-96"
                    >
                        Votre poste
                    </Label>
                    <div className="col-span-2">
                        <CustomInput
                            id="profession"
                            name="profession"
                            className="w-full"
                            value={formik.values.profession}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isError={formik.touched.profession && formik.errors.profession !== undefined}
                        />
                        {formik.touched.profession && formik.errors.profession && (
                            <CustomErrorIndicator
                                message={formik.errors.profession}
                            />
                        )}
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-1.5 lg:gap-8">
                    <div className={data.skills && data.skills.length > 0 ? "flex flex-col" : "flex"}>
                        <Label
                            htmlFor="skills"
                            className="md:w-96"
                        >
                            Compétences (5 max)
                        </Label>
                    </div>
                    <div className="flex flex-col gap-4 col-span-2">
                        <CustomTagInputWithCustomValues
                            id="skills"
                            placeholder="Ex : React, Node.js, UX Design"
                            maxItems={5}
                            items={skillOptions}
                            value={formik.values.skills}
                            onChange={(tags) => formik.setFieldValue('skills', tags)}
                            isError={formik.touched.skills && formik.errors.skills !== undefined}
                        />
                        {formik.touched.skills && formik.errors.skills && (
                            <CustomErrorIndicator
                                message={formik.errors.skills as string}
                            />
                        )}
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-1.5 lg:gap-8">
                    <div className="flex flex-col gap-1">
                        <Label
                            htmlFor="bio"
                            className="flex items-center gap-1.5"
                        >
                            Votre bio
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <CircleQuestionMark className="size-4"/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Visible de tous</p>
                                </TooltipContent>
                            </Tooltip>
                        </Label>
                        <p className="text-sm text-[#475467]">
                            Rédigez une brève présentation
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full col-span-2">
                        {/*HIDDEN*/}
                        {/*<div className="flex items-center gap-3 w-full">
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
                        </div>*/}
                        <div className="flex flex-col gap-2">
                            <Textarea
                                id="bio"
                                name="bio"
                                className="min-h-28 shadow-sm shadow-[#1018280D] bg-white rounded-[0.5rem] text-[#1B55F5] text-sm"
                                value={formik.values.bio}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <p className="text-sm text-[#475467]">
                                {MAX_BIO_LENGTH - formik.values.bio.length} caractères restants
                            </p>
                            {formik.touched.bio && formik.errors.bio && (
                                <CustomErrorIndicator
                                    message={formik.errors.bio}
                                />
                            )}
                        </div>
                    </div>
                </div>

            </div>

            <hr/>

            <div className="flex justify-end items-center w-full gap-3">
                <CustomButton
                    type="button"
                    className="bg-white border border-[#D0D5DD] text-[#344054] hover:bg-gray-100"
                    onClick={() => formik.resetForm()}
                >
                    Annuler
                </CustomButton>
                <CustomButton
                    type="submit"
                    disabled={updateIsPending}
                    isLoading={updateIsPending}
                    className="min-w-32"
                >
                    Enregistrer
                </CustomButton>
            </div>
        </form>
    );
};

export default UpdateProfileForm;