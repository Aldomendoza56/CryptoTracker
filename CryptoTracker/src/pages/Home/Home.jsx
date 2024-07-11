import React from 'react'
import '../Home/Home.css'
function Home() {
  return (
    <div className='home'>
        <div className="hero">
        <h1> Largest <br/> Crypto Marketplace </h1>
            <p>Welcome to the world's largest cryptocurrency marketplace
                Sign up to explore more about cryptos.
            </p>
            <form>
                <input type='text' placeholder='Search crypto..' />
                <button type='Submit'>Search</button>
            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:"center"}}>24H Change</p>
                <p>Market cap</p>
            </div>
        </div>
    </div>
  )
}

export default Home
