import React, { useState } from 'react';
import Select from "react-select";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Slider } from "@mui/base";

const SelectInput = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const customStyles = {
        control: provided => ({
            ...provided,
            border: "none",
            boxShadow: "none",
            marginTop: 0,
            backgroundColor: "transparent",
        }),
        dropdownIndicator: provided => ({
            ...provided,
            display: "none",
        }),
        indicatorSeparator: () => ({
            display: "none",
        }),
        menu: provided => ({
            ...provided,
            marginTop: 0,
            width: 248,
        }),
        menuPortal: base => ({
            ...base,
            maxWidth: '100%',
        }),
        menuList: base => ({
            ...base,
            padding: 0,
        }),
    };

    const CustomOption = (props) => {
        return (
            <div>
                <div className="flex items-center justify-between">
                    <label className="ml-[10px] text-custom-sm text-grayscale_1 font-medium">Price</label>
                    <Slider
                        value={50}
                        onChange={(event, value) => console.log(value)}
                    />
                </div>
                <Select.Option {...props} />
            </div>
        );
    };

    return (
        <div className='sm:w-[272px] w-[343px] h-16 border flex-row border-grayscale_4 px-4 py-1 flex gap-[10px] rounded-lg' onClick={toggleDropdown}>
            <div className='sm:w-[206px] w-[277px] h-[47px] flex flex-col'>
                <label className='ml-[10px] text-custom-sm text-grayscale_1 font-medium'>Price</label>
                <Select
                    className='text-custom-base'
                    styles={customStyles}
                    placeholder="Select Price"
                    isSearchable={false}
                    menuIsOpen={isDropdownOpen}
                    components={{ Option: CustomOption }}
                />
            </div>
            <div className='flex items-center text-grayscale_3'>
                <RiArrowDropDownLine className='h-6 w-6' />
            </div>
        </div>
    );
}

export default SelectInput;