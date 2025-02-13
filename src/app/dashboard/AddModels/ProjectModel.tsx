"use client"

import React, { useState } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FaPlus } from 'react-icons/fa'
import Form from 'next/form';
import createProject from '@/app/utls/actions/create/createProjects';


const ProjectModel = () => {

    const [isOpen, setIsOpen] = useState(false)

    function open() {
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md flex gap-2 items-center bg-blue-700 py-2 px-4 text-sm font-medium text-white hover:bg-blue-900 duration-200"
      >
        <FaPlus size={15} />
        Add Project
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-gray-900 p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 text-center font-medium text-white">
                Add Project
              </DialogTitle>
              <Form action={createProject} className='flex flex-col gap-2'>

                <div>
                    <p className="text-sm/6 font-medium text-white">Name</p>
                    <input type='text' id='title' name='title' placeholder='Enter Project Title' className='mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white' />
                </div>

                <div>
                    <p className="text-sm/6 font-medium text-white">Tags</p>
                    <input type='text' name='tags' placeholder='Enter Tags' className='mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white' />
                </div>

                <div>
                    <p className="text-sm/6 font-medium text-white">Description</p>
                    <textarea rows={4} name='description' placeholder='Enter Project Description' className='mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white' />
                </div>

                <div>
                    <p className="text-sm/6 font-medium text-white">Profile Image Link</p>
                    <input type='text' name='projectImages' placeholder='Enter Project Image Link' className='mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white' />
                </div>

                <div className="mt-4 flex justify-center">
                    <Button type='submit'
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                    >
                    Submit
                    </Button>
                </div>
              </Form>
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ProjectModel