"use client";

import React, {useState, KeyboardEvent} from "react";


interface CustomTagInputProps {
    maxItems?: number;
    placeholder?: string;
}

const CustomTagInput = ({
                            maxItems = 3,
                            placeholder
                        }: CustomTagInputProps & React.ComponentProps<"input">) => {

    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            e.preventDefault();
            if (tags.length < maxItems && !tags.includes(inputValue.trim())) {
                setTags([...tags, inputValue.trim()]);
            }
            setInputValue("");
        }
    };

    const removeTag = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
    };


    return (
        <div className="w-full">
            <div
                className="flex flex-wrap items-center gap-2 border border-[#D0D5DD] rounded-lg px-2 py-2 bg-white shadow-sm shadow-[#1018280D]"
            >
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-white border border-[#D0D5DD] rounded-[0.375rem] px-1 py-0.5 text-sm"
                    >
                        {tag}
                        <button
                            type="button"
                            onClick={() => removeTag(index)}
                            className="ml-2 text-[#98A2B3] hover:text-gray-700 cursor-pointer text-xs"
                        >
                            ✕
                        </button>
                    </div>
                ))}

                {tags.length < maxItems && (
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                        className="flex-1 min-w-[120px] outline-none border-none text-sm text-gray-700 placeholder-gray-400"
                    />
                )}
            </div>
            <p className="text-sm text-[#475467] mt-1">{maxItems} secteurs maximum</p>
        </div>
    );
};

export default CustomTagInput;