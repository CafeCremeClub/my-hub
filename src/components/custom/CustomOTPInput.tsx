import React from 'react';
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp";

interface CustomOTPInputProps {
    value: string;
    onChange: (value: string) => void;
    maxLength?: number;
}

const CustomOtpInput = ({value, onChange, maxLength = 6}: CustomOTPInputProps) => {
    return (
        <InputOTP
            maxLength={maxLength}
            value={value}
            onChange={onChange}
        >
            <InputOTPGroup>
                <InputOTPSlot index={0}/>
                <InputOTPSlot index={1}/>
                <InputOTPSlot index={2}/>
            </InputOTPGroup>
            <InputOTPSeparator/>
            <InputOTPGroup>
                <InputOTPSlot index={3}/>
                <InputOTPSlot index={4}/>
                <InputOTPSlot index={5}/>
            </InputOTPGroup>
        </InputOTP>
    );
};

export default CustomOtpInput;