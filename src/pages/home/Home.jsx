import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import './home.scss'
import p1 from '../../assets/p1.jpg'
import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.jpg'
import b3 from '../../assets/b3.jpg'
import e1 from '../../assets/e1.jpg'
import e2 from '../../assets/e2.png'
import e3 from '../../assets/e3.jpg'
import r2 from '../../assets/r2.png'
import r3 from '../../assets/r3.png'
import r4 from '../../assets/r4.png'
import r5 from '../../assets/r5.png'
import r6 from '../../assets/r6.png'
import r7 from '../../assets/r7.png'
import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import calendar from '../../assets/calendar.png'
import icon from '../../assets/Icon.jpg'
import icon1 from '../../assets/Icon1.jpg'
import shaver from '../../assets/shaver.png'
import p2 from '../../assets/image.jpg'
import Slider from '../../components/slider/Slider';

import r1 from '../../assets/r1.png'

const Home = () => {
  return (
    <>
      <Carousel 
        img1={r1}
        img2={r1}
        img3={r1}
      />

      <div className='container mainCon'>
        <div className='row features'>
          <div className='col-xl-6 col-lg-6'>
            <h2>Our Best Features</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum blanditiis aliquam soluta quae. Qui cum corrupti dolores autem, ratione expedita molestias eveniet, iste provident officiis incidunt? Officiis unde hic impedit!
              Non temporibus dolor, dolores repellendus dicta, earum odit illum eligendi magnam magni officia suscipit, totam laudantium quibusdam beatae quia et sequi ipsum atque nemo ullam! Dolore quos esse obcaecati perspiciatis?
              Dignissimos aliquid voluptates quidem porro magni quia in expedita optio maiores, neque quisquam, error dolorum minus ea architecto reiciendis? Alias itaque earum suscipit eum delectus nobis officia quasi. Harum</p>

            <div className='container-fluid part'>
              <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6'>
                  <img src={calendar} alt="" />
                  Easy way to Appointment
                </div>
                <div className='col-md-6 col-lg-6 col-xl-6'>
                  <img src={shaver} alt="" />
                  Best Team
                </div>
              </div>
            </div>

            <div className='container-fluid part'>
              <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6' id='p1'>
                  <img src={icon1} alt="" />
                  Good discount
                </div>
                <div className='col-md-6 col-lg-6 col-xl-6'>
                  <img src={icon} alt="" />
                  Happy Customer
                </div>
              </div>
            </div>

          </div>
          <div className='col-xl-6 col-lg-6 imgsection'>
            <img src={p1} alt="" />
          </div>
        </div>
      </div>

      <div className='container-fluid about'>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 imgsection1'>
            <img src={p2} alt="" />
          </div>
          <div className='col-xl-6 col-lg-6 aboutdata'>
            <h4 id='head1'>About us</h4>
            <h2>Welcome To Shop</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum blanditiis aliquam soluta quae. Qui cum corrupti dolores autem, ratione expedita molestias eveniet, iste provident officiis incidunt? Officiis unde hic impedit!
              Non temporibus dolor, dolores repellendus dicta, earum odit illum eligendi magnam magni officia suscipit, totam laudantium quibusdam beatae quia et sequi ipsum atque nemo ullam! Dolore quos esse obcaecati perspiciatis?
              Dignissimos aliquid voluptates quidem porro magni quia in expedita optio maiores, neque quisquam, error dolorum minus ea architecto reiciendis? Alias itaque earum suscipit eum delectus nobis officia quasi. Harum
            </p>
          </div>
        </div>
      </div>

      <div className='container mainCard'>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-6 cardContainer'>
            <div className='card'>
              <img src={c1} alt="" />
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-6 cardContainer'>
            <div className='card'>
              <img src={c2} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Slider />

      <div className='gallery'>
        <h2>Salon Gallery</h2>
        <div className='container salon'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4'> <img src={r7} alt="" /></div>
            <div className='col-xl-4 col-lg-4'> <img src={r2} alt="" /></div>
            <div className='col-xl-4 col-lg-4'> <img src={r3} alt="" /></div>
          </div>
        </div>
        <div className='container salon'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4'> <img src={r4} alt="" /></div>
            <div className='col-xl-4 col-lg-4'> <img src={r5} alt="" /></div>
            <div className='col-xl-4 col-lg-4'> <img src={r6} alt="" /></div>
          </div>
        </div>
      </div>

      <h2 className='h2'>Our Expert Team</h2>
      <div className='team'>
              <div className=' content'>
                <img src={e1} alt="" />
                <h5>Emma Watson</h5>
                <p>haircut & massage specialist</p>
              </div>

              <div className='content'>
                <img src={e2} alt="" />
                <h5>James Franco</h5>
                <p> dicta, earum odit</p>
              </div>

              <div className='content'>
                <img src={e3} alt="" />
                <h5>San Watson</h5>
                <p> dicta, earum</p>
              </div>
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

    </>
  )
}

export default Home