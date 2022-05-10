import { FiArrowUp, FiArrowDown } from 'react-icons/fi'
import CryptoCard from './CryptoCard'
import './Featured.css'

const Featured = () => {

    return (

        <div className='featured'>
            <div className='container'>
                <div className='left'>
                    <h2>Explor top Crypto's Like Bitcoin, Ethereum, and Kava Lend</h2>
                    <p>See all available assets: CryptoCurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>
                <div className='right'>
                    <CryptoCard />
                </div>
            </div>
        </div>
    )
}

export default Featured