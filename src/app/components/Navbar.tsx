
import { getServerSession } from "next-auth"
import Image from "next/image"
import Link from "next/link"
import { authOptions } from "../utls/authOptions"
import { Button } from "@headlessui/react"


const Navbar = async () => {

    const session = await getServerSession(authOptions);

    console.log(session);
    

  return (
    <div className="justify-center flex">
        <div className="container">
            <div className="justify-between flex items-center md:text-lg text-white text-base md:py-10 py-6 md:px-0 px-5">
                <Link href={'/'} className="flex items-center gap-2">
                    <Image src={'/icons/logo.svg'} alt="logo" width={50} height={50} />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        Francis &nbsp;
                        <span className='sm:block hidden'>| Portfolio</span>
                    </p>
                </Link>

                <div className='md:flex hidden justify-center items-center text-center gap-10 capitalize list-none'>
                    <Link href={'/projects'}>
                        <h1 className="hover:text-gray-200 duration-200">PROJECTS</h1>
                    </Link>
                    <Link href={'/login'} className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white">
                        Login
                    </Link>

                    <Button className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white">Logout</Button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar