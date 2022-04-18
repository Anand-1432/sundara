import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import './dashboard.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import r2 from '../../assets/cat1.png'
import r3 from '../../assets/cat2.png'
import r4 from '../../assets/cat3.png'
import r5 from '../../assets/cat4.png'
import r6 from '../../assets/cat5.png'
import r7 from '../../assets/cat6.png'
import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.jpg'
import b3 from '../../assets/b3.jpg'
import Card from '../../components/card/Card';

import Banner from '../../assets/Banner.png'

const Dashboard = () => {
    return (
        <>
            <Carousel 
                img1={Banner}
                img2={Banner}
                img3={Banner}
            />

            <div className='gallery'>
                <div className='categoryHead'>
                    <span>Category</span>
                    <button className='btn'>view all category</button>
                </div>
                <div className='container salon category'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-4'>
                            <div>
                                <img src={r2} alt="" />
                                <p>Hair Cut <span><ArrowForwardIcon /></span></p>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                            <div>
                                <img src={r3} alt="" />
                                <p>Kids Haircut <span><ArrowForwardIcon /></span></p>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                            <div>
                                <img src={r4} alt="" />
                                <p>Hair Color <span><ArrowForwardIcon /></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container salon category'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-4'>
                            <div>
                                <img src={r5} alt="" />
                                <p>Bridal <span><ArrowForwardIcon /></span></p>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                            <div>
                                <img src={r6} alt="" />
                                <p>Facial <span><ArrowForwardIcon /></span></p>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                            <div>
                                <img src={r7} alt="" />
                                <p>Spa <span><ArrowForwardIcon /></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='categoryHead'>
                <span>Salon</span>
                <button className='btn'>view all salon</button>
            </div>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

            <div className='blog blogBg'>
                <h2>Blogs</h2>
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

export default Dashboard