"use client";

import React, {useState} from 'react';
import SignUpForm from "@/components/auth/signup/SignUpForm";
import SignUpOtp from "@/components/auth/signup/SignUpOtp";
import SignUpSuccess from "@/components/auth/signup/SignUpSuccess";

const SignUpPageContent = () => {

    const [step, setStep] = useState<"email" | "otp" | "success">("email");

    switch (step) {
        case "email":
            return (
                <SignUpForm
                    onNext={() => setStep("otp")}
                />
            );
        case "otp":
            return (
                <SignUpOtp
                    onNext={() => setStep("success")}
                />
            );
        case "success":
            return (
                <SignUpSuccess/>
            );
        default:
            return null;
    }
};

export default SignUpPageContent;