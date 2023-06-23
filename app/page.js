import Header from '../components/Header';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import Scrolls from '../components/Scrolls'

export default function Home() {
  return (
    <>
      <div className="w-full h-[100px] absolute left-0 top-0 text-gray-950"><Header /></div>
      
      {/* side bar */}
      <div className='bg-[#F9F8F8] w-full md:h-full max-h-fit top-[100px]'>

        <SideBar />
        <SearchBar />
        <Scrolls/>
      </div>

    </>
  )
}
