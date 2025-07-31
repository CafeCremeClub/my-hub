"use client";

import React, {useState} from 'react';
import SignUpForm from "@/components/auth/signup/SignUpForm";
import SignUpOtp from "@/components/auth/signup/SignUpOtp";

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
                <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
                    <p>You can now log in to your account.</p>
                </div>
            );
        default:
            return null;
    }
};

export default SignUpPageContent;