import React, { useEffect, useState } from 'react'
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'
import axios from 'axios'
import './Featured.css'

const CryptoCard = () => {

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((res) => {
            setData(res.data)
        }).catch((err) => { console.log(err) })
    }, [])

    if (!data) return null

    return (
        <>
            {data.map(coin => {
                const { image, name, current_price, price_change_percentage_24h, id } = coin
                return <div className="card" key={id}>
                    <div className='top'>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <h5>{name}</h5>
                        <p>${current_price.toLocaleString()}</p>
                    </div>
                    {price_change_percentage_24h < 0 ? (
                        <span className='red'><FiArrowDown className='icon' />{price_change_percentage_24h.toFixed(2)}%</span>)
                        : (<span className='green'><FiArrowUp className='icon' />{data[0].price_change_percentage_24h.toFixed(2)}%</span>)
                    }
                </div>
            })}
        </>
    )
}

export default CryptoCard