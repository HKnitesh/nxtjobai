import React from 'react'
import { RxCross1 } from "react-icons/rx";

const closePopup = (props) => {
    return (props.trigger) ? (
        <>
            <button onClick={() => props.setTrigger(false)} type='button' className='flex items-center justify-center w-6 h-6 text-[#42464A] hover:text-red-600 hover:bg-zinc-300 rounded-3xl' >
                <RxCross1 />
            </button>
            {props.children}
        </>
    ) : "";
}

export default closePopup