import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Search from './Search';

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    const history = useHistory();
    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] mb-1">
            <img className="object-right-top" src="https://www.hdnicewallpapers.com/Wallpapers-Download/Beautiful-Sunset-in-Desert-4K-Wallpaper"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute bottom-12 lg:bottom-40 w-full text-gray-50 text-center font-bold">
                <p className="text-2xl md:text-4xl lg:text-5xl font-Montserrat text-gray-50">Not sure where to go? Perfect.</p>
                <button onClick={() => history.push("/search")} className="border rounded-full p-1 px-3 m-2 text-gray-700 lg:text-lg font-bold bg-gray-50 opacity-60 shadow-md hover:shadow-xl active:scale-80 transition duration-500 font-Quicksand">I'm flexible</button>
            </div>
            <div className="text-center font-Quicksand p-2 grid grid-cols-1 mx-10">
                {showSearch && <Search />}
                <button onClick={() => setShowSearch(!showSearch)} className='pt-1 hover:bg-red-400 cursor-pointer active:scale-90 transform transition duration-500 hover:scale-90 hover:shadow-xl rounded-full shadow-lg p-2'>
                    {showSearch ? "Hide" : "Search Dates"}
                </button>
            </div>
        </div>
    )
}

export default Banner;
