import React from 'react'

export default function Search() {
    return (
        <>
            <div className="py-[10px] px-4 sm:w-[272px] w-[343px] h-[64px] border rounded-lg gap-[10px] flex flex-row items-center">
                <div >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icons">
                            <path id="Vector" d="M17.85 17.85L21 21M20.1 11.55C20.1 6.82797 16.272 3 11.55 3C6.82797 3 3 6.82797 3 11.55C3 16.272 6.82797 20.1 11.55 20.1C16.272 20.1 20.1 16.272 20.1 11.55Z" stroke="#75748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </div>
                <input type="text" className='font-medium' placeholder="Type Tutor Name..." />
            </div>
        </>
    )
}
