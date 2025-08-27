"use client";

import React, {useState} from 'react';
import SignUpForm from "@/components/auth/signup/SignUpForm";
import SignUpOtp from "@/components/auth/signup/SignUpOtp";
import SignUpSuccess from "@/components/auth/signup/SignUpSuccess";
import {SignUpResponse} from "@/types/auth/SignUpResponse";

const SignUpPageContent = () => {

    const [step, setStep] = useState<"email" | "otp" | "success">("email");
    const [email, setEmail] = useState<string | null>(null);
    const [response, setResponse] = useState<SignUpResponse | null>(null);

    switch (step) {
        case "email":
            return (
                <SignUpForm
                    onNext={(email: string) => {
                        setEmail(email);
                        setStep("otp")
                    }}
                />
            );
        case "otp":
            return (
                email ?
                    <SignUpOtp
                        onNext={(response) => {
                            setResponse(response);
                            setStep("success")
                        }}
                        email={email}
                    /> : null
            );
        case "success":
            return (
                response ?
                    <SignUpSuccess
                        signupResponse={response}
                    /> : null
            );
        default:
            return null;
    }
};

export default SignUpPageContent;