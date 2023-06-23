"use client"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
// import ClosePopup from '../components/closePopup';

export default function CoverLetter() {
    // const [open, setOpen] = useState(true);

    return (

        <NavigationMenu.Root className='z-10'>
            <NavigationMenu.List>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className='flex flex-row h-[44px] justify-between items-center gap-2 px-3 py-5  font-inter text-sm rounded-lg' >
                        Cover Letter{' '}
                        <MdKeyboardArrowDown
                            className="text-xl font-thin"
                        />
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className="absolute w-full  shadow-3bx rounded-lg">

                        <div className='flex flex-col items-start p-5 bg-whiteF gap-2.5 absolute'>
                            <div className="flex flex-row items-center justify-between w-full">
                                <p className='font-inter font-normal text-sm text-blackF'>Cover Letter</p>
                                {/* <ClosePopup trigger={open} setTrigger={setOpen}/> */}
                                <button type='button' className='flex items-center justify-center w-6 h-6 text-[#42464A] hover:text-red-600 hover:bg-zinc-300 rounded-3xl' >
                                    <RxCross1 />
                                </button>
                            </div>

                            <form className="flex flex-row justify-between items-center p-0 gap-2 h-12" action="#">
                                <input
                                    className="input  placeholder:text-gray500 placeholder:text-base"
                                    type="text"
                                    placeholder="Cover Letter Name"

                                />
                                <button className="button" type="submit">Create</button>
                            </form>
                        </div>

                    </NavigationMenu.Content>
                </NavigationMenu.Item>

            </NavigationMenu.List>

            <NavigationMenu.Viewport />
        </NavigationMenu.Root>

    )
};