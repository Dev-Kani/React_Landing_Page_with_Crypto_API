import React from 'react'
import './Hero.css'
import Crypto from '../../assets/hero-img.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='left' >
                    <p>Buy & Sell Crypto 24/7 using your own funds</p>
                    <h1>Invest in Crypto with your RF</h1>
                    <p>Buy, Sell, and Store hundreds of cryptocurrencies</p>
                    <div className='input-container'>
                        <input type="email" placeholder='enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt="crypto-dashboard-img" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero