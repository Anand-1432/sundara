import React from 'react'
import Footer from '../../components/footer/Footer'
import './blog.scss'

import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.jpg'
import b3 from '../../assets/b3.jpg'

const Blog = () => {
    return (
        <>
        <div className='blog'>
            <div className='blogCon'>Our Blogs</div>

            <div className='serbtn'>
                <button className='btn btn-primary serbtn'>Add New Blog</button>
            </div>


            <div className='blog'>
        <h2>Our Blogs</h2>
        <div className='container salon'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4'>
              <div className='content'>
                <img src={b1} alt="" />
                <h5>Men Haircut New Style</h5>
                <p> dicta, earum odit illum ellore quos esse obcaecati perspiciatis?
                  Dignissimos aliquid voluptates quidem</p>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4'>
              <div className='content'>
                <img src={b2} alt="" />
                <h5>Eyebrow Shapes</h5>
                <p> dicta, earum odit illum ellore quos esse obcaecati perspiciatis?
                  Dignissimos aliquid voluptates quidem</p>
              </div>
            </div>

            <div className='col-xl-4 col-lg-4'>
              <div className='content'>
                <img src={b3} alt="" />
                <h5>Top 5 Benefits Facial</h5>
                <p> dicta, earum odit illum ellore quos esse obcaecati perspiciatis?
                  Dignissimos aliquid voluptates quidem</p>
              </div>
            </div>
          </div>
        </div>
      </div>

</div>

            <Footer/>
        </>
    )
}

export default Blog