import React from 'react'

export default function Assignments() {
    return (
        <>
            <div className="py-[10px] px-4 sm:w-[272px] w-[343px] h-[64px] border rounded-lg gap-[10px] justify-start items-center flex">
                <input type="checkbox" id="checkbox" name="checkbox" value="option1" className='h-6 w-6 border-grayscale_4' />
                <label htmlFor="checkbox" className='text-grayscale_1 font-medium'>Available for Assignments</label>
            </div>
        </>
    )
}
