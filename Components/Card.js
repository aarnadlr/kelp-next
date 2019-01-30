import React from 'react'

export default function Card() {
  return (
    <div className='card'>




      <div className="cardContainer">
        <div className="card2">
          <h1>KELP</h1>
          <p>Kelp is a free, customizable trading bot for the Stellar universal marketplace. The software is open-source and can trade any asset. </p>
          <p>Use it to:</p>
          <ul>
            <li>Create liquidity</li>
            <li>Set a spot price</li>
            <li>Make spreads and make markets</li>
            <li>Price and trade your own stable coins</li>
            <li>Mimic orders from other exchanges</li>
          </ul>
          <p className='download'>Download</p>
          <p className='github'>GitHub README</p>
          <p className='getintouch'>Get in touch</p>
        </div>
      </div>


      <style jsx>{`



.cardContainer{
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    z-index: 10;
}
.card2{
    display: inline-block;
    background:white;
    padding: 45px;
    color:#00493f;
    margin:50px;

    width:570px;
    min-height:400px;
   
}

.card2 h1{ 
        font-size: 29px;
        font-weight: 400;
        margin: 0;
        line-height: .8
    }
    .card2 p{  
        margin: 10px 0;
        font-size: 1.2rem;
        line-height: 1.6;
    }
    .card2 ul li{
        font-size: 1.2rem;
        line-height: 1.6;
        margin-left: 1.6rem;
    }
    .card2 .download{
        display:inline-block;
        border: 1px solid black;
        padding:6px 16px;
        margin-top:2rem;
        margin-bottom: 10px;
        transition: all .2s ease;
    }
    .card2.github{
        text-decoration: underline;
    }
    .card2.getintouch{
        margin-bottom: 0;
        text-decoration: underline;
    }



@media only screen and (max-width:530px) {
    .card2{
        margin:20px;
        padding: 25px;
    }
}

.download:hover{
    transform: translateY(-4px);
    background: #498e92;
    color:white;
}



`}</style>
    </div>
  )
}
