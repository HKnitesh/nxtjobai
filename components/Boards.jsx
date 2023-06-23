"use client"
import * as Dialog from '@radix-ui/react-dialog';
import { BsGridFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Image from 'next/image';
import Link from 'next/link';

import { MdOutlineHomeWork, MdLocationOn } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiCaretDown } from "react-icons/bi";

export default function Boards() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="sideBar">
                    <BsGridFill className="text-3xl" />
                    <div className="font-inter font-semibold text-base">Boards</div>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0  bg-[#0000004d] backdrop-blur-xs ' />
                <Dialog.Content className='bg-whiteF rounded-lg absolute shadow-4bx top-1/2 left-1/2 max-w-[1144px] max-h-[881px] w-10/12 h-5/6 z-20 translate-x-[-50%] translate-y-[-50%] isolate ' >
                    <div className="flex flex-row justify-end">
                        <Dialog.Close asChild>
                            <button type='button' className='flex items-center justify-center w-8 h-8 text-[#42464A] hover:text-whiteF hover:bg-neutral-500 rounded-lg' >
                                <RxCross1 />
                            </button>
                        </Dialog.Close>
                    </div>
                    {/* main area */}
                    <div className="flex flex-col items-start pb-10 bottom-5 w-full max-h-[800px]">
                        {/* Head */}

                        <div className='flex flex-row justify-between items-start gap-2.5 w-full h-auto'>
                            <div>
                                <div className='flex flex-row items-start  absolute gap-2.5 h-[72px] left-6'>
                                    <Image
                                        src='/images/companylogo.png'
                                        alt='logo'
                                        height={72}
                                        width={72}
                                    />
                                    <div className="flex flex-col items-start p-0 gap-1.5">
                                        <h1 className='font-inter font-bold text-xl text-blackF'>UI/UX Designer (Mobile Apps)</h1>
                                        <div className='flex flex-row items-start gap-2.5 text-xs text-[#5A5A5A] font-normal font-inter'>
                                            <div className='flex flex-row items-center gap-1 '>
                                                <MdOutlineHomeWork className='w-4 h-4' />
                                                <p>PIXSTER STUDIO</p>
                                            </div>
                                            <div className='flex flex-row items-center gap-1 '>
                                                <MdLocationOn className='w-4 h-4' />
                                                <p>Ahmedabad, Gujarat, India</p>
                                            </div>
                                            <div className='flex flex-row items-center gap-1 '>
                                                <RiMoneyDollarCircleFill className='w-4 h-4' />
                                                <p>Ahmedabad, Gujarat, India</p>
                                            </div>
                                            <Link href="#" className='font-bold text-[#8246FD]'>View Job Details</Link>
                                        </div>
                                        <p className='text-[#9E9E9E] font-normal text-xs'>Job added from linkedin.com on Tue May 30 2023.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start absolute right-6">
                                <div className='flex flex-row gap-2.5' >
                                    <Dialog.Close asChild>
                                        <button type='button' className='flex items-center w-36 justify-center bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 text-whiteF rounded-lg px-[18px] py-1 font-bold text-base font-inter' >
                                            Delete
                                        </button>
                                    </Dialog.Close>
                                    <Dialog.Close asChild>
                                        <button type='button' className='flex flex-row gap-1.5 font-normal text-sm text-blackF items-center w-36 h-8 justify-center border-[1px] border-solid border-[#E4E4E4] rounded-md px-[18px] py-1 hover:bg-green-300 focus:outline-none focus:ring-4 focus:ring-green-200' >
                                            <p>Saved</p>
                                            <BiCaretDown />
                                        </button>
                                    </Dialog.Close>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* mid */}
                    <div className='w-full flex flex-col items-start gap-5 h-16'>
                        <div className='w-full h-0 border-[#DCDCDC] border-[1px] border-solid'></div>

                    </div>
                    {/* main */}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}