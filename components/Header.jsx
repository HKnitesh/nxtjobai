import Image from 'next/image';
import { MdNotifications } from "react-icons/md";
import Menu from './Menu';
import Link from 'next/link';
import User from '../components/User';
import CoverLetter from '../components/CoverLetter';

export default function Header() {
    return (
        <div className="header">
            <div className="w-[1376px] h-12 top-[26%] absolute ">
                {/* left side logo + menu section  */}
                <div className="flex flex-row items-center p-0 gap-7 absolute w-[1111px] h-full ">
                    {/* logo div */}
                    <Link href="/" className="h-full w-[139px] flex-none order-0 grow-0">
                        <Image
                            priority
                            src="/images/Group1784.png"
                            width={139}
                            height={48}
                            alt="company logo"
                        />
                    </Link>

                    {/* menu div */}
                    <div className='w-[942px] h-11 flex flex-row items-center gap-[10px] p-0 top-[2px] left-44 '>
                        <Menu title="Resume Builder" />
                        {/* <Menu title="Cover Letter" /> */}
                        <CoverLetter />
                        <Menu title="LinkedIn Review" />
                        <Menu title="Interview" />
                        <Menu title="Job Tracker & Networking" className="text-[#8246FD] bg-[#F7F3FF] font-semibold" />
                    </div>
                </div>

                {/* right side user section  */}
                <div className="flex flex-row items-center absolute h-full w-[100px] p-0 gap-5 left-[1308px] ">
                    <div className='top-2 w-8 h-8 flex-none order-0 grow-0'><MdNotifications className='w-full h-full' /></div>
                    <User />
                </div>

            </div>
        </div>

    );
}