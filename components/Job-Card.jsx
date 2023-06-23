import Image from 'next/image';
import { MdOutlineHomeWork } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoDocumentAttach, IoDocumentText, IoChatbubblesSharp } from "react-icons/io5";

export default function JobCard() {
    return (
        <div className="flex flex-col p-2.5 gap-2.5 bg-whiteF shadow-2bx rounded-lg">
            <div className="flex flex-row w-64 items-start justify-between p-0 gap-2 isolate self-stretch ">
                <div className="flex flex-row items-center p-0 gap-2.5 ">
                    <Image
                        priority
                        className='rounded-sm'
                        src="/v1687488875/Rectangle4913_sqbbcb.png"
                        width={24}
                        height={24}
                        alt="card img"
                    />
                    <div className="flex flex-col justify-center items-start p-0 font-inter font-normal text-blackF ">
                        <div className='text-base  '>UI/UX Designer</div>
                        <div className="flex flex-row items-center">
                            <MdOutlineHomeWork className='w-4 h-4' />
                            <p className='text-gray500 text-sm mx-2'>Ajmera Infotech Inc.</p>
                        </div>

                    </div>
                </div>
                <button
                    className='w-6 h-6 right-0 top-0 text-[#42464A] hover:text-blue-800 hover:text-lg'
                    type="button"
                >
                    <BsThreeDotsVertical />
                </button>

            </div>

            <div className="w-6 flex flex-row items-center p-0 gap-2.5 self-stretch pt-2">
                <div className='bg-[#D1FAE5] rounded '>
                    <div className="flex flex-row items-center gap-2 p-0 m-2 text-[#059669]">
                        <div className=' w-3.5 h-4'>
                            <IoDocumentAttach />
                        </div>
                        <div className=' font-inter font-normal text-sm'>75%</div>
                    </div>

                </div>

                <button className='flex items-center  h-8 text-[#9E9E9E] border-[1px] box-border border-dashed border-[#9E9E9E] rounded-full hover:text-orange-600 hover:border-orange-600'>
                    <IoDocumentText className='w-8 h-4'/>
                </button>
                <button className='flex items-center  h-8 text-[#9E9E9E] w-8  border-[1px] box-border border-dashed border-[#9E9E9E] rounded-full hover:text-orange-600 hover:border-orange-600'>
                    
                    <IoChatbubblesSharp className='w-8 h-4'/>
                </button>
            </div>

        </div>
    );
}