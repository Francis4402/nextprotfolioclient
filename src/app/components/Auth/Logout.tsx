"use client"

import { Button } from '@headlessui/react'
import { signOut } from 'next-auth/react'


const Logout = () => {
  return (
    <Button
        onClick={() => signOut()}
        className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 cursor-pointer data-focus:bg-gray-100 data-focus:outline-hidden"
        >
        Logout
    </Button>
  )
}

export default Logout