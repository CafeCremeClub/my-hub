import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog';
import React, {useState} from 'react';
import CustomButton from "@/components/custom/CustomButton";
import {CircleCheck} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import CustomErrorIndicator from "@/components/custom/CustomErrorIndicator";
import {useFormik} from "formik";
import * as Yup from "yup";
import useApplyForMission from "@/hooks/mission/useApplyForMission";
import {useRouter} from "next/navigation";
import {Label} from "@/components/ui/label";
import {handleApplyForMissionError} from "@/utils/helpers/handleApplyForMissionError";
import {useQueryClient} from "@tanstack/react-query";


interface ApplyForMissionDialogProps {
    isOpen: boolean;
    onClose: () => void;
    missionId: string;
}

const ApplyForMissionDialog = ({
                                   isOpen,
                                   onClose,
                                   missionId
                               }: ApplyForMissionDialogProps) => {

    const queryClient = useQueryClient();
    const [step, setStep] = useState<1 | 2>(1);
    const router = useRouter();
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const {
        isPending,
        mutateAsync
    } = useApplyForMission();


    const formik = useFormik({
        initialValues: {
            note: ''
        },
        validationSchema: Yup.object({
            note: Yup.string().optional()
        }),
        onSubmit: async (values) => {
            try {
                setErrorMessage(null);

                await mutateAsync({
                    missionId: missionId,
                    note: values.note || ""
                });

                await queryClient.invalidateQueries({
                    queryKey: ["get-mission-by-id", missionId],
                    type: "all",
                    exact: true
                })

                setStep(2);

            } catch (error) {
                const errorMessage = handleApplyForMissionError(error);
                setErrorMessage(errorMessage);
            }
        },
    })

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg overflow-hidden rounded-[1.25rem]">
                <div className="bg-white flex flex-col gap-10 overflow-y-scroll scroll-hidden">
                    <DialogHeader className="hidden">
                        <DialogTitle></DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    {
                        step === 1 ? (
                            <form className="mt-4 px-2 flex flex-col gap-8 flex-1" onSubmit={formik.handleSubmit}>
                                <div className="flex flex-col gap-1">
                                    <div
                                        className="flex-none flex justify-center items-center rounded-full size-12 bg-[#DCFAE6]">
                                        <CircleCheck className="text-[#079455]"/>
                                    </div>
                                    <p className="text-lg text-[#101828] font-semibold">
                                        Dernière étape avant de postuler !
                                    </p>
                                    <p className="text-sm text-[#475467]">
                                        Tu es sur le point de candidater à cette mission. Une fois envoyé, ton profil
                                        sera
                                        directement visible par le recruteur.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <Label
                                        htmlFor="note"
                                        className="text-sm text-[#344054] font-medium"
                                    >
                                        Un dernier mot sur toi ?
                                    </Label>
                                    <Textarea
                                        id="note"
                                        name="note"
                                        className="min-h-28 shadow-sm shadow-[#1018280D] bg-white rounded-[0.5rem] text-[#1B55F5] text-sm"
                                        value={formik.values.note}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.note && formik.errors.note && (
                                        <CustomErrorIndicator
                                            message={formik.errors.note}
                                        />
                                    )}
                                </div>
                                {
                                    errorMessage && (
                                        <CustomErrorIndicator
                                            message={errorMessage}
                                        />
                                    )
                                }
                                <DialogFooter className="flex items-center justify-end">
                                    <CustomButton
                                        type="button"
                                        className="bricolage-grotesque tracking-tighter font-bold w-max text-[#344054] bg-white hover:bg-gray-50 border border-[#D0D5DD]"
                                    >
                                        Annuler
                                    </CustomButton>
                                    <CustomButton
                                        type="submit"
                                        className="bricolage-grotesque tracking-tighter font-bold min-w-32"
                                        disabled={isPending}
                                        isLoading={isPending}
                                    >
                                        Confirmer ma candidature
                                    </CustomButton>
                                </DialogFooter>
                            </form>
                        ) : (
                            <div className="mt-4 px-2 flex flex-col gap-8 flex-1">
                                <div className="flex flex-col gap-1">
                                    <div
                                        className="flex-none flex justify-center items-center rounded-full size-12 bg-[#DCFAE6]">
                                        <CircleCheck className="text-[#079455]"/>
                                    </div>
                                    <p className="text-lg text-[#101828] font-semibold">
                                        Candidature envoyée avec succès !
                                    </p>
                                    <p className="text-sm text-[#475467]">
                                        Ta candidature a bien été envoyée. Le recruteur peut maintenant consulter ton
                                        profil et te contacter si ton profil correspond.
                                    </p>
                                </div>

                                <DialogFooter className="flex items-center justify-end">
                                    <CustomButton
                                        type="button"
                                        className="bricolage-grotesque tracking-tighter font-bold w-max text-[#344054] bg-white hover:bg-gray-50 border border-[#D0D5DD]"
                                    >
                                        Fermer
                                    </CustomButton>
                                    <CustomButton
                                        type="button"
                                        className="bricolage-grotesque tracking-tighter font-bold"
                                        onClick={() => router.push('/dashboard')}
                                    >
                                        Voir les missions
                                    </CustomButton>
                                </DialogFooter>
                            </div>
                        )
                    }
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ApplyForMissionDialog;