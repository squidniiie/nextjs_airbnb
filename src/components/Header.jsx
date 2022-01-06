import React from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'


function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-gray-50 shadow-md px-2 md:px-4">
            <div className="relative flex-center h-20 cursor-pointer my-auto w-20">
                <img src="http://cdn2.hubspot.net/hubfs/325665/Images/airbnb-logo.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            <div className="flex items-center border-1 shadow-lg rounded-full mt-4 mb-4 pr-2">
                <input className="flex-grow pl-5 ml-2 bg-transparent outline-none text-sm md:text-left sm:text-center text-gray-600 placeholder-gray-400 font-Quicksand bg-gray-50" type="text" placeholder="Start your search" />
                <SearchIcon className="hidden md:inline-flex h-8 text-gray-50 bg-red-400 rounded-full p-1 cursor-pointer active:scale-90 transform transition duration-500 hover:scale-90 hover:shadow-xl" />
            </div>
            <div className="flex items-center justify-end space-x-3 text-gray-500">
                <p className="hidden md:inline-flex font-Quicksand">Become a Host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center border-2 p-2 rounded-full cursor-pointer">
                    <MenuIcon className="h-8" />
                    <UserCircleIcon className="h-8 cursor-pointer" />
                </div>

            </div>
            {/* <Image src="https://www.wapititravel.com/blog/wp-content/uploads/2020/11/Quinta-das-Camelias-Ponta-Delgada-Azores-1024x768.jpg.webp"
                    layout="fill"
                /> */}
        </header>
    )
}

export default Header
