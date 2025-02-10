/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { signOut } from "next-auth/react"


const Navbar = ({session}: {session: any}) => {
    

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

                    {
                        session ? (
                            <>
                                <Menu>
                                    <MenuButton>
                                        <Image src={session?.user?.image} alt="i" width={50} height={50} className="rounded-full" />
                                    </MenuButton>

                                    <MenuItems transition anchor="bottom end" className="w-fit origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
                                        <MenuItem>
                                            <div className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                {session?.user?.name}
                                            </div>
                                        </MenuItem>
                                        <MenuItem>
                                            <div className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                {session?.user?.email}
                                            </div>
                                        </MenuItem>
                                        <div className="my-1 h-px bg-white/5" />
                                        <MenuItem>
                                            <button onClick={() => signOut()} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                Logout
                                            </button>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </>
                            ) : <Link href={'/login'} className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white">
                            Login
                        </Link> 
                    }
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar