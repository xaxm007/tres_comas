import React from 'react'
import './Home.css'
import Contacts from '../Contacts/Contacts'
import Photos from '../Photos/logo.png'
import Pic from '../Photos/search.png'

const Home = () => {
  return (
    <>
        <section className = "main-container">
            <div className='logo'>
                <img src={Photos} alt="Site" width="200px" align="left"/>
            </div>
            <div>
                <ul className="nav1">
                    <li className="navitem">
                        <a className="navlink" href="/buy">Buy</a>
                    </li>
                    <li className="navitem">
                        <a className="navlink" href="/sell">Sell</a>
                    </li>
                    <li className="navitem">
                        <a className="navlink" href="/rent" >Rent</a>
                    </li>
                    <li className="navitem">
                        <a className="navlink" href="/aboutus">About Us</a>
                    </li>
                </ul>
            </div>
            <div className = "search-bar">
                <form action="">
                    <input type="text" placeholder="Search"></input>
                    <button><img src={Pic} alt="Scan"/></button>
                </form>
            </div>
        </section>
        <Contacts />
        
    </>
  )
}

export default Home