/* eslint-disable @typescript-eslint/no-explicit-any */


import Logout from '@/app/components/Auth/Logout'
import { authOptions } from '@/app/utls/authOptions'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaCross } from 'react-icons/fa'


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    {name: 'Home', href: '/', current: false},
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Projects', href: '/dashboard/projects', current: false },
  { name: 'Create-Project', href: '/dashboard/create-project', current: false },
  { name: 'Blogs', href: '#', current: false },
  { name: 'CreateBlogs', href: '#', current: false },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }
  

export default async function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
    const session = await getServerSession(authOptions);

    if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
    

  return (
    <div>
        <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <Image
                    alt="Your Company"
                    src="/icons/logo.svg"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <Image alt="" src={session?.user?.image ? session?.user?.image : '/icons/mobile.png'} className="size-8 rounded-full" width={100}
                    height={100} />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                        <MenuItem>
                          <p
                            className="block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray-100 cursor-default data-focus:bg-gray-100 data-focus:outline-hidden"
                          >
                            {session?.user?.name}
                          </p>  
                        </MenuItem>
                        <MenuItem>
                            <Logout/>
                        </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <FaBars aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <FaCross aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <Image alt="" src={user.imageUrl} className="size-10 rounded-full" width={100}
                    height={100} />
                </div>
                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white">{session?.user?.name}</div>
                  <div className="text-sm font-medium text-gray-400">{session?.user?.email}</div>
                </div>
                
              </div>
              <div className="mt-3 space-y-1 px-2">
                {/* {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))} */}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
        
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
