import Image from "next/image"
import Link from "next/link"
import logo from "../assets/icons/logo.svg"

const Navbar = () => {
  return (
    <div className="justify-center flex">
        <div className="container">
            <div className="justify-between flex items-center md:text-lg text-white text-base md:py-10 py-6 md:px-0 px-5">
                <Link href={'/'} className="flex items-center gap-2">
                    <Image src={logo} alt="logo" className='w-9 h-9 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        Francis &nbsp;
                        <span className='sm:block hidden'>| Portfolio</span>
                    </p>
                </Link>

                <div className='md:flex hidden justify-center text-center gap-16 capitalize list-none'>
                    <Link href={'/projects'}>
                        <h1 className="hover:text-gray-200 duration-200">PROJECTS</h1>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar