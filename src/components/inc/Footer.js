import React from 'react'
import { Link } from 'react-router-dom'

 const Footer = () => {
  return (
    <div>
        <section className='footer bg-dark text-white mt-20'>
            <div>
                <div className='row'>
                    <div className='col-md-4'>
                        <h5> Company Information</h5>
                        <hr></hr>
                        
                        <p className=' text-white'>
                            All Trademarks and Logos used throught the site are property of their respective owners.
                            <br></br>
                            All images used on the website have been used Courtesy Pixabay.com

                        </p>
                    </div>
                    <div className='col-md-4'>
                        {/* <h5>Quiks Links</h5>
                        <hr></hr>

                        <Link to="/">Home</Link>
                          <Link to="/">About</Link>
                         <Link to="/">Help</Link>
                          */}
                        <h5>Benefit of solve</h5>
                        <hr></hr>
                        <div>Crossword Puzzle Game give you a relex.</div>
                        <div>Improve your Thinking  Capacity</div>
                        <div>Improve your Linux Knowledge</div>
                         





                    </div>
                    <div className='col-md-4'>
                        <h5>Contect Information</h5>
                        <hr></hr>
                        <h6>Keen and Able Computers Pvt. Ltd.</h6>
                        <div className='text-whte'>B149, Ground Floor, Sector 63, Noida, India - 201301 </div>
                        <div className='text-whte'> +91 120 421 7213</div>
                        <div className='text-whte'> </div>




                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer;