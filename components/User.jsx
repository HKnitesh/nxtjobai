"use client"
import * as Avatar from '@radix-ui/react-avatar';

export default function User() {
    return (
        <div className='w-12 h-12'>
            <Avatar.Root className='absolute w-12 h-full rounded-full bg-[#57A4F2]'>
                <Avatar.Fallback className=' font-semibold text-whiteF text-base absolute top-3 left-3 font-inter' >GS</Avatar.Fallback>
            </Avatar.Root>
        </div>
    );
}

