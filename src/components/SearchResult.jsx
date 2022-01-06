import React from 'react';
// import '../static/style/SearchResult.css';

function SearchResult(props) {
    const { img, location, title, description, star, price, total } = props;

    return (
        <div className='grid grid-cols-2 gap-20 p-4 m-8 rounded-xl shadow-lg h-50 transform transition duration-500 hover:scale-90 hover:shadow-xl text-gray-700 hover:opacity-50' >
            <img className="rounded-xl relative m-1 w-50 h-50" src={img} objectFit="contain" />
            <div className="grid grid-cols-1 m-4">
                <div>
                    <div className="flex justify-between">
                        <p className="font-semibold font-Montserrat text-xl ">{location}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>

                    </div>
                    <div className='grid grid-cols-1 cursor-pointer'>
                        <div className='text-xl font-Quicksand gap-1 flex justify-start'>
                            <p>{title}</p>
                            <strong>{star}</strong><svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-red-400 mt-1" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg></div>
                        <p>_________</p>
                    </div>
                </div>
                <div className="font-Quicksand">

                    <p>{description}</p>
                    <div className="font-semibold text-right">
                        <h3>{price}</h3>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default SearchResult
