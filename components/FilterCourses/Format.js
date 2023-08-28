import React from 'react';

const SelectInput = ({ options }) => {
    return (
        <div className="py-[10px] px-4 sm:w-[272px] w-[343px] sm:h-[64px]  border rounded-lg    ">
            <label htmlFor="mySelect" className="sm:text-custom-sm text-[12px] text-grayscale_1 font-medium">
                All Formats
            </label>
            <select
                id="mySelect"
                name="subject"
                className="w-full sm:text-custom-base text-custom-xs"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
