/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button, Dialog, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { signIn, signOut } from "next-auth/react"
import { useState } from "react"
import { FaGithub, FaGoogle } from "react-icons/fa";
import {motion} from "framer-motion";


const Navbar = ({session}: {session: any}) => {

    const PDFFileURL = 'http://localhost:3000/functionalsample.pdf'

    const [isOpen, setIsOpen] = useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }
    
    const handeDownload = (url: any) => {
        const filename = url.split('/').pop();
          const aTag = document.createElement('a')
          aTag.href = url
          aTag.setAttribute('download', filename)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove();
      }
    

  return (
    <div className="justify-center flex bg-gray-950 text-white">
        <div className="container">
            <div className="justify-between flex items-center md:text-lg text-white text-base md:py-10 py-6 md:px-0 px-5">
                <Link href={'/'} className="flex items-center gap-2">
                    <Image src={'/icons/logo.svg'} alt="logo" width={50} height={50} />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        Francis &nbsp;
                        <span className='sm:block hidden'>| Portfolio</span>
                    </p>
                </Link>

                <div className='flex justify-center items-center text-center md:gap-10 gap-4 capitalize list-none'>
                    <div className="md:flex gap-10 hidden">
                        <Link href={'/projects'} className="flex items-center gap-2">Projects</Link>
                        <Link href={'/blog'} className="flex items-center gap-2">Blogs</Link>
                        <Link href={'/contact'} className="flex items-center gap-2">Contact Me</Link>
                        {session ? (<motion.button onClick={() => handeDownload(PDFFileURL)} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type:"spring", stiffness: 200, damping: 7}} className="bg-orange-600 lg:block hidden px-5 py-2 rounded-xl hover:bg-orange-700">Download CV</motion.button>) : ""}
                    </div>
                    <div className="flex gap-2 md:hidden">
                        <Link href={'/projects'} className="flex items-center gap-2">Projects</Link>
                        <Link href={'/blog'} className="flex items-center gap-2">Blogs</Link>
                    </div>
                    {
                        session ? (
                            <>
                                <Menu>
                                    <MenuButton>
                                        <Image src={session?.user?.image ? session?.user?.image : "/icons/mobile.png"} alt="i" width={50} height={50} className="rounded-full" />
                                    </MenuButton>

                                    <MenuItems transition anchor="bottom end" className="w-fit origin-top-right rounded-xl border border-white/5 bg-gray-950 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
                                        <MenuItem>
                                            <Link href={"/dashboard"} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                Dashboard
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <div className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                {session?.user?.name}
                                            </div>
                                        </MenuItem>
                                        <MenuItem>
                                            {session?.user?.bio ? <div className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                {session?.user?.bio}
                                            </div>: <div>
                                                    
                                                </div>}
                                        </MenuItem>
                                        <MenuItem>
                                            <Link href={"/projects"} className="group md:hidden flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                Project
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link href={"/blog"} className="group md:hidden flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                Blogs
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link href={"/contact"} className="group md:hidden flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                Contact Me
                                            </Link>
                                        </MenuItem>
                                        <div className="my-1 h-px bg-white/5 md:hidden block" />
                                        <MenuItem>
                                            <button onClick={() => handeDownload(PDFFileURL)} className="group lg:hidden flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                Download CV
                                            </button>
                                        </MenuItem>
                                            <div className="my-1 h-px bg-white/5" />
                                        <MenuItem>
                                            {
                                                session ? (
                                                    <button onClick={open} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                        Login
                                                    </button>
                                                ) : <button onClick={() => signOut()} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                                        Logout
                                                    </button>
                                            }
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </>
                            ) : <Button onClick={open} className="rounded-md bg-blue-600 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-blue-800 duration-200 data-[focus]:outline-1 data-[focus]:outline-white">
                            Login
                        </Button> 
                    }
                
                </div>
            </div>

            <Dialog open={isOpen} as="div" className="relative z-50" onClose={close}>
                <div className="fixed inset-0 bg-black/50 backdrop-blur-md" />
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <DialogPanel
                    transition
                    className="w-full max-w-sm rounded-xl bg-white/80 dark:bg-gray-900/80 shadow-xl p-6 backdrop-blur-xl duration-300 ease-out transform data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                    <DialogTitle as="h3" className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                        Please Login
                    </DialogTitle>

                    <div className="flex justify-center items-center gap-6 my-6">
                        <button
                        className="flex items-center justify-center bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200 rounded-full p-3 transition"
                        onClick={() => signIn("github", { callbackUrl: "http://localhost:3000/dashboard" })}
                        >
                        <FaGithub size={32} className="text-gray-900 dark:text-white" />
                        </button>

                        <button
                        className="flex items-center justify-center bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 duration-200 rounded-full p-3 transition"
                        onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/dashboard" })}
                        >
                        <FaGoogle size={32} className="text-gray-900 dark:text-white" />
                        </button>
                    </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    </div>
  )
}

export default Navbar