import React from 'react';


interface FRIconProps {
    width?: number;
    height?: number;
    className?: string;
}

const FRIcon = ({
                    width = 20,
                    height = 20,
                    className = ""
                }: FRIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            preserveAspectRatio="xMidYMid meet" // This helps with scaling
            style={{width, height}} // Explicit inline style overrides
        >
            <g clipPath="url(#clip0_51_27494)">
                <path
                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                    fill="#F0F0F0"/>
                <path
                    d="M20 9.99996C20 5.70031 17.2863 2.03488 13.4783 0.621948V19.378C17.2863 17.965 20 14.2996 20 9.99996Z"
                    fill="#D80027"/>
                <path
                    d="M0.000244141 10.0007C0.000244141 14.3003 2.71403 17.9658 6.522 19.3787V0.622681C2.71403 2.03561 0.000244141 5.70104 0.000244141 10.0007Z"
                    fill="#0052B4"/>
            </g>
            <defs>
                <clipPath id="clip0_51_27494">
                    <rect width={width} height={height} fill="white"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default FRIcon;