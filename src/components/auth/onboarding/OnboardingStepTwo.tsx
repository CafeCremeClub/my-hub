"use client";

import React from 'react';
import {TbUsersPlus} from "react-icons/tb";
import {Label} from "@/components/ui/label";
import CustomInput from "@/components/custom/CustomInput";
import CustomButton from "@/components/custom/CustomButton";
import {ImCoinEuro} from "react-icons/im";
import CustomTagInput from "@/components/custom/CustomTagInput";
import CustomDragDropInput from "@/components/custom/CustomDragDropInput";
import {useRouter} from "next/navigation";
import useOnboardingContext from "@/hooks/useOnboardingContext";
import {useFormik} from "formik";
import * as yup from "yup";
import CustomErrorIndicator from "@/components/custom/CustomErrorIndicator";

const validationSchema = yup.object({
    tjm: yup.string().required("Le TJM est requis"),
    expertise: yup.string().required("L'expertise est requise"),
    industry: yup.array().min(1, "Au moins un secteur d'activité est requis"),
    desiredJobs: yup.array().min(1, "Au moins un métier recherché est requis"),
    cv: yup.mixed().required("Le CV est requis")
});

const OnboardingStepTwo = () => {

    const router = useRouter();
    const {
        tjm,
        setTjm,
        expertise,
        setExpertise,
        industry,
        setIndustry,
        desiredJobs,
        setDesiredJobs,
        cv,
        setCv,
    } = useOnboardingContext();

    const handleContinue = () => {
        const nextStep = 3;

        // update URL param
        const url = new URL(window.location.href);
        url.searchParams.set("step", nextStep.toString());
        router.push(url.toString());
    };

    const formik = useFormik({
        initialValues: {
            tjm: tjm || "",
            expertise: expertise || "",
            industry: industry || [],
            desiredJobs: desiredJobs || [],
            cv: cv || null,
        },
        validationSchema,
        onSubmit: (values) => {
            setTjm(values.tjm);
            setExpertise(values.expertise);
            setIndustry(values.industry);
            setDesiredJobs(values.desiredJobs);
            setCv(values.cv);

            handleContinue();
        },
    })

    /*const handleBack = () => {
        const prevStep = 1;
        // update context state
        setStep(prevStep);

        // update URL param
        const url = new URL(window.location.href);
        url.searchParams.set("step", prevStep.toString());
        router.push(url.toString());
    };*/

    return (
        <div className="flex flex-col items-center gap-8 w-full sm:w-[22.5rem]">
            <div
                className="flex justify-center items-center size-12 rounded-[0.625rem] border shadow shadow-[#1018280D] border-[#EAECF0]"
            >
                <TbUsersPlus className="size-6 text-[#344054]"/>
            </div>
            <div className="flex flex-col items-center gap-3">
                <p className="text-2xl font-semibold tracking-tighter bricolage-grotesque text-center">
                    Renseigne tes compétences et tes préférences de mission
                </p>
                <p className="text-center text-[#475467]">
                    Indique tes compétences clés et le type de missions que tu préfères.
                </p>
            </div>

            <form className="flex flex-col gap-6 w-full" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="tjm" className="text-[#344054] text-sm font-medium">
                            TJM
                        </Label>
                        <CustomInput
                            id="tjm"
                            name="tjm"
                            placeholder="Ex : 400€"
                            leftIcon={<ImCoinEuro/>}
                            value={formik.values.tjm}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isError={formik.touched.tjm && formik.errors.tjm !== undefined}
                        />
                        {formik.touched.tjm && formik.errors.tjm && (
                            <CustomErrorIndicator
                                message={formik.errors.tjm}
                            />
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="expertise" className="text-[#344054] text-sm font-medium">
                            Expertises
                        </Label>
                        <CustomInput
                            id="expertise"
                            name="expertise"
                            placeholder="Entre tes domaines d'expertises"
                            value={formik.values.expertise}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isError={formik.touched.expertise && formik.errors.expertise !== undefined}
                        />
                        {formik.touched.expertise && formik.errors.expertise && (
                            <CustomErrorIndicator
                                message={formik.errors.expertise}
                            />
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="industry" className="text-[#344054] text-sm font-medium">
                            Secteurs d&#39;activité
                        </Label>
                        <CustomTagInput
                            id="industry"
                            name="industry"
                            placeholder="Ex : Marketing, Finance, IT"
                            maxItems={3}
                            value={formik.values.industry}
                            onChange={(tags) => formik.setFieldValue('industry', tags)}
                            onBlur={() => formik.setFieldTouched('industry', true)}
                            isError={formik.touched.industry && formik.errors.industry !== undefined}
                        />
                        {formik.touched.industry && formik.errors.industry && (
                            <CustomErrorIndicator
                                message={formik.errors.industry as string}
                            />
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="desiredJobs" className="text-[#344054] text-sm font-medium">
                            Métiers recherchés
                        </Label>
                        <CustomTagInput
                            id="desiredJobs"
                            name="desiredJobs"
                            placeholder="Ex : Développeur, Designer, Chef de projet"
                            maxItems={3}
                            value={formik.values.desiredJobs}
                            onChange={(tags) => formik.setFieldValue('desiredJobs', tags)}
                            onBlur={() => formik.setFieldTouched('desiredJobs', true)}
                            isError={formik.touched.desiredJobs && formik.errors.desiredJobs !== undefined}
                        />
                        {formik.touched.desiredJobs && formik.errors.desiredJobs && (
                            <CustomErrorIndicator
                                message={formik.errors.desiredJobs as string}
                            />
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <CustomDragDropInput
                            title="Déposes ton CV"
                            value={formik.values.cv}
                            acceptedFormats={["SVG", "PNG", "JPG", "JPEG", "PDF"]}
                            maxSize={50}
                            onFileUpload={(file) => formik.setFieldValue('cv', file)}
                            isError={formik.touched.cv && formik.errors.cv !== undefined}
                        />
                        {formik.touched.cv && formik.errors.cv && (
                            <CustomErrorIndicator
                                message={formik.errors.cv}
                            />
                        )}
                    </div>

                </div>

                <div className="flex flex-col gap-0.5">
                    <CustomButton
                        type="submit"
                        className="bricolage-grotesque font-semibold"
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        Continuer
                    </CustomButton>
                    {/*<CustomButton
                        type="button"
                        className="text-[#1B55F5] bg-white hover:bg-white hover:underline bricolage-grotesque font-semibold border-none shadow-none"
                        onClick={handleBack}
                    >
                        Retour
                    </CustomButton>*/}
                </div>
            </form>

        </div>
    );
};

export default OnboardingStepTwo;