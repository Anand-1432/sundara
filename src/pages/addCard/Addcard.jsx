import React from 'react'
import Footer from '../../components/footer/Footer'
import './addcard.scss'
import men from '../../assets/men1.png'
import { Link } from 'react-router-dom'

const Addcard = () => {
  return (
    <>
      <div className='container AddCards'>
        <div className='row'>
          <div className='col-lg-6 col-xl-6 col-md-6'>
           <img id='imgs' src={men} alt="" />
          </div>
          <div className='col-lg-6 col-xl-6 col-md-6 contents'>
            <h2 className='title'>faux hawk</h2>
            <p className='pri'>$8000</p>
            <p className='cont'>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas expedita molestiae voluptatum dolore
              iusto accusantium, mollitia, illo saepe a sed aliqua <br /> <br />
              nemo officiis, fugiat nobis doloribus quia magnam.
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas expedita molestiae voluptatum dolore <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas expedita molestiae voluptatum dolore
              iusto accusantium, mollitia, illo saepe a sed aliqua
              nemo officiis, fugiat nobis doloribus quia magnam.
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas expedita molestiae voluptatum dolore <br />
            </p>
            <Link to='/addcard2' className='btn'>Add to Card</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Addcard