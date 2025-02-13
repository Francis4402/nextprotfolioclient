import type { Metadata } from "next";
import Logout from '@/app/components/Auth/Logout';
import { authOptions } from '@/app/utls/authOptions';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../globals.css";
import NavRoutes from "./components/NavRoutes";
import Link from "next/link";


const navigationLinks = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Projects', href: '/dashboard/projects' },
  { name: 'Blogs', href: '/dashboard/blogs' },
  { name: 'Messages', href: '/dashboard/messages' },
];


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Next js portfolio",
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  
  if (!session) {
    redirect('/');
  }

  return (
    <html lang="en">
      <body>
        <div className="min-h-full">
          <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <Link href={"/"} className="shrink-0 hover:scale-150 duration-200 hover:bg-slate-950 rounded-full">
                    <Image alt="Your Company" src="/icons/logo.svg" width={50} height={50} />
                  </Link>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigationLinks.map((item) => (
                        <NavRoutes key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="-mr-2 flex md:hidden">
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                      <FaBars className="block size-6 group-data-open:hidden" />
                      <FaTimes className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                  </div>
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <Image
                          alt=""
                          src={session?.user?.image || '/icons/mobile.png'}
                          className="size-8 rounded-full"
                          width={100}
                          height={100}
                        />
                      </MenuButton>
                    </div>
                    <MenuItems className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5">
                      <MenuItem>
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          {session?.user?.name}
                        </p>
                      </MenuItem>
                      <MenuItem>
                        <Link href={"/contact"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
                      </MenuItem>
                      <MenuItem>
                        <Logout />
                      </MenuItem>
                    </MenuItems>
                  </Menu>

                  
                </div>
                
              </div>
            </div>
            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigationLinks.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
          <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
