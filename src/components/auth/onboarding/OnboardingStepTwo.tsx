"use client";

import React from 'react';
import {TbUsersPlus} from "react-icons/tb";
import {Label} from "@/components/ui/label";
import CustomInput from "@/components/custom/CustomInput";
import CustomButton from "@/components/custom/CustomButton";
import {ImCoinEuro} from "react-icons/im";
import CustomDragDropInput from "@/components/custom/CustomDragDropInput";
import {useRouter} from "next/navigation";
import useOnboardingContext from "@/hooks/useOnboardingContext";
import {useFormik} from "formik";
import * as yup from "yup";
import CustomErrorIndicator from "@/components/custom/CustomErrorIndicator";
import CustomTagInputWithDropDown from "@/components/custom/CustomTagInputWithDropDown";
import {jobOptions} from "@/utils/jobOptions";
import {industryOptions} from "@/utils/industryOptions";
import {skillOptions} from "@/utils/skillOptions";
import CustomSelectWithDropDown from "@/components/custom/CustomSelectWithDropDown";
import useSearchCity from "@/hooks/search/useSearchCity";
import CustomTagInputWithCustomValues from "@/components/custom/CustomTagInputWithCustomValues";

const validationSchema = yup.object({
    tjm: yup.string().required("Le TJM est requis"),
    expertise: yup.string().required("L'expertise est requise"),
    industry: yup.array().min(1, "Au moins un secteur d'activité est requis"),
    desiredJobs: yup.array().min(1, "Au moins un métier recherché est requis"),
    country: yup.string().required('Le pays est requis'),
    city: yup.string().required('La ville est requise'),
    skills: yup.array().min(1, "Au moins une compétence est requise"),
    cv: yup.mixed().required("Le CV est requis")
});

const OnboardingStepTwo = () => {

    const {
        isPending,
        mutateAsync: searchCityByName
    } = useSearchCity();

    const [citySearchResults, setCitySearchResults] = React.useState<Array<{
        key: string;
        label: string;
        value: string;
    }>>([]);

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
        city,
        setCity,
        skills,
        setSkills,
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

    // Handle city search
    const handleCitySearch = async (query: string) => {
        try {
            const response = await searchCityByName({
                q: query,
                limit: 10,
                autocomplete: 1
            });

            const cityItems = response.features
                .map((feature) => ({
                    key: feature.properties.id,
                    label: `${feature.properties.postcode} ${feature.properties.city}`,
                    value: `${feature.properties.label}__${feature.properties.id}`
                }));

            setCitySearchResults(cityItems);
        } catch (error) {
            console.error('Error searching cities:', error);
            setCitySearchResults([]);
        }
    };

    const formik = useFormik({
        initialValues: {
            tjm: tjm || "",
            expertise: expertise || "",
            industry: industry || [],
            desiredJobs: desiredJobs || [],
            country: "France",
            city: city || "",
            skills: skills || [],
            cv: cv || null,
        },
        validationSchema,
        onSubmit: (values) => {
            setTjm(values.tjm);
            setExpertise(values.expertise);
            setIndustry(values.industry);
            setDesiredJobs(values.desiredJobs);
            setCity(values.city);
            setSkills(values.skills);
            setCv(values.cv);

            handleContinue();
        },
    })

    return (
        <div className="z-10 flex flex-col items-center gap-8 w-full sm:w-[22.5rem]">
            <div
                className="flex justify-center items-center size-12 rounded-[0.625rem] border shadow shadow-[#1018280D] border-[#EAECF0] bg-white"
            >
                <TbUsersPlus className="size-6 text-[#344054]"/>
            </div>
            <div className="flex flex-col items-center gap-3">
                <p className="text-2xl font-semibold tracking-tighter bricolage-grotesque text-center">
                    Renseignez vos compétences et vos préférences de mission
                </p>
                <p className="text-center text-[#475467]">
                    Indiquez vos compétences clés et le type de missions que vous préférez
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
                            type="number"
                            placeholder="Ex : 400€"
                            leftIcon={<ImCoinEuro/>}
                            value={formik.values.tjm}
                            onChange={(e) => {
                                // Only allow numeric values
                                const value = e.target.value.replace(/[^0-9]/g, '');
                                formik.setFieldValue('tjm', value);
                            }}
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
                        <CustomTagInputWithDropDown
                            id="industry"
                            placeholder="Ex : Marketing, Finance, IT"
                            maxItems={3}
                            numberOfElementsMessage={`3 secteurs maximum`}
                            items={industryOptions}
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
                        <CustomTagInputWithDropDown
                            id="desiredJobs"
                            placeholder="Ex : Développeur, Designer, Chef de projet"
                            maxItems={3}
                            numberOfElementsMessage={`3 métiers maximum`}
                            items={jobOptions}
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
                        <Label htmlFor="skills" className="text-[#344054] text-sm font-medium">
                            Compétences
                        </Label>
                        <CustomTagInputWithCustomValues
                            id="skills"
                            placeholder="Ex : React, Node.js, UX Design"
                            maxItems={5}
                            numberOfElementsMessage={`5 compétences maximum`}
                            items={skillOptions}
                            value={formik.values.skills}
                            onChange={(tags) => formik.setFieldValue('skills', tags)}
                            onBlur={() => formik.setFieldTouched('skills', true)}
                            isError={formik.touched.skills && formik.errors.skills !== undefined}
                        />
                        {formik.touched.skills && formik.errors.skills && (
                            <CustomErrorIndicator
                                message={formik.errors.skills as string}
                            />
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="city" className="text-[#344054] text-sm font-medium">
                            Votre ville
                        </Label>
                        <CustomSelectWithDropDown
                            id="city"
                            placeholder="Ex : Paris, Lyon, Marseille"
                            value={formik.values.city}
                            items={citySearchResults}
                            onChange={(uniqueValue) => {
                                const cityName = uniqueValue.split('__')[0];
                                formik.setFieldValue('city', cityName);
                            }}
                            onBlur={() => formik.setFieldTouched('city', true)}
                            isError={formik.touched.city && formik.errors.city !== undefined}
                            onSearch={handleCitySearch}
                            isSearching={isPending}
                        />
                        {formik.touched.city && formik.errors.city && (
                            <CustomErrorIndicator
                                message={formik.errors.city}
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
                            onFileDelete={() => formik.setFieldValue('cv', null)}
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
                </div>
            </form>

        </div>
    );
};

export default OnboardingStepTwo;