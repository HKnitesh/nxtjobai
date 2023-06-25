"use client"
import * as Dialog from '@radix-ui/react-dialog';
import * as Avatar from '@radix-ui/react-avatar';
import { BsGridFill, BsThreeDotsVertical, BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { AiOutlineCaretDown } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';
import TextEditor from '../components/TextEditor'

import { MdOutlineHomeWork, MdLocationOn, MdGridView, MdGroups2 } from "react-icons/md";
import { RiMoneyDollarCircleFill, RiMessageFill } from "react-icons/ri";
import { BiCaretDown } from "react-icons/bi";
import { HiPencil } from "react-icons/hi";
import { HiExclamationTriangle, HiMiniArrowRightCircle } from "react-icons/hi2";
import { IoDocumentAttach, IoDocumentText, IoChatbubblesSharp, IoDocumentTextOutline } from "react-icons/io5";
import { useState } from 'react';
import DateObject from "react-date-object";



export default function Boards() {
    function CompanyLogo({ width, height }) {
        return (
            <Image
                src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1687488876/companylogo_mrpni8.png'
                alt='logo'
                height={height}
                width={width}
            />
        );
    }
    const date = new DateObject();
    const todayDate = date.format("DD MMM, YYYY");
    const companyName = 'PIXSTER STUDIO';

    const [show01, setShow01] = useState(true);   {/* for description*/}
    const [show02, setShow02] = useState(false);  {/* for Company */ }
    const [show03, setShow03] = useState(false);  {/* for Notes */ }
    const [show04, setShow04] = useState(false);  {/* for Networking*/ }
    const [createNote, setCreateNote] = useState(true); {/* for Edit Notes */ }
    const [jobDescription, setJobDescription] = useState(false);  {/** to edit job description */}

    const showDescription = () => {
        setShow01(true);
        setShow02(false);
        setShow03(false);
        setShow04(false);
    }
    const showCompany = () => {
        setShow01(false);
        setShow02(true);
        setShow03(false);
        setShow04(false);
    }
    const showNote = () => {
        setShow01(false);
        setShow02(false);
        setShow03(true);
        setShow04(false);

    }
    const showNetworking = () => {
        setShow01(false);
        setShow02(false);
        setShow03(false);
        setShow04(true);
    }
    const editJobDescription = () => {
        setJobDescription(true);
    }

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
                            <CompanyLogo height='72' width='72' />
                            <div className="flex flex-col items-start p-0 gap-1.5">
                                <h1 className='font-inter font-bold text-xl text-blackF'>UI/UX Designer (Mobile Apps)</h1>
                                <div className='flex flex-row items-start gap-2.5 text-xs text-[#5A5A5A] font-normal font-inter'>
                                    <div className='flex flex-row items-center gap-1 '>
                                        <MdOutlineHomeWork className='w-4 h-4' />
                                        <p>{companyName}</p>
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
                    {/* nav menu */}
                    <div className="flex flex-row w-full gap-5 items-start max-h-[617px] h-full rounded-bl-lg overflow-hidden mt-5">
                        <div className="flex flex-col px-2.5 py-5 items-start shrink-0 self-stretch bg-whiteF border-r-[1px] border-solid border-[#DCDCDC]  h-full">
                            {/* all button */}
                            <div className="flex flex-col gap-2.5 items-start">
                                <button onClick={showDescription} className='compButton'>
                                    <MdGridView className='w-6 h-6' />
                                    <p className='font-inter text-xs font-semibold'>Job Description</p>
                                </button>

                                <button onClick={showCompany} className='compButton'>
                                    <MdOutlineHomeWork className='w-6 h-6' />
                                    <p className='font-inter text-xs font-semibold'>Company</p>
                                </button>

                                <button onClick={showNote} className='compButton'>
                                    <IoDocumentText className='w-6 h-6' />
                                    <p className='font-inter text-xs font-semibold'>Note</p>
                                </button>

                                <button onClick={showNetworking} className='compButton'>
                                    <MdGroups2 className='w-6 h-6' />
                                    <p className='font-inter text-xs font-semibold'>Networking</p>
                                </button>

                            </div>
                        </div>
                        {/* Job description */}
                        {show01 ? <div className="navMenu" >
                            <div className="flex flex-row justify-between self-stretch">
                                <h2 className=' text-blackF text-lg font-bold'>Description</h2>
                                {jobDescription ? null : <button onClick={editJobDescription} className=' text-[#8246FD]'><HiPencil className='h-6 w-6' /></button>}
                                
                                { jobDescription ? <div className="flex flex-row justify-end items-start gap-2.5 self-stretch">
                                    <button onClick={() => setJobDescription(false)} className='rounded-lg text-[#57A4F2] bg-whiteF  font-normal text-sm items-center justify-center py-2.5 px-8 hover:border-[1.5px] hover:border-solid hover:border-blackF '>Cancel</button>
                                    <button className='big-btn hover:bg-green-300' type="submit">Save</button>
                                </div> : null }
                            </div>
                            {jobDescription ? 
                                <TextEditor className='w-full h-full text-[#8246FD]' />:
                            <div className="flex flex-col items-start gap-2.5 shrink-0 self-stretch">

                                <div className=' text-justify  self-stretch gap-2.5'>
                                    <h3 className='text-blackF text-base font-medium'>About the job</h3>
                                    <p className='text-[#5A5A5A] text-sm font-normal'>  Are you passionate about UI/UX design and eager to gain hands-on experience working with a prestigious Management Consulting firm? TalentKompass
                                        Deutschland, a top Human Resources company based in Germany, is searching for a motivated UI/UX Design Intern to join our esteemed client. This remote
                                        position offers an extraordinary chance for someone who is excited to learn and develop their skills in a dynamic and fast-paced environment.

                                        As a UI/UX Design Intern, you will work closely with the consulting and design teams, where you will be responsible for a range of tasks,
                                        including user research, wireframing, prototyping, and usability testing. You will have the unique opportunity to learn from experienced professionals
                                        who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in UI/UX design, design
                                        thinking, and teamwork – all essential skills for a successful career in this field.
                                    </p>
                                </div>
                                <div className='flex flex-col text-justify  self-stretch gap-2.5'>
                                    <h2 className='text-blackF text-sm font-medium'>Responsibilities:</h2>
                                    <ol className='text-[#5A5A5A] text-sm font-normal list-disc list-inside'>
                                        <li>Assist in the research, design, and prototyping of user interfaces and experiences</li>
                                        <li>Conduct user research and develop personas, user stories, and user flows</li>
                                        <li>Create wireframes, mockups, and prototypes to effectively communicate design ideas</li>
                                        <li>Collaborate with cross-functional teams to gather requirements and develop solutions</li>
                                        <li>Participate in usability testing and incorporate feedback into design iterations</li>
                                        <li>Support the team with general administrative tasks as needed</li>
                                        <li>Contribute to the creation of design documentation and style guides</li>
                                    </ol>

                                </div>
                                <div className='flex flex-col text-justify  self-stretch gap-2.5'>
                                    <h2 className='text-blackF text-sm font-medium'>Requirements:</h2>
                                    <ol className='text-[#5A5A5A] text-sm font-normal list-disc list-inside'>
                                        <li>Basic understanding of UI/UX design principles and practices</li>
                                        <li>Familiarity with design tools, such as Sketch, Adobe XD, Figma is a plus</li>
                                        <li> Excellent written and verbal communication skills in English</li>
                                        <li>Ability to work independently and as part of a team</li>
                                        <li>Strong analytical and problem-solving skills</li>
                                        <li>Knowledge of web and mobile design best practices is a plus</li>
                                        <li>Experience with user research methodologies and usability testing is a plus</li>
                                    </ol>

                                </div>

                                <p >

                                    At TalentKompass Deutschland, we are committed to helping our interns develop their skills and reach their full potential. Our client is a reputable Management Consulting firm that will provide invaluable experience in a competitive industry. Don't miss this incredible opportunity to kick-start your career in UI/UX design.
                                </p>
                            </div> }

                        </div> : null}
                        {/* company information */}
                        {show02 ? <div className='navMenu' >
                            <div className="flex flex-row justify-between self-stretch">
                                <h2 className=' text-blackF text-lg font-bold'>Company info</h2>
                                <HiPencil className='h-6 w-6 text-[#8246FD]' />
                            </div>
                            <div className="flex flex-col items-start gap-5 self-stretch">
                                <div className="flex flex-row gap-2.5 self-stretch items-center">
                                    <CompanyLogo height='72' width='72' />
                                    <h1 className='text-blackF text-lg font-inter font-bold'>{companyName}</h1>
                                </div>
                                <div className='flex flex-col gap-5 font-inter'>
                                    <p className='text-[#5A5A5A] text-sm font-normal'>
                                        Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android,
                                        and Web applications all the way to front-end and back-end website solutions. We’ve more than 15 products and
                                        satisfied clients all around the world.
                                    </p>
                                    <div>
                                        <h2 className='text-blackF text-base font-medium'>Website</h2>
                                        <a className='text-[#8246FD] underline underline-offset-4' href="https://www.linkedin.com/company/pixster-studio/life/" target='_blank'>https://www.linkedin.com/company/pixster-studio/life/</a>
                                    </div>
                                    <div>
                                        <h2 className='text-blackF text-base font-medium'>Industry</h2>
                                        <p className='text-[#5A5A5A] text-sm font-normal'> Information Technology & Services</p>
                                    </div>
                                    <div>
                                        <h2 className='text-blackF text-base font-medium'>Employee Count</h2>
                                        <p className='text-[#5A5A5A] text-sm font-normal'>11-50</p>
                                    </div>
                                    <div>
                                        <h2 className='text-blackF text-base font-medium'>Address</h2>
                                        <p className='text-[#5A5A5A] text-sm font-normal'>Ahmedabad, Gujarat, India</p>
                                    </div>
                                </div>

                            </div>

                        </div> : null}

                        {/* Note */}
                        {show03 ? <div className='navMenu' >
                            <div className="flex flex-row justify-between self-stretch">
                                <h2 className=' text-blackF text-lg font-bold'>Notes</h2>
                                <button onClick={() => { setCreateNote(false) }} className='big-btn' type='submit'>Create New Note</button>
                            </div>
                            {createNote ?
                                <div className="flex flex-col justify-center items-center gap-5 self-stretch">
                                    <IoDocumentTextOutline className='text-[#C9BCE3] w-60 h-60' />
                                    <div className="flex flex-col py-2.5 px-0 gap-2.5 text-[#5A5A5A] text-center font-inter">
                                        <h1 className='text-2xl font-semibold'>No notes created</h1>
                                        <p className='font-normal text-sm'>You can tap the "Create New Notes" Button to start taking notes!</p>
                                    </div>
                                </div>
                                :
                                <div className="flex flex-col  items-start gap-2.5 self-stretch text-blackF font-inter">
                                    <h4 className=' text-sm font-semibold'>Add Note</h4>
                                    <form className=' flex flex-col gap-2.5 w-full' action="#" method="post">
                                        <input className=' h-48 bg-whiteF rounded-lg border-[1px] border-solid border-[#8246FD] focus:outline-none' type="text" name="note" id="note" />
                                        <div className="flex flex-row justify-end items-start gap-2.5 self-stretch">
                                            <button onClick={() => { setCreateNote(true) }} className='rounded-lg text-[#57A4F2] bg-whiteF  font-normal text-sm items-center justify-center py-2.5 px-8 hover:border-[1.5px] hover:border-solid hover:border-blackF '>Cancel</button>
                                            <button className='big-btn hover:bg-green-300' type="submit">Save</button>
                                        </div>
                                    </form>
                                </div>
                            }

                        </div> : null}

                        {/* Networking */}
                        {show04 ? <div className='navMenu' >
                            <div className="flex flex-row justify-between self-stretch items-center">
                                <h2 className=' text-blackF text-lg font-bold'>Your Network</h2>
                                <div className="flex flex-row items-start gap-5 h-10">
                                    <span className="flex items-center border-[1px] border-solid border-[#DDDDDD] bg-whiteF w-52 rounded-lg h-10">
                                        <label className="mx-3" htmlFor="search"><CiSearch className="text-blackF text-xl" /></label>
                                        <input
                                            className=" placeholder:text-gray500  placeholder:text-sm focus:outline-none w-40"
                                            type="text"
                                            placeholder="Search"
                                        />
                                    </span>
                                    <button className=' big-btn px-6 '>Create New</button>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-5 shrink-0 self-stretch">
                                {/* follow up 1 */}
                                <div className="flex flex-col items-start gap-2.5 self-stretch shrink-0 w-full font-inter text-[#9E9E9E]">
                                    <div className="flex flex-col items-start gap-2.5 self-stretch">
                                        <div className="flex  gap-2.5 text-blackF text-sm items-center">
                                            <AiOutlineCaretDown />
                                            <h3 className=' font-bold text-justify'>Follow-Up 1</h3>
                                        </div>
                                    </div>
                                    <div className="fellowUp">
                                        <div className="flex items-center gap-2.5">
                                            <Avatar.Root className='rounded-full '>
                                                <Avatar.Image
                                                    className='w-8 h-8'
                                                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1687656149/Avatar_ei1qyq.png'
                                                    alt='avatar img'
                                                />

                                                <Avatar.Fallback className=' font-semibold text-black text-base absolute top-3 left-3 font-inter' >AV</Avatar.Fallback>
                                            </Avatar.Root>
                                            <div className="flex flex-col items-start gap-0.5">
                                                <h3 className='text-blackF text-sm'>Hare Krishna</h3>
                                                <p className='text-[10px] font-normal'>UI/UX Designer at Crisil</p>
                                            </div>
                                        </div>
                                        <p className='text-[10px] font-normal'>Name of Company</p>
                                        <p className='text-[10px] font-normal'>{todayDate}</p>
                                        <div className="flex  gap-2.5 justify-center items-center" >
                                            <HiExclamationTriangle className='text-yellow-400 h-6 w-6' />
                                            <RiMessageFill className='h-6 w-6' />
                                            <BsThreeDotsVertical className='h-5 w-6' />
                                        </div>
                                    </div>
                                    <div className="fellowUp">
                                        <div className="flex items-center gap-2.5">
                                            <Avatar.Root className='rounded-full '>
                                                <Avatar.Image
                                                    className='w-8 h-8'
                                                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1687656149/Avatar_ei1qyq.png'
                                                    alt='avatar img'
                                                />

                                                <Avatar.Fallback className=' font-semibold text-black text-base absolute top-3 left-3 font-inter' >AV</Avatar.Fallback>
                                            </Avatar.Root>
                                            <div className="flex flex-col items-start gap-0.5">
                                                <h3 className='text-blackF text-sm'>Monisha Raut</h3>
                                                <p className='text-[10px] font-normal'>UI/UX Designer at Crisil</p>
                                            </div>
                                        </div>
                                        <p className='text-[10px] font-normal'>Name of Company</p>
                                        <p className='text-[10px] font-normal'>{todayDate}</p>
                                        <div className="flex  gap-2.5 justify-center items-center" >
                                            <BsFillArrowRightCircleFill className='text-[#61C786] h-6 w-6' />
                                            <RiMessageFill className='h-6 w-6' />
                                            <BsThreeDotsVertical className='h-5 w-6' />
                                        </div>
                                    </div>

                                </div>
                                {/* follow up 2 */}
                                <div className="flex flex-col items-start gap-2.5 self-stretch shrink-0 w-full font-inter text-[#9E9E9E]">
                                    <div className="flex flex-col items-start gap-2.5 self-stretch">
                                        <div className="flex  gap-2.5 text-blackF text-sm items-center">
                                            <AiOutlineCaretDown />
                                            <h3 className=' font-bold text-justify'>Follow-Up 2</h3>
                                        </div>
                                    </div>
                                    <div className="fellowUp">
                                        <div className="flex items-center gap-2.5">
                                            <Avatar.Root className='rounded-full '>
                                                <Avatar.Image
                                                    className='w-8 h-8'
                                                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1687656149/Avatar_ei1qyq.png'
                                                    alt='avatar img'
                                                />

                                                <Avatar.Fallback className=' font-semibold text-black text-base absolute top-3 left-3 font-inter' >AV</Avatar.Fallback>
                                            </Avatar.Root>
                                            <div className="flex flex-col items-start gap-0.5">
                                                <h3 className='text-blackF text-sm'>Hare Krishna</h3>
                                                <p className='text-[10px] font-normal'>UI/UX Designer at Crisil</p>
                                            </div>
                                        </div>
                                        <p className='text-[10px] font-normal'>Name of Company</p>
                                        <p className='text-[10px] font-normal'>{todayDate}</p>
                                        <div className="flex  gap-2.5 justify-center items-center" >
                                            <BsFillArrowLeftCircleFill className='text-[#FA5E51] h-6 w-6' />
                                            
                                            <RiMessageFill className='h-6 w-6' />
                                            <BsThreeDotsVertical className='h-5 w-6' />
                                        </div>
                                    </div>
                                    <div className="fellowUp">
                                        <div className="flex items-center gap-2.5">
                                            <Avatar.Root className='rounded-full '>
                                                <Avatar.Image
                                                    className='w-8 h-8'
                                                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1687656149/Avatar_ei1qyq.png'
                                                    alt='avatar img'
                                                />

                                                <Avatar.Fallback className=' font-semibold text-black text-base absolute top-3 left-3 font-inter' >AV</Avatar.Fallback>
                                            </Avatar.Root>
                                            <div className="flex flex-col items-start gap-0.5">
                                                <h3 className='text-blackF text-sm'>Monisha Raut</h3>
                                                <p className='text-[10px] font-normal'>UI/UX Designer at Crisil</p>
                                            </div>
                                        </div>
                                        <p className='text-[10px] font-normal'>Name of Company</p>
                                        <p className='text-[10px] font-normal'>{todayDate}</p>
                                        <div className="flex  gap-2.5 justify-center items-center" >
                                            <HiExclamationTriangle className='text-yellow-400 h-6 w-6' />
                                            <RiMessageFill className='h-6 w-6' />
                                            <BsThreeDotsVertical className='h-5 w-6' />
                                        </div>
                                    </div>

                                </div>
                                {/* follow up 3 */}
                                <div className="flex flex-col items-start gap-2.5 self-stretch shrink-0 w-full font-inter text-[#9E9E9E]">
                                    <div className="flex flex-col items-start gap-2.5 self-stretch">
                                        <div className="flex  gap-2.5 text-blackF text-sm items-center">
                                            <AiOutlineCaretDown />
                                            <h3 className=' font-bold text-justify'>Follow-Up 3</h3>
                                        </div>
                                    </div>
                                    <div className="fellowUp">
                                        <div className="flex items-center gap-2.5">
                                            <Avatar.Root className='rounded-full '>
                                                <Avatar.Image
                                                    className='w-8 h-8'
                                                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1687656149/Avatar_ei1qyq.png'
                                                    alt='avatar img'
                                                />

                                                <Avatar.Fallback className=' font-semibold text-black text-base absolute top-3 left-3 font-inter' >AV</Avatar.Fallback>
                                            </Avatar.Root>
                                            <div className="flex flex-col items-start gap-0.5">
                                                <h3 className='text-blackF text-sm'>Hare Krishna</h3>
                                                <p className='text-[10px] font-normal'>UI/UX Designer at Crisil</p>
                                            </div>
                                        </div>
                                        <p className='text-[10px] font-normal'>Name of Company</p>
                                        <p className='text-[10px] font-normal'>{todayDate}</p>
                                        <div className="flex  gap-2.5 justify-center items-center" >
                                            <HiExclamationTriangle className='text-yellow-400 h-6 w-6' />
                                            <RiMessageFill className='h-6 w-6' />
                                            <BsThreeDotsVertical className='h-5 w-6' />
                                        </div>
                                    </div>
                                    <div className="fellowUp">
                                        <div className="flex items-center gap-2.5">
                                            <Avatar.Root className='rounded-full '>
                                                <Avatar.Image
                                                    className='w-8 h-8'
                                                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1687656149/Avatar_ei1qyq.png'
                                                    alt='avatar img'
                                                />

                                                <Avatar.Fallback className=' font-semibold text-black text-base absolute top-3 left-3 font-inter' >AV</Avatar.Fallback>
                                            </Avatar.Root>
                                            <div className="flex flex-col items-start gap-0.5">
                                                <h3 className='text-blackF text-sm'>Monisha Raut</h3>
                                                <p className='text-[10px] font-normal'>UI/UX Designer at Crisil</p>
                                            </div>
                                        </div>
                                        <p className='text-[10px] font-normal'>Name of Company</p>
                                        <p className='text-[10px] font-normal'>{todayDate}</p>
                                        <div className="flex  gap-2.5 justify-center items-center" >
                                            <HiExclamationTriangle className='text-yellow-400 h-6 w-6' />
                                            <RiMessageFill className='h-6 w-6' />
                                            <BsThreeDotsVertical className='h-5 w-6' />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div> : null}





                        {/* Time line */}
                        <div className="flex flex-col font-inter p-5 items-start gap-5 shrink-0 text-[#5A5A5A] rounded-lg bg-[#F9F8F8] ">
                            <h2 className='text-center text-base font-bold'>Time Line</h2>
                            <div className="flex flex-col items-start gap-8 self-stretch">
                                {/* first */}
                                <div className='flex flex-row items-start gap-2.5 self-stretch'>
                                    <div className="flex flex-col relative">
                                        <div className='h-4 w-4 bg-[#57A4F2] rounded-lg '></div>
                                        <div className='border-[#57A4F2] border-[1px] border-dashed absolute left-2 top-4 h-28 w-0  bg-[]'></div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2.5">
                                        <p className='text-[#9E9E9E] text-[0.625rem] '>Today, 1:12 PM</p>
                                        <div className="flex flex-col p-2.5 items-start self-stretch bg-[#E4F2FF] w-32 rounded">
                                            <h3 className='text-xs font-bold'>Moved to Saved</h3>
                                            <p className='text-[0.625rem] font-normal'>You moved this job from Applied to saved</p>
                                        </div>
                                    </div>
                                </div>
                                {/* second */}
                                <div className='flex flex-row items-start gap-2.5 self-stretch'>
                                    <div className="flex flex-col relative">
                                        <div className='h-4 w-4 bg-[#57A4F2] rounded-lg '></div>
                                        <div className='border-[#57A4F2] border-[1px] border-dashed absolute left-2 top-4 h-28 w-0  bg-[]'></div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2.5">
                                        <p className='text-[#9E9E9E] text-[0.625rem] '>Yesterday, 1:12 PM</p>
                                        <div className="flex flex-col p-2.5 items-start self-stretch bg-[#E4F2FF] w-32 rounded">
                                            <h3 className='text-xs font-bold'>Moved to Saved</h3>
                                            <p className='text-[0.625rem] font-normal'>You moved this job from Applied to saved</p>
                                        </div>
                                    </div>
                                </div>
                                {/* third */}
                                <div className='flex flex-row items-start gap-2.5 self-stretch'>
                                    <div className="flex flex-col relative">
                                        <div className='h-4 w-4 bg-[#57A4F2] rounded-lg '></div>
                                        {/* <div className='border-[#57A4F2] border-[1px] border-dashed absolute left-2 top-4 h-28 w-0  bg-[]'></div> */}
                                    </div>
                                    <div className="flex flex-col items-start gap-2.5">
                                        <p className='text-[#9E9E9E] text-[0.625rem] '>Yesterday, 1:12 PM</p>
                                        <div className="flex flex-col p-2.5 items-start self-stretch bg-[#E4F2FF] w-32 rounded">
                                            <h3 className='text-xs font-bold'>Moved to Saved</h3>
                                            <p className='text-[0.625rem] font-normal'>You moved this job from Applied to saved</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* main */}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}