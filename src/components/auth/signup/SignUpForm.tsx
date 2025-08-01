import React from 'react';
import Image from "next/image";
import {logo} from "../../../../public";
import CustomInput from "@/components/custom/CustomInput";
import CustomButton from "@/components/custom/CustomButton";
import Link from "next/link";

interface SignUpFormProps {
    onNext: () => void;
}

const SignUpForm = ({onNext}: SignUpFormProps) => {
    return (
        <div className="flex flex-col gap-8 w-full md:w-[27.5rem]">
            <div className="flex items-center flex-col gap-6">
                <Image
                    src={logo}
                    alt="logo"
                    className="object-center object-cover w-64"
                />
                <div className="flex flex-col gap-3">
                    <p className="text-center font-semibold text-[#101828] text-3xl bricolage-grotesque tracking-tighter">
                        Inscris-toi à MyHub
                    </p>
                    <p className="text-[#475467] text-center">
                        Commencez votre essai gratuit de 30 jours.
                    </p>
                </div>
            </div>

            <form
                className="flex flex-col gap-6 rounded-[0.75rem] px-10 py-8 bg-white shadow-lg shadow-[#1018280F]">
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="email"
                        className="text-sm text-[#344054]"
                    >
                        Entre ton adresse email*
                    </label>
                    <CustomInput
                        id="email"
                        name="email"
                        type="email"
                        placeholder="mail@exemple.com"
                    />
                </div>

                <CustomButton
                    type="button"
                    className="bricolage-grotesque font-semibold"
                    onClick={onNext}
                >
                    Créer mon compte
                </CustomButton>
            </form>

            <div className="flex justify-center items-center gap-1 text-sm text-[#475467]">
                <p>As-tu déjà un compte ?</p> <Link href="/auth/signin"
                                                    className="font-bold text-[#2970FF] cursor-pointer hover:underline">Connecte
                toi</Link>
            </div>
        </div>
    );
};

export default SignUpForm;