import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
    return (
        <div className="flex justify-between items-center w-4/5 h-20 left-72 top-[120px] absolute bg-whiteF text-black rounded-lg">
            <div className="text-blackF font-inter font-semibold text-xl mx-6">My 2023 Job Search</div>
            <div className=" h-12 w-[428px] mx-4" >
                <div className="flex  justify-between" >

                    <span className="flex items-center border-[1px] border-solid border-[#DDDDDD] h-12 w-80 rounded-lg">
                        <label className="mx-3" htmlFor="search"><CiSearch className="text-blackF text-2xl" /></label>
                        <input
                            className=" placeholder:text-gray500  placeholder:text-base focus:outline-none  h-11 w-72"
                            type="text"
                            placeholder="Search"

                        />
                    </span>
                    
                    <button className="btn" >Create</button>
                </div>
            </div>
        </div>
    );
}