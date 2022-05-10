import React from 'react'
import './SignUp.css'
import Crypto from '../../assets/trade.png'

const SignUp = () => {
    return (
        <div className='signup'>
            <div className='container'>
                <div className='left'>
                    <img src={Crypto} alt="" />
                </div>
                <div className='right'>
                    <h2>Earn passive income with crypto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro animi incidunt dolorum consectetur dolores ut at. Dolore libero omnis facilis.</p>
                    <div className='input-container'>
                        <input type="email" placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp