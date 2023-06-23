'use client'
import { useState } from 'react';
import JobCard from './Job-Card'


export default function ScrollItem({ title, count }) {

    const [newCount, setNewCount] = useState(0);
    return (
        <div className='rounded-lg bg-cream min-h-[450px] max-h-auto w-auto'>
            <div className='flex flex-col items-start p-5 gap-5 left-5 top-5'>
                <div className="flex justify-between w-full items-center p-0 font-inter text-blackF ">
                    <div className='font-semibold text-xl'>{title}</div>
                    <div className='font-normal text-base'>{count} jobs</div>
                </div>
                <div className="flex flex-col gap-2.5 p-0">

                    <JobCard />

                </div>
            </div>
        </div>
    );
}