import React from 'react';
import CustomInput from "@/components/custom/CustomInput";
import CustomButton from "@/components/custom/CustomButton";

const SignInForm = () => {
    return (
        <form
            className="w-full flex flex-col gap-8"
        >
            <div className="flex flex-col gap-3">
                <p
                    className="bricolage-grotesque font-semibold text-[#101828] text-3xl"
                >
                    Bienvenue sur MyHub
                </p>
                <p className="text-[#475467]">
                    Connecte-toi pour accéder aux meilleures opportunités de mission.
                </p>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="email"
                            className="text-sm text-[#344054]"
                        >
                            Adresse e-mail
                        </label>
                        <CustomInput
                            id="email"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label
                            htmlFor="password"
                            className="text-sm text-[#344054]"
                        >
                            Mot de passe
                        </label>
                        <CustomInput
                            id="password"
                            name="password"
                            type="password"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="remember-me"
                            name="remember-me"
                            className="size-3.5"
                        />
                        <p className="font-medium text-sm text-[#344054]">
                            Rester connecté
                        </p>
                    </div>
                    <p
                        className="text-sm text-[#2970FF] font-semibold cursor-pointer hover:underline"
                    >Mot de passe oublié</p>
                </div>

                <CustomButton
                    className="bricolage-grotesque font-semibold"
                >
                    Se connecter
                </CustomButton>
            </div>

            <div className="flex justify-center items-center gap-1 text-sm text-[#475467]">
                <p>Pas de compte ?</p> <b className="text-[#2970FF] cursor-pointer hover:underline">Inscris-toi</b>
            </div>
        </form>
    );
};

export default SignInForm;