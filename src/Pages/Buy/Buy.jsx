import React from 'react'

const  Buy = () => {
  return (
    <>
    <title>Buy/Sell Form Now</title>
    <body>
      <div class="main">
        <div class="fill form">
          <h2>Fill Form here</h2>
            <form id="form" method="post">
              <label>Full Name:</label>
              <br/>
              <input type="text" name="fname" id="name" placeholder="Enter your name"></input>
              <br/>
              <label>E-mail:</label>
              <br/>
              <input type="email" name="email" id="name" placeholder="Enter your email"></input>
              <input type="radio" name="gender" id="male"></input>
              <span id="male">Male</span>
              <input type="radio" name="gender" id="female"></input>
              <span id="female">Female</span>
              <br/><br/>
              <label>Purpose:</label>
              <br/>
              <input type="radio" name="purpose" id="buy"/>
              <span id="buy">Buy</span>
              <input type="radio" name="purpose" id="sell"/>
              <span id="sell">Sell</span>
              <input type="radio" name="puropse" id="rent"/>
              <span id="rent">Rent</span>
              </form>
        </div>
      </div>
    </body>
    </>
  )
}

export default Buy