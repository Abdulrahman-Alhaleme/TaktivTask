import React from 'react';
import CoursesImage from '../coursesimg.png';
import TutorImage from '../Tutorimg.png';
import Image from 'next/image';

const coursesData = [
    {
        id: 1,
        name: "English Language Pro | Spoken English Conversation + Culture",
        university: "University College London (UCL)",
        reviews: 12,
        imageSrc: CoursesImage,
        tutorSrc: TutorImage,
        tutorName: "Abdullah Hajir",
        subjects: ["English "],
        Program: ["AP"],
        languages: ["English"],
        hourlyPrice: "JOD 500",
        services: ["Assignment help", "15 min Free Session"],
        bio: `English is one of the most widely spoken languages in the world, with approximately 1.5 billion people who speak English as a first, second or foreign language. Its widespread use in internationa...`,
    },


];


export default function CoursesCard() {
    return (
        <>
            {
                coursesData.map((courses) => (
                    <>
                        {/* start large screen courses card */}
                        <div key={courses.id} className=' lg:w-[975px] md:w-[700px] pt-4 pr-6 pb-6 pl-4 sm:flex hidden items-start rounded-lg border bg-primary_4'>
                            <div className='flex flex-row gap-6'>
                                {/* start Img Col */}
                                <div >

                                    <Image
                                        src={courses.imageSrc}

                                        alt="Picture of the author"
                                        className='w-[300px] lg:h-[200px] md:h-[150px] rounded-lg'
                                    />
                                </div>
                                {/* end Img Col */}


                                <div className='flex flex-col gap-4 lg:w-[501px] md:w-[300px]'>
                                    {/* Start Name Courses */}
                                    <div className='h-[60px] lg:w-[501px] md:w-[300px]'>
                                        <h1 className='font-custom-semi-bold text-grayscale_1 text-custom-2xl'>{courses.name}</h1>
                                    </div>
                                    {/* End Name Courses */}


                                    <div className='gap-3 flex flex-col'>
                                        {/* start Program&subject&languages col */}

                                        <div className='w-[219px] h-[44px] flex flex-row flex-wrap gap-1'>
                                            <div className='flex gap-4 flex-row'>
                                                <p className='text-grayscale_3 font-custom-semi-bold leading-5 text-custom-sm'>Program:<span className='text-custom-sm font-custom-regular leading-5'>  {courses.Program}</span></p>
                                                <p className='text-grayscale_3 font-custom-semi-bold leading-5 text-custom-sm'>subjects:<span className='text-custom-sm font-custom-regular leading-5'> {courses.subjects}</span></p>
                                            </div>
                                            <p className='text-grayscale_3 font-custom-semi-bold leading-5 text-custom-sm'>Languages:<span className='text-custom-sm font-custom-regular leading-5'> {courses.languages}</span></p>
                                        </div>
                                        {/* end Program&subject&languages col */}

                                        {/* start availability */}
                                        <div className='flex flex-row gap-2 items-center w-[277px] h-[32px] py-2 px-4 rounded-[100px] bg-primary_3    '>
                                            <p className='text-custom-sm font-custom-medium text-grayscale_2'>1 May -  30 May, 2023 </p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                <circle cx="3" cy="3" r="3" fill="#75748B" />
                                            </svg>
                                            <p className='text-custom-sm font-custom-medium text-grayscale_2'>9AM - 11AM </p>

                                        </div>
                                        {/* end availability */}

                                        {/* start bio */}
                                        <div className=''>
                                            <p className='text-custom-base text-grayscale_2 leading-5'>{courses.bio}</p>
                                        </div>
                                        {/* end bio */}

                                    </div>
                                </div>



                                <div className='w-[1px] min-h-[236px] bg-[#d9d9d9]'></div>
                                {/* start tutor info name&img&Rating&hourlyPrice */}
                                <div className='gap-[61px] flex flex-col'>
                                    <div className='flex justify-start flex-col gap-3'>
                                        <p className='text-custom-3xl font-custom-semi-bold text-grayscale_1 leading-8'>{courses.hourlyPrice}</p>

                                        <div className='flex flew-row gap-3 items-center'>
                                            <Image
                                                src={courses.tutorSrc}

                                                alt="Picture of the author"
                                                className='h-[48px] w-[48px] rounded-full'
                                            />
                                            <p className='font-custom-semi-bold text-grayscale_3 text-custom-sm'>{courses.tutorName}</p>

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
                                        {/* end tutor info name&img&hourlyPrice */}



                                    </div>

                                    <div>
                                        <button className='text-primary_1 bg-primary_2 w-[181px] h-10 flex justify-center items-center rounded-lg'>Course Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end large screen courses card */}










                        {/* start small screen courses card */}
                        <div className='sm:hidden flex p-4 border bg-primary_4 w-[343px] min-h-[493px] rounded-lg'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-row gap-4'>
                                    {/* start Img */}
                                    <div className='relative'>
                                        <svg className='absolute top-2 right-2 ' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle id="Ellipse 609" cx="8" cy="8" r="7" fill="#26B44E" stroke="white" stroke-width="2" />
                                        </svg>

                                        <Image
                                            src={courses.imageSrc}

                                            alt="Picture of the author"
                                            className='h-32 w-32 rounded-xl'
                                        />
                                    </div>
                                    {/* end img */}

                                    <div className='flex flex-col gap-3'>

                                        {/*start Name  */}
                                        <div>
                                            <h1 className='font-custom-semi-bold text-grayscale_1 text-custom-lg'>{courses.name}</h1>
                                        </div>
                                        {/*end Name  */}
                                        {/* start program&subject&languages */}
                                        <div className='w-[219px] h-[44px] flex flex-row flex-wrap gap-1'>
                                            <div className='flex gap-4 flex-row'>
                                                <p className='text-grayscale_3 font-custom-semi-bold leading-5 text-custom-sm'>Program:<span className='text-custom-sm font-custom-regular leading-5'>  {courses.Program}</span></p>
                                                <p className='text-grayscale_3 font-custom-semi-bold leading-5 text-custom-sm'>subjects:<span className='text-custom-sm font-custom-regular leading-5'> {courses.subjects}</span></p>
                                            </div>
                                            <p className='text-grayscale_3 font-custom-semi-bold leading-5 text-custom-sm'>Languages:<span className='text-custom-sm font-custom-regular leading-5'> {courses.languages}</span></p>
                                        </div>
                                        {/* end program&subject&languages */}


                                    </div>
                                </div>

                                <div className='flex flex-col gap-4 '>
                                    {/* start availability */}
                                    <div className='flex flex-row gap-2 items-center w-[277px] h-[32px] py-2 px-4 rounded-[100px] bg-primary_3    '>
                                        <p className='text-custom-sm font-custom-medium text-grayscale_2'>1 May -  30 May, 2023 </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                            <circle cx="3" cy="3" r="3" fill="#75748B" />
                                        </svg>
                                        <p className='text-custom-sm font-custom-medium text-grayscale_2'>9AM - 11AM </p>

                                    </div>
                                    {/* end availability */}



                                    {/* start bio */}
                                    <div>
                                        <p className='text-custom-sm font-custom-regular text-grayscale_2 leading-5'>{courses.bio}</p>
                                    </div>
                                    {/* end bio */}



                                </div>

                                {/* this is the line in the middle of card */}
                                <div className=' h-[1px] w-[311px]  bg-grayscale_5'></div>

                                <div className='flex flex-col gap-4'>
                                    <div className='flex justify-start flex-col gap-3'>
                                        <p className='text-custom-3xl font-custom-semi-bold text-grayscale_1 leading-8'>{courses.hourlyPrice}</p>

                                        <div className='flex flew-row gap-3 items-center'>
                                            <Image
                                                src={courses.tutorSrc}

                                                alt="Picture of the author"
                                                className='h-[48px] w-[48px] rounded-full'
                                            />
                                            <p className='font-custom-semi-bold text-grayscale_3 text-custom-sm'>{courses.tutorName}</p>

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
                                        {/* end tutor info name&img&hourlyPrice */}



                                    </div>

                                    <div>
                                        <button className='text-primary_1 bg-primary_2 w-[181px] h-10 flex justify-center items-center rounded-lg'>View Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end small screen courses card */}
                    </>
                )
                )
            }
        </>
    );
}