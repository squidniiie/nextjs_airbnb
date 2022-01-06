import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../static/Main.css'
import SearchPage from './SearchPage'

const Main = () => {
    return (
        <div>
            <Header />
            <Banner />
            <SearchPage />
            <Footer />
        </div>
    )
}

export default Main
