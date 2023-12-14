// import React, { useEffect, useState } from "react";
// import { navLinks } from "../../Data";
// import { HiMenuAlt1, HiX } from "react-icons/hi";
// import MobileNavLinks from "./MobileNavLinks";
// import NavLink from "./NavLink";
// import { motion } from "framer-motion";
// import { database } from "../container/Firebase";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { useLinkClickHandler } from "react-router-dom";


// const Navbar = () => {

//   const history=useNavigate()
//   const handleClick=()=>{
//     signOut(database).then(val=>{
//     console.log(val,"val")
//     history('/login')
//     })
//   }
//   const [toggle, setToggle] = useState(false);
//   const [active, setActive] = useState(null);

 
//   useEffect(() => {
//     const scrollActive = () => {
//       setActive(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", scrollActive);
//     return () => window.removeEventListener("scroll", scrollActive);
//   }, [active]);


//   return (
//     <div
//       className={`${
//         active ? "shadow-lg bg-Solitude" : ""
//       } fixed w-full top-0 left-0 z-20`}
//     >
//       <div>
//         <div
//           className={`${
//             active ? "py-2 transition-all duration-300" : "py-4"
//           } container  mx-auto flex items-center justify-between px-2`}
//         >
//           <div className="flex items-center gap-4">
//             <HiMenuAlt1
//               className="text-3xl sm:hidden cursor-pointer"
//               onClick={() => setToggle(true)}
//             />
//             <div className="text-xl text-Teal uppercase tracking-wide font-bold">
//               IZDE
//             </div>
//           </div>
//           <div className="sm:flex items-center hidden">
//             {navLinks.map((navLink) => {
//               return <NavLink key={navLink.id} {...navLink} />;
//             })}
//           </div>
//           <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray" onClick={handleClick}>
//             Sign Out
//           </button>
//           {/* <NavLink className='nav-link' onClick={clickHandler} to='/login'>
//             Login
//           </NavLink> */}
//           {toggle && (
//             <motion.div
//               initial={{ x: -500, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.3 }}
//               className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
//             >
//               {navLinks.map((navLink) => {
//                 return (
//                   <MobileNavLinks
//                     key={navLink.id}
//                     {...navLink}
//                     setToggle={setToggle}
//                   />
//                 );
//               })}
//               <HiX
//                 className="absolute right-12 top-12 text-3xl cursor-pointer"
//                 onClick={(prev) => setToggle(!prev)}
//               />
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Mentors', href: '#', current: false },
  { name: 'Program', href: '#', current: false },
  { name: 'Sign in', href: '/login', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/src/assets/newlogo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="/src/assets/newuser.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item> */}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

