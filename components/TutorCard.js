import React from 'react';
import TutorImage from '../Rectangle.jpg';
import Image from 'next/image';

const tutorsData = [
    {
        id: 1,
        name: "Bessie Cooper",
        university: "University College London (UCL)",
        reviews: 12,
        imageSrc: TutorImage,
        subjects: [" Math,", " Algebra,", " Geometry"],
        languages: ["English"],
        hourlyPrice: "JOD 50/Hr",
        services: ["Assignment help", "15 min Free Session"],
        bio: `Hi! My name is Rawan and I'm a fourth-year medical student at University
        College London (UCL) with an intercalated degree in Paediatrics and Child Health
        also from UCL. Biology, Chemistry...`,
    },

];


export default function MyComponent() {
    return (
        <>
            {
                tutorsData.map((tutor) => (
                    <>
                        {/* start large screen tutor card */}
                        <div key={tutor.id} className='lg:w-[975px] md:w-[700px] pt-4 pr-6 pb-6 pl-4 sm:flex hidden items-start rounded-lg border bg-primary_4'>
                            {/* start img and name and university and rating for tutor  */}
                            <div className='flex flex-row gap-6'>
                                <div className='relative'>
                                    <svg className='absolute top-2 right-2 ' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle id="Ellipse 609" cx="8" cy="8" r="7" fill="#26B44E" stroke="white" stroke-width="2" />
                                    </svg>

                                    <Image
                                        src={tutor.imageSrc}

                                        alt="Picture of the author"
                                        className='lg:w-[180px] lg:h-[180px] md:h-[150px] md:w-[150px] rounded-lg'
                                    />
                                </div>
                                <div className='flex flex-col gap-6 lg:w-[501] md:w-[300]'>

                                    <div className='flex flex-row justify-between   h-[53px] '>
                                        <div className=''>
                                            <h1 className='font-custom-semi-bold text-grayscale_1 text-custom-2xl'>{tutor.name}</h1>
                                            <p className='font-custom-semi-bold text-grayscale_3 text-custom-base'>{tutor.university}</p>
                                        </div>
                                        <div className='flex flex-row gap-3 items-start'>
                                            <div className='flex flex-row '>

                                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Vector" d="M9.25272 0.514154C9.5584 -0.105217 10.4416 -0.105216 10.7473 0.514155L12.8964 4.86874C13.0178 5.11464 13.2523 5.2851 13.5237 5.32458L18.3289 6.02386C19.0125 6.12333 19.2852 6.96341 18.7905 7.4454L15.3122 10.834C15.1156 11.0255 15.0259 11.3016 15.0724 11.5721L15.8944 16.3556C16.0114 17.0364 15.2969 17.5558 14.6854 17.2344L10.3877 14.9754C10.145 14.8478 9.85501 14.8478 9.61228 14.9754L5.31459 17.2344C4.70313 17.5558 3.98858 17.0364 4.10557 16.3556L4.92759 11.5721C4.97407 11.3016 4.88439 11.0255 4.68781 10.834L1.20954 7.44541C0.714797 6.96341 0.987532 6.12333 1.67105 6.02386L6.47633 5.32458C6.74768 5.2851 6.98225 5.11464 7.1036 4.86874L9.25272 0.514154Z" fill="#FFC149" />
                                                </svg>

                                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Vector" d="M9.25272 0.514154C9.5584 -0.105217 10.4416 -0.105216 10.7473 0.514155L12.8964 4.86874C13.0178 5.11464 13.2523 5.2851 13.5237 5.32458L18.3289 6.02386C19.0125 6.12333 19.2852 6.96341 18.7905 7.4454L15.3122 10.834C15.1156 11.0255 15.0259 11.3016 15.0724 11.5721L15.8944 16.3556C16.0114 17.0364 15.2969 17.5558 14.6854 17.2344L10.3877 14.9754C10.145 14.8478 9.85501 14.8478 9.61228 14.9754L5.31459 17.2344C4.70313 17.5558 3.98858 17.0364 4.10557 16.3556L4.92759 11.5721C4.97407 11.3016 4.88439 11.0255 4.68781 10.834L1.20954 7.44541C0.714797 6.96341 0.987532 6.12333 1.67105 6.02386L6.47633 5.32458C6.74768 5.2851 6.98225 5.11464 7.1036 4.86874L9.25272 0.514154Z" fill="#FFC149" />
                                                </svg>

                                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Vector" d="M9.25272 0.514154C9.5584 -0.105217 10.4416 -0.105216 10.7473 0.514155L12.8964 4.86874C13.0178 5.11464 13.2523 5.2851 13.5237 5.32458L18.3289 6.02386C19.0125 6.12333 19.2852 6.96341 18.7905 7.4454L15.3122 10.834C15.1156 11.0255 15.0259 11.3016 15.0724 11.5721L15.8944 16.3556C16.0114 17.0364 15.2969 17.5558 14.6854 17.2344L10.3877 14.9754C10.145 14.8478 9.85501 14.8478 9.61228 14.9754L5.31459 17.2344C4.70313 17.5558 3.98858 17.0364 4.10557 16.3556L4.92759 11.5721C4.97407 11.3016 4.88439 11.0255 4.68781 10.834L1.20954 7.44541C0.714797 6.96341 0.987532 6.12333 1.67105 6.02386L6.47633 5.32458C6.74768 5.2851 6.98225 5.11464 7.1036 4.86874L9.25272 0.514154Z" fill="#FFC149" />
                                                </svg>

                                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Vector" d="M9.25272 0.514154C9.5584 -0.105217 10.4416 -0.105216 10.7473 0.514155L12.8964 4.86874C13.0178 5.11464 13.2523 5.2851 13.5237 5.32458L18.3289 6.02386C19.0125 6.12333 19.2852 6.96341 18.7905 7.4454L15.3122 10.834C15.1156 11.0255 15.0259 11.3016 15.0724 11.5721L15.8944 16.3556C16.0114 17.0364 15.2969 17.5558 14.6854 17.2344L10.3877 14.9754C10.145 14.8478 9.85501 14.8478 9.61228 14.9754L5.31459 17.2344C4.70313 17.5558 3.98858 17.0364 4.10557 16.3556L4.92759 11.5721C4.97407 11.3016 4.88439 11.0255 4.68781 10.834L1.20954 7.44541C0.714797 6.96341 0.987532 6.12333 1.67105 6.02386L6.47633 5.32458C6.74768 5.2851 6.98225 5.11464 7.1036 4.86874L9.25272 0.514154Z" fill="#FFC149" />
                                                </svg>

                                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path id="Vector" d="M9.25272 0.514154C9.5584 -0.105217 10.4416 -0.105216 10.7473 0.514155L12.8964 4.86874C13.0178 5.11464 13.2523 5.2851 13.5237 5.32458L18.3289 6.02386C19.0125 6.12333 19.2852 6.96341 18.7905 7.4454L15.3122 10.834C15.1156 11.0255 15.0259 11.3016 15.0724 11.5721L15.8944 16.3556C16.0114 17.0364 15.2969 17.5558 14.6854 17.2344L10.3877 14.9754C10.145 14.8478 9.85501 14.8478 9.61228 14.9754L5.31459 17.2344C4.70313 17.5558 3.98858 17.0364 4.10557 16.3556L4.92759 11.5721C4.97407 11.3016 4.88439 11.0255 4.68781 10.834L1.20954 7.44541C0.714797 6.96341 0.987532 6.12333 1.67105 6.02386L6.47633 5.32458C6.74768 5.2851 6.98225 5.11464 7.1036 4.86874L9.25272 0.514154Z" fill="#FFC149" />
                                                </svg>
                                            </div>
                                            <p className='text-custom-sm font-custom-regular leading-custom-20 text-grayscale_3 mt-1'>12 reviews</p>

                                        </div>
                                        {/* end img and name and university for tutor */}

                                        {/* start bio and subject and languages */}
                                    </div>
                                    <div className=''>
                                        <p className='text-custom-base text-grayscale_2 leading-5'>{tutor.bio}</p>
                                    </div>
                                    <div className=''>
                                        <p className='text-grayscale_3 font-custom-semi-bold leading-5 text-custom-sm'>Subjects:<span className='text-custom-sm font-custom-regular leading-5'>  {tutor.subjects}</span></p>
                                        <p className='text-grayscale_3 font-custom-semi-bold leading-5 text-custom-sm'>Languages:<span className='text-custom-sm font-custom-regular leading-5'> {tutor.languages}</span></p>
                                    </div>

                                    {/* end bio and subject and languages */}

                                    {/* start price of hour and services */}

                                </div>
                                <div className='w-[1px] h-[201px] bg-[#d9d9d9]'></div>
                                <div className='gap-[61px] flex flex-col'>
                                    <div className='flex justify-start flex-col gap-3'>
                                        <p className='text-custom-3xl font-custom-semi-bold text-grayscale_1 leading-8'>{tutor.hourlyPrice}</p>
                                        <div className='flex flex-col gap-2'>
                                            <div className='flex flex-row gap-2'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="Icons">
                                                        <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.592 9.46049C16.8463 9.13353 16.7874 8.66232 16.4605 8.40802C16.1335 8.15372 15.6623 8.21262 15.408 8.53958L11.401 13.6914C11.3119 13.806 11.1443 13.8209 11.0364 13.7238L8.50173 11.4426C8.19385 11.1655 7.71963 11.1904 7.44254 11.4983C7.16544 11.8062 7.1904 12.2804 7.49828 12.5575L10.033 14.8387C10.7881 15.5183 11.9613 15.4143 12.585 14.6123L16.592 9.46049Z" fill="#26B44E" />
                                                    </g>
                                                </svg>

                                                <p className='text-custom-sm font-custom-medium leading-5 text-grayscale_3'>{tutor.services[0]}</p>
                                            </div>

                                            <div className='flex flex-row gap-2'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="Icons">
                                                        <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.592 9.46049C16.8463 9.13353 16.7874 8.66232 16.4605 8.40802C16.1335 8.15372 15.6623 8.21262 15.408 8.53958L11.401 13.6914C11.3119 13.806 11.1443 13.8209 11.0364 13.7238L8.50173 11.4426C8.19385 11.1655 7.71963 11.1904 7.44254 11.4983C7.16544 11.8062 7.1904 12.2804 7.49828 12.5575L10.033 14.8387C10.7881 15.5183 11.9613 15.4143 12.585 14.6123L16.592 9.46049Z" fill="#26B44E" />
                                                    </g>
                                                </svg>

                                                <p className='text-custom-sm font-custom-medium leading-5 text-grayscale_3'>{tutor.services[1]} </p>
                                            </div>
                                        </div>

                                    </div>
                                    {/* end price of hour and services */}

                                    <div>
                                        <button className='text-primary_1 bg-primary_2 w-[181px] h-10 flex justify-center items-center rounded-lg'>View Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end large screen tutor card */}








                        {/* start small screen tutor card */}
                        <div className='sm:hidden flex p-4 border bg-primary_4 w-[343px] min-h-[493px] rounded-lg'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-row gap-4'>
                                    {/* start Img */}
                                    <div className='relative'>
                                        <svg className='absolute top-2 right-2 ' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 609" cx="8" cy="8" r="7" fill="#26B44E" stroke="white" stroke-width="2" />
                                        </svg>

                                        <Image
                                            src={tutor.imageSrc}

                                            alt="Picture of the author"
                                            className='h-32 w-32 rounded-xl'
                                        />
                                    </div>
                                    {/* end img */}

                                    <div className='flex flex-col gap-3'>

                                        {/*start Name and university */}
                                        <div>
                                            <h1 className='font-custom-semi-bold text-grayscale_1 text-custom-lg'>{tutor.name}</h1>
                                            <p className='font-custom-semi-bold text-grayscale_3 text-custom-xs'>{tutor.university}</p>
                                        </div>
                                        {/*end Name and university */}

                                        {/* start rating */}
                                        <div className='flex flex-row '>

                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id="Vector" d="M9.25272 0.514154C9.5584 -0.105217 10.4416 -0.105216 10.7473 0.514155L12.8964 4.86874C13.0178 5.11464 13.2523 5.2851 13.5237 5.32458L18.3289 6.02386C19.0125 6.12333 19.2852 6.96341 18.7905 7.4454L15.3122 10.834C15.1156 11.0255 15.0259 11.3016 15.0724 11.5721L15.8944 16.3556C16.0114 17.0364 15.2969 17.5558 14.6854 17.2344L10.3877 14.9754C10.145 14.8478 9.85501 14.8478 9.61228 14.9754L5.31459 17.2344C4.70313 17.5558 3.98858 17.0364 4.10557 16.3556L4.92759 11.5721C4.97407 11.3016 4.88439 11.0255 4.68781 10.834L1.20954 7.44541C0.714797 6.96341 0.987532 6.12333 1.67105 6.02386L6.47633 5.32458C6.74768 5.2851 6.98225 5.11464 7.1036 4.86874L9.25272 0.514154Z" fill="#FFC149" />
                                            </svg>

                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id="Vector" d="M9.25272 0.514154C9.5584 -0.105217 10.4416 -0.105216 10.7473 0.514155L12.8964 4.86874C13.0178 5.11464 13.2523 5.2851 13.5237 5.32458L18.3289 6.02386C19.0125 6.12333 19.2852 6.96341 18.7905 7.4454L15.3122 10.834C15.1156 11.0255 15.0259 11.3016 15.0724 11.5721L15.8944 16.3556C16.0114 17.0364 15.2969 17.5558 14.6854 17.2344L10.3877 14.9754C10.145 14.8478 9.85501 14.8478 9.61228 14.9754L5.31459 17.2344C4.70313 17.5558 3.98858 17.0364 4.10557 16.3556L4.92759 11.5721C4.97407 11.3016 4.88439 11.0255 4.68781 10.834L1.20954 7.44541C0.714797 6.96341 0.987532 6.12333 1.67105 6.02386L6.47633 5.32458C6.74768 5.2851 6.98225 5.11464 7.1036 4.86874L9.25272 0.514154Z" fill="#FFC149" />
                                            </svg>

                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id="Vector" d="M9.25272 0.514154C9.5584 -0.105217 10.4416 -0.105216 10.7473 0.514155L12.8964 4.86874C13.0178 5.11464 13.2523 5.2851 13.5237 5.32458L18.3289 6.02386C19.0125 6.12333 19.2852 6.96341 18.7905 7.4454L15.3122 10.834C15.1156 11.0255 15.0259 11.3016 15.0724 11.5721L15.8944 16.3556C16.0114 17.0364 15.2969 17.5558 14.6854 17.2344L10.3877 14.9754C10.145 14.8478 9.85501 14.8478 9.61228 14.9754L5.31459 17.2344C4.70313 17.5558 3.98858 17.0364 4.10557 16.3556L4.92759 11.5721C4.97407 11.3016 4.88439 11.0255 4.68781 10.834L1.20954 7.44541C0.714797 6.96341 0.987532 6.12333 1.67105 6.02386L6.47633 5.32458C6.74768 5.2851 6.98225 5.11464 7.1036 4.86874L9.25272 0.514154Z" fill="#FFC149" />
                                            </svg>

                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id="Vector" d="M9.25272 0.514154C9.5584 -0.105217 10.4416 -0.105216 10.7473 0.514155L12.8964 4.86874C13.0178 5.11464 13.2523 5.2851 13.5237 5.32458L18.3289 6.02386C19.0125 6.12333 19.2852 6.96341 18.7905 7.4454L15.3122 10.834C15.1156 11.0255 15.0259 11.3016 15.0724 11.5721L15.8944 16.3556C16.0114 17.0364 15.2969 17.5558 14.6854 17.2344L10.3877 14.9754C10.145 14.8478 9.85501 14.8478 9.61228 14.9754L5.31459 17.2344C4.70313 17.5558 3.98858 17.0364 4.10557 16.3556L4.92759 11.5721C4.97407 11.3016 4.88439 11.0255 4.68781 10.834L1.20954 7.44541C0.714797 6.96341 0.987532 6.12333 1.67105 6.02386L6.47633 5.32458C6.74768 5.2851 6.98225 5.11464 7.1036 4.86874L9.25272 0.514154Z" fill="#FFC149" />
                                            </svg>

                                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id="Vector" d="M9.25272 0.514154C9.5584 -0.105217 10.4416 -0.105216 10.7473 0.514155L12.8964 4.86874C13.0178 5.11464 13.2523 5.2851 13.5237 5.32458L18.3289 6.02386C19.0125 6.12333 19.2852 6.96341 18.7905 7.4454L15.3122 10.834C15.1156 11.0255 15.0259 11.3016 15.0724 11.5721L15.8944 16.3556C16.0114 17.0364 15.2969 17.5558 14.6854 17.2344L10.3877 14.9754C10.145 14.8478 9.85501 14.8478 9.61228 14.9754L5.31459 17.2344C4.70313 17.5558 3.98858 17.0364 4.10557 16.3556L4.92759 11.5721C4.97407 11.3016 4.88439 11.0255 4.68781 10.834L1.20954 7.44541C0.714797 6.96341 0.987532 6.12333 1.67105 6.02386L6.47633 5.32458C6.74768 5.2851 6.98225 5.11464 7.1036 4.86874L9.25272 0.514154Z" fill="#FFC149" />
                                            </svg>
                                        </div>
                                        <p className='text-custom-sm font-custom-regular leading-custom-20 text-grayscale_3 mt-1'>12 reviews</p>


                                        {/* end rating */}

                                    </div>
                                </div>

                                <div className='flex flex-col gap-4 '>
                                    {/* start bio */}
                                    <div>
                                        <p className='text-custom-sm font-custom-regular text-grayscale_2 leading-5'>{tutor.bio}</p>
                                    </div>
                                    {/* end bio */}

                                    {/* start subject and lang */}
                                    <div>
                                        <p className='text-grayscale_3 font-custom-semi-bold leading-5 text-custom-sm'>Subjects:<span className='text-custom-sm font-custom-regular leading-5'>  {tutor.subjects}</span></p>
                                        <p className='text-grayscale_3 font-custom-semi-bold leading-5 text-custom-sm'>Languages:<span className='text-custom-sm font-custom-regular leading-5'> {tutor.languages}</span></p>
                                    </div>
                                    {/* end subject and lang */}

                                </div>

                                {/* this is the line in the middle of card */}
                                <div className=' h-[1px] w-[311px]  bg-grayscale_5'></div>

                                <div className='flex flex-col gap-4'>
                                    {/* start hourly Price & services */}
                                    <div className='flex justify-start flex-col gap-3'>
                                        <p className='text-custom-3xl font-custom-semi-bold text-grayscale_1 leading-8'>{tutor.hourlyPrice}</p>
                                        <div className='flex flex-col gap-2'>
                                            <div className='flex flex-row gap-2'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="Icons">
                                                        <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.592 9.46049C16.8463 9.13353 16.7874 8.66232 16.4605 8.40802C16.1335 8.15372 15.6623 8.21262 15.408 8.53958L11.401 13.6914C11.3119 13.806 11.1443 13.8209 11.0364 13.7238L8.50173 11.4426C8.19385 11.1655 7.71963 11.1904 7.44254 11.4983C7.16544 11.8062 7.1904 12.2804 7.49828 12.5575L10.033 14.8387C10.7881 15.5183 11.9613 15.4143 12.585 14.6123L16.592 9.46049Z" fill="#26B44E" />
                                                    </g>
                                                </svg>

                                                <p className='text-custom-sm font-custom-medium leading-5 text-grayscale_3'>{tutor.services[0]}</p>
                                            </div>

                                            <div className='flex flex-row gap-2'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="Icons">
                                                        <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.592 9.46049C16.8463 9.13353 16.7874 8.66232 16.4605 8.40802C16.1335 8.15372 15.6623 8.21262 15.408 8.53958L11.401 13.6914C11.3119 13.806 11.1443 13.8209 11.0364 13.7238L8.50173 11.4426C8.19385 11.1655 7.71963 11.1904 7.44254 11.4983C7.16544 11.8062 7.1904 12.2804 7.49828 12.5575L10.033 14.8387C10.7881 15.5183 11.9613 15.4143 12.585 14.6123L16.592 9.46049Z" fill="#26B44E" />
                                                    </g>
                                                </svg>

                                                <p className='text-custom-sm font-custom-medium leading-5 text-grayscale_3'>{tutor.services[1]} </p>
                                            </div>
                                        </div>

                                    </div>
                                    {/* end hourly Price & services */}

                                    <div>
                                        <button className='text-primary_1 bg-primary_2 w-[181px] h-10 flex justify-center items-center rounded-lg'>View Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end small screen tutor card */}

                    </>
                )
                )
            }
        </>
    );
}