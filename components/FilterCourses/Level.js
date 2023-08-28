import React from 'react';

const SelectInput = ({ options }) => {
    return (
        <div className="py-[10px] px-4 sm:w-[272px] w-[343px] h-[64px] border rounded-lg gap-[10px]">
            <label htmlFor="mySelect" className="text-[14px] text-grayscale_1 font-medium">
                Level
            </label>
            <select
                id="mySelect"
                name="subject"
                className="w-full text-[15px]"
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
