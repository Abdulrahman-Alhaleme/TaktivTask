import React from 'react';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SelectInput = ({ options }) => {
    return (
        <div className="py-[10px] px-4 sm:w-[272px] w-[343px] border rounded-lg gap-[10px] h-[64px]">
            <label htmlFor="mySelect" className="text-[14px] ">
                Rating
            </label>
            <Select
                id="mySelect"
                name="subject"
                className="w-full text-[15px] "
                defaultValue="all"
                sx={{
                    "&:hover": {
                        all: "unset"
                    }
                }}
            >
                <MenuItem value="all" >All Ratings</MenuItem>
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        <Rating name="read-only" value={parseInt(option.value)} readOnly />
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};

export default SelectInput;
