import React, { useState } from 'react';
import SelectSubject from './FilterTutor/subject';
import SelectLevel from './FilterTutor/Level';
import SelectGender from './FilterTutor/Gender';
import SelectLanguage from './FilterTutor/Language';
import SelectFormat from './FilterTutor/Format';
import SelectPrice from './FilterTutor/Price';
import SelectAvailability from './FilterTutor/Availability';
import SelectRating from './FilterTutor/Rating';
import SelectAssignments from './FilterTutor/Assignments';
import Search from './FilterTutor/Search';
import Button from './FilterTutor/button';



const subjectOptions = [
    { value: 'all', label: 'All' },
    { value: 'accounting', label: 'Accounting' },
    { value: 'business', label: 'Business' },
    { value: 'design & Technology Standard', label: 'Design & Technology Standard' },
    { value: 'english first language', label: 'English first language' },
    { value: 'math', label: 'Math' },
];

const levelOptions = [
    { value: "all Levels", label: "All Levels" },
    { value: "aCT", label: "ACT" },
    { value: "ap", label: "AP" },
    { value: "sat", label: "SAT" },
    { value: "international Baccalaurette", label: "International Baccalaurette" }
]

const GenderOptions = [
    { value: "all Levels", label: "All Gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },

]

const languageOptions = [
    { value: "english", label: "English" },
    { value: "arabic", label: "Arabic" }
]
const FormatOptions = [
    { value: "all formats", label: "All Formats" },
    { value: "individual Lessons", label: "Individual Lessons" },
    { value: "Group Lessons", label: "Group Lessons" }
]

const PriceOptions = [
    { value: "jOD 20 - JOD 70 / Hr", label: "JOD 20 - JOD 70 / Hr" },

]

const AvailabilityOptions = [
    { value: "all Availability", label: "All Availability" },

]

const RatingOptions = [
    { value: "5" },
    { value: "4" },
    { value: "3" },
    { value: "2" },
    { value: "1" },

]



const ParentComponent = () => {






    const [filtersVisible, setFiltersVisible] = useState(false);
    const [FilterButtonVisible, setFilterButtonVisible] = useState(false);

    const toggleFilterButton = () => {
        setFilterButtonVisible(!FilterButtonVisible);
    };


    const toggleFilters = () => {
        setFiltersVisible(prevVisible => !prevVisible);

    }
    return (
        <div>
            <button onClick={toggleFilterButton} className='sm:hidden flex  flex-row h-12 w-[167px] gap-3 p-4 bg-white border border-grayscale_5 font-custom-medium text-custom-base text-[#080234] rounded-lg justify-start items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 5H10M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M3 12H12M19 12H21M19 12C19 13.1046 18.1046 14 17 14C15.8954 14 15 13.1046 15 12C15 10.8954 15.8954 10 17 10C18.1046 10 19 10.8954 19 12ZM14 5H21M12 19H21M3 19H5M5 19C5 20.1046 5.89543 21 7 21C8.10457 21 9 20.1046 9 19C9 17.8954 8.10457 17 7 17C5.89543 17 5 17.8954 5 19Z" stroke="#75748B" stroke-width="2" stroke-linecap="round" />
                </svg>
                Filters
            </button>

            <div className="sm:inline-flex hidden p-4  flex-col items-start gap-4 border rounded-lg bg-primary_4">
                <div className={`flex flex-row gap-3 items-start`}>
                    <SelectSubject options={subjectOptions} />
                    <SelectLevel options={levelOptions} />
                    <SelectPrice options={PriceOptions} />
                    <SelectLanguage options={languageOptions} />
                    <Button />
                </div>
                <div className={`flex flex-row gap-3 items-start ${filtersVisible ? '' : 'hidden'}`}>
                    <SelectGender options={GenderOptions} />
                    <SelectAvailability options={AvailabilityOptions} />
                    <SelectFormat options={FormatOptions} />
                    <SelectRating options={RatingOptions} />
                </div>
                <div className={`flex flex-row gap-3 items-start ${filtersVisible ? '' : 'hidden'}`}>
                    <SelectAssignments />
                    <Search />
                </div>
                <span className="font-medium text-primary_1 text-[15px] cursor-pointer" onClick={toggleFilters}>
                    {filtersVisible ? 'Hide Filters' : 'More Filters'}
                </span>
            </div>



            <div className={`sm:hidden inline-flex p-4 w-[375px]  flex-col items-center gap-4 border rounded-lg bg-primary_4  transition-transform ease-in-out duration-300 ${FilterButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <div className={`flex flex-col gap-3 items-center w-full `}>
                    <SelectSubject options={subjectOptions} />
                    <SelectLevel options={levelOptions} />
                    <SelectPrice options={PriceOptions} />
                    <SelectLanguage options={languageOptions} />
                </div>
                <div className={`flex flex-col gap-3 items-start ${filtersVisible ? '' : 'hidden'}`}>
                    <SelectGender options={GenderOptions} />
                    <SelectAvailability options={AvailabilityOptions} />
                    <SelectFormat options={FormatOptions} />
                    <SelectRating options={RatingOptions} />
                    <SelectAssignments />
                    <Search />
                </div>

                <Button />
                <span className="font-medium text-primary_1 text-[15px] cursor-pointer" onClick={toggleFilters}>
                    {filtersVisible ? 'Hide Filters' : 'More Filters'}
                </span>
            </div>
        </div>
    );
};

export default ParentComponent;
