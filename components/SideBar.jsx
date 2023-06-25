
import { MdGroups2, MdBugReport } from "react-icons/md";
import { TiArrowLoop } from "react-icons/ti";
import { HiLightBulb } from "react-icons/hi";
import { RiInboxArchiveFill } from "react-icons/ri";
import Link from 'next/link';
import Boards from '../components/Boards';


export default function SideBar() {
    return (
        <div className="flex flex-col absolute px-5 py-3 gap-[10px] top-[120px] left-8 rounded-xl bg-whiteF">
            <Boards />

            <Link className="sideBar" href="/">
                <MdGroups2 className="text-3xl" />
                <div className="font-inter font-semibold text-base">Networking</div>
            </Link>

            <Link className="sideBar" href="/">
                <RiInboxArchiveFill className="text-3xl" />
                <div className="font-inter font-semibold text-base">Archive Jobs</div>
            </Link>

            <Link className="sideBar" href="/">
                <TiArrowLoop className="text-3xl rotate-180" />
                <div className="font-inter font-semibold text-base">Loop Settings</div>
            </Link>
            <hr className="border-[#E6E6E6] border-solid border-[1px]" />

            <Link className="sideBar" href="/">
                <HiLightBulb className="text-3xl" />
                <div className="font-inter font-semibold text-base">Suggest a feature</div>
            </Link>

            <Link className="sideBar" href="/">
                <MdBugReport className="text-3xl" />
                <div className="font-inter font-semibold text-base">Report an Issue</div>
            </Link>
        </div>
    );
}