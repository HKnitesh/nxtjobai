"use client"
import * as Dialog from '@radix-ui/react-dialog';
import { BsGridFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Image from 'next/image';
import Link from 'next/link';

import { MdOutlineHomeWork, MdLocationOn, MdGridView, MdGroups2 } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiCaretDown } from "react-icons/bi";
import { IoDocumentAttach, IoDocumentText, IoChatbubblesSharp } from "react-icons/io5";


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
                <Dialog.Content className='bg-whiteF flex flex-col rounded-lg absolute shadow-4bx top-1/2 left-1/2 max-w-[1144px] max-h-[881px] w-10/12 h-5/6 z-20 translate-x-[-50%] translate-y-[-50%] isolate ' >
                    <div className="flex flex-row justify-end">
                        <Dialog.Close asChild>
                            <button type='button' className='flex items-center justify-center w-8 h-8 text-[#42464A] hover:text-whiteF hover:bg-neutral-500 rounded-lg' >
                                <RxCross1 />
                            </button>
                        </Dialog.Close>
                    </div>
                    {/* Head */}
                    <div className='flex flex-row justify-between items-start gap-2.5 w-full h-[72px] max-h-[800px] pb-10 bottom-5'>
                        <div className='flex flex-row items-start  absolute gap-2.5 h-[72px] left-6'>
                            <Image
                                src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1687488876/companylogo_mrpni8.png'
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
                    {/* mid */}

                    <div className='flex flex-col items-start gap-5 w-full pt-4'>
                        <div className='w-full h-0 border-[#DCDCDC] border-[1px] border-solid '></div>
                        <div className="flex flex-row gap-2.5 relative w-full left-6 ">
                            <div className="flex flex-row items-center gap-2 p-0 text-[#059669] bg-emerald-100 rounded px-3 py-2  ">
                                <div className=' w-3.5 h-4'>
                                    <IoDocumentAttach />
                                </div>
                                <div className=' font-inter font-normal text-sm'>Resume Name 75%</div>
                            </div>
                            <div className="flex flex-row items-center gap-2 p-0 text-[#9E9E9E] bg-whiteF rounded px-3 py-2 border-[1px] border-solid border-[#D1D5DB] ">
                                <div className=' w-3.5 h-4'>
                                    <IoDocumentText />
                                </div>
                                <div className=' font-inter font-normal text-sm'>Cover Letter Name</div>
                            </div>
                            <div className="flex flex-row items-center gap-2 p-0 text-[#9E9E9E] bg-whiteF rounded px-3 py-2 border-[1px] border-solid border-[#D1D5DB] ">
                                <div className=' w-3.5 h-4'>
                                    <IoChatbubblesSharp />
                                </div>
                                <div className=' font-inter font-normal text-sm'>Mock Interview</div>
                            </div>
                        </div>
                        <div className='w-full h-0 border-[#DCDCDC] border-[1px] border-solid '></div>
                    </div>
                    <div className="flex flex-row w-full gap-5 items-start max-h-[617px] h-full rounded-bl-lg overflow-hidden">
                        <div className="flex flex-col px-2.5 py-5 items-start shrink-0 self-stretch bg-whiteF border-r-[1px] border-solid border-[#DCDCDC]  h-full">
                            <div className="flex flex-col gap-2.5 items-start">
                                <button className='flex flex-row items-center gap-2.5 py-1.5 px-2.5 rounded-lg hover:bg-[#F7F3FF] text-[#5A5A5A] hover:text-[#8246fD] w-48'>
                                    <MdGridView className='w-6 h-6' />
                                    <p className='font-inter text-xs font-semibold'>Job Description</p>
                                </button>

                                <button className='flex flex-row items-center gap-2.5 py-1.5 px-2.5 rounded-lg hover:bg-[#F7F3FF] text-[#5A5A5A] hover:text-[#8246fD] w-48'>
                                    <MdOutlineHomeWork className='w-6 h-6' />
                                    <p className='font-inter text-xs font-semibold'>Company</p>
                                </button>

                                <button className='flex flex-row items-center gap-2.5 py-1.5 px-2.5 rounded-lg hover:bg-[#F7F3FF] text-[#5A5A5A] hover:text-[#8246fD] w-48'>
                                    <IoDocumentText className='w-6 h-6' />
                                    <p className='font-inter text-xs font-semibold'>Note</p>
                                </button>

                                <button className='flex flex-row items-center gap-2.5 py-1.5 px-2.5 rounded-lg hover:bg-[#F7F3FF] text-[#5A5A5A] hover:text-[#8246fD] w-48'>
                                    <MdGroups2 className='w-6 h-6' />
                                    <p className='font-inter text-xs font-semibold'>Networking</p>
                                </button>
                               
                            </div>
                        </div>
                    </div>

                    {/* main */}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}