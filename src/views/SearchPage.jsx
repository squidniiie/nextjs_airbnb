import React from 'react';
import SearchResult from '../components/SearchResult';
// import '../static/style/SearchPage.css';

function SearchPage() {
    return (
        <div className='px-20'>
            <div className="px-10">
                <h1 className="font-Montserrat text-4xl text-gray-700 pt-1">Stays Nearby</h1>
                <p className="pt-3 font-Quicksand">62 Stays . 24 December to 30 December . 3 Guests</p>
                {/* <button className=' btn btn-ripple'>Cancellation</button>
                <button className=' btn btn-ripple'>Type of place</button>
                <button className=' btn btn-ripple'>Price</button>
                <button className=' btn btn-ripple'>Rooms and Beds</button>
                <button className=' btn btn-ripple'>More Filters</button> */}
            </div>
            <SearchResult className="shadow-lg p-4 "
                img="https://ik.imgkit.net/3vlqs5axxjf/TW/ik-seo/uploadedImages/All_TW_Art/2019/0701/T0701AirbnbLuxe/Airbnb%27s-new-luxury-product-includes-concierge-ser.jpg?tr=w-780%2Ch-440%2Cfo-auto"
                location="Private Stay in South Africa"
                title="Mount Kilimanjaro Modern Eco Home"
                description="6 Guests . 4 Bedrooms . 3 Bathrooms . Wifi . Fireplace . Hot tub . Washer/Dryer . Garage Parking ."
                star="4.9"
                price="$800/night"
                total="$4,800"
            />
            <SearchResult
                img="https://theblondeabroad.com/wp-content/uploads/2021/01/c98972eb-5d22-4c89-9b9f-730ecd90d4ac.jpg"
                location="Haleiwa North Shore Stay"
                title="Relaxing Jungle Home"
                description="3 Guests . 2 Bedrooms . 2 Bathrooms . Wifi . Lanai . Washer/Dryer . Dishwasher . AC ."
                star="4.7"
                price="$500/night"
                total="$3,000"
            />
            <SearchResult
                img="https://a0.muscache.com/pictures/1838032a-2328-47c1-a839-7cd9c2399ef2.jpg"
                location="Serenity in Okinawa"
                title="Treehouse with an Oceanview"
                description="4 Guests . 2 Bedrooms . 2 Bathrooms . Wifi . Rock Garden . Oceanview . Washer/Dryer . Private Beach ."
                star="4.8"
                price="$600/night"
                total="$3,600"
            />
            <br />
        </div>
    )
}

export default SearchPage
