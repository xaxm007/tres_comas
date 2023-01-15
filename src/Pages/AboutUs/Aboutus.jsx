import React, { Fragment } from 'react'

const Aboutus = () => {
  return(
    <>


<section className='About Us'>

    <div className='row'>
        <div className="coloumn">
            <div className="about-img"></div>
         </div>
            <div className="coloumn">
            <div className="tabs">
                <div className="single-tab">
                    <h2> Our Info</h2>
                </div>
                <div className="single-tab">
                    <h2> Sales</h2>
                </div>
        </div>
        <div className="tab-content">
          {/*Our Info content*/}
        
        <div className="content">
            <h2>About Us</h2>
                <p>We are an e-commerce site which helps people to buy their desire plot at convinient price.
                  We help people to select the best plot for them.  
                </p>
        </div>
        
          {/*Our Sales content*/}
          <div className="content">
            <h2>Our Plot Sales</h2>
                <p>
                </p>
           <div className="Sales-row">
            <div className="Sales-coloumn">
            <div className="progress-wrap">
                <h3> Buy </h3>
                <div className="progress">
                    <div className="progress-bar">
                        <span>70%</span>
                    </div>
                </div>
            </div>
            </div>
            <div className="Sales-coloumn">
            <div className="progress-wrap">
                <h3> Sell </h3>
                <div className="progress">
                    <div className="progress-bar">
                        <span>80%</span>
                    </div>
                </div>
            </div>
           </div>
           <div className="Sales-coloumn">
            <div className="progress-wrap">
                <h3> Rent </h3>
                <div className="progress">
                    <div className="progress-bar">
                        <span>30%</span>
                    </div>
                </div>
            </div>
            </div>

        </div>
        </div>

        
        </div>
    </div>
    </div>
</section>


    </>
    

  )
}

export default Aboutus