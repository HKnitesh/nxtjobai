
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Menu({ title, className }) {
    return (
        <div className={`flex flex-row h-[44px] justify-center items-center gap-2 px-3 py-5  font-inter text-sm rounded-lg ${className}`}>
            <div >{title}</div>
            <MdKeyboardArrowDown
                className="text-xl font-thin "
            />

        </div>
    );
}