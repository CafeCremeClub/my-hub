"use client";

import React, {useState, useEffect} from "react";
import {cn} from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {Input} from "@/components/ui/input";

interface DropdownItem<T = unknown> {
    key: string;
    label: string;
    value: T;
}

interface CustomSelectWithDropDownProps<T = unknown> {
    placeholder?: string;
    isError?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    items: DropdownItem<T>[];
    disabled?: boolean;
}

const CustomSelectWithDropDown = <T = unknown, >({
                                                     placeholder = "Select an item...",
                                                     isError = false,
                                                     value = "",
                                                     onChange,
                                                     onBlur,
                                                     items,
                                                     disabled = false,
                                                     ...props
                                                 }: CustomSelectWithDropDownProps<T> & Omit<React.ComponentProps<"div">, keyof CustomSelectWithDropDownProps<T>>) => {
    const [selectedValue, setSelectedValue] = useState<string>(value);
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    // Sync internal state with external value
    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    const handleSelectValue = (selectedKey: string) => {
        setSelectedValue(selectedKey);
        onChange?.(selectedKey);
        setIsOpen(false);
        setSearchQuery("");
    };

    // Filter items based on search query
    const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.key.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Find the selected item to display its label
    const selectedItem = items.find(item => item.value === selectedValue);

    return (
        <div className="w-full" {...props}>
            <div
                className={cn(
                    "flex items-center min-h-[2.75rem] px-3.5 bg-white rounded-[0.5rem] shadow-sm shadow-[#1018280D]",
                    isError
                        ? "border border-[#DF1C41] focus:border-[#DF1C41]"
                        : "border border-[#D0D5DD] focus:border focus:!border-gray-400",
                    disabled && "opacity-50 cursor-not-allowed"
                )}
            >
                <Select
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    onValueChange={handleSelectValue}
                    value={selectedValue}
                    disabled={disabled}
                >
                    <SelectTrigger
                        className="!border-none shadow-none p-0 h-auto w-full bg-transparent !ring-0 focus:ring-0 focus:ring-offset-0"
                        onBlur={onBlur}
                    >
                        <SelectValue
                            placeholder={placeholder}
                            className={cn(
                                "text-sm",
                                selectedItem ? "text-[#1B55F5]" : "text-[#667085]"
                            )}
                        >
                            {selectedItem ? selectedItem.label : placeholder}
                        </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="p-0">
                        <div className="p-2 border-b">
                            <Input
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="h-8 text-sm"
                                autoFocus
                                onKeyDown={(e) => {
                                    // Prevent the Select from closing when typing in search
                                    e.stopPropagation();
                                }}
                                onFocus={(e) => {
                                    // Prevent the Select from handling focus events from search input
                                    e.stopPropagation();
                                }}
                                onBlur={(e) => {
                                    // Prevent the Select from handling blur events from search input
                                    e.stopPropagation();
                                }}
                            />
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                            {filteredItems.length === 0 ? (
                                <div className="p-2 text-sm text-gray-500 text-center">
                                    No items found
                                </div>
                            ) : (
                                filteredItems.map((item) => (
                                    <SelectItem key={item.key} value={item.value as string}>
                                        {item.label}
                                    </SelectItem>
                                ))
                            )}
                        </div>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default CustomSelectWithDropDown;
