import React from 'react'
import Chart from '../../components/Chart/Chart';
import Footer from '../../components/footer/Footer'
import './dashboard.scss'
import Bookingcard from '../../components/booking_card/Bookingcard';

import j1 from '../../assets/j1.png';
import j2 from '../../assets/j2.png';
import j3 from '../../assets/j3.png';

import e1 from '../../assets/e1.jpg'
import e2 from '../../assets/e2.png'
import e3 from '../../assets/e3.jpg'

import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.jpg'
import b3 from '../../assets/b3.jpg'

import r2 from '../../assets/cat1.png'
import r3 from '../../assets/cat2.png'
import r4 from '../../assets/cat3.png'
import r5 from '../../assets/cat4.png'
import r6 from '../../assets/cat5.png'
import r7 from '../../assets/cat6.png'
import Categorycard from '../../components/categoryCard/Categorycard';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Dashboard = () => {

    const Arr3 = [
        { id: 1, name: "anand" },
        { id: 2, name: "anand" },
        { id: 3, name: "anand" },
        { id: 4, name: "anand" },
        { id: 5, name: "anand" },
        { id: 6, name: "anand" },
    ]

    const Category = [
        { id: 1, name: "anand" },
        { id: 2, name: "anand" },
        { id: 3, name: "anand" },
        { id: 4, name: "anand" },
        { id: 5, name: "anand" },
        { id: 6, name: "anand" },
    ]


    return (
        <>
            <div className='table-responsive chartBox'>
                <Chart />
            </div>

            <div className='conatiner journey'>
                <div className='row'>
                    <div className='col-xl-4 col-lg-4 boxCon'>
                        <div className='box'>
                            <img src={j1} alt="" />
                            <p>$5,256,00</p>
                            <section>journey profit</section>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 boxCon'>
                        <div className='box'>
                            <img src={j2} alt="" />
                            <p>250</p>
                            <section>Total Customer</section>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 boxCon'>
                        <div className='box'>
                            <img src={j3} alt="" />
                            <p>60</p>
                            <section>Appointment Booked</section>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bookSection'>
                <div className='bookings'>

                    {Arr3.map((value, index) => {
                        return (

                            <Bookingcard
                                key={value.id}
                                name={value.name}
                            />

                        );
                    })}
                </div>
            </div>


            <div className='gallery'>
                <div className='categoryHead'>
                    <span>Category</span>
                    <button className='btn'>view all category</button>
                </div>

                <div className='categoryConatiner'>
                    {Category.map((value, index) => {
                        return (

                            <Categorycard
                                key={value.id}
                                title={value.name}
                            />

                        );
                    })}
                </div>

            </div>


            <div className='gallery dashgallery'>
                <h2>Our Gallery</h2>
                <div className='container salon'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-4'>
                            <span>
                                <img src={r7} alt="" />
                                <button className='btn'><EditIcon /></button>
                            </span>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                            <span>
                                <img src={r6} alt="" />
                                <button className='btn'><EditIcon /></button>
                            </span>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                            <span>
                                <img src={r5} alt="" />
                                <button className='btn'><EditIcon /></button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='container salon'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-4'>
                            <span>
                                <img src={r4} alt="" />
                                <button className='btn'><EditIcon /></button>
                            </span>
                        </div>
                        <div className='col-xl-4 col-lg-4'>
                            <span>
                                <img src={r3} alt="" />
                                <button className='btn'><EditIcon /></button>
                            </span></div>
                        <div className='col-xl-4 col-lg-4'>
                            <span>
                                <img src={r2} alt="" />
                                <button className='btn'><EditIcon /></button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <h2 className='h2'>Our Specialist</h2>
            <div className='team dashTeam'>
                <div className=' content'>
                    <img src={e1} alt="" />
                    <h5>Emma Watson</h5>
                    <p>haircut & massage specialist</p>
                    <button className='btn btn-outline-primary'><EditIcon/></button>
                    <button className='btn btn-outline-dark'><DeleteIcon/></button>
                </div>

                <div className='content'>
                    <img src={e2} alt="" />
                    <h5>James Franco</h5>
                    <p> dicta, earum odit</p>
                    <button className='btn btn-outline-primary'><EditIcon/></button>
                    <button className='btn btn-outline-dark'><DeleteIcon/></button>
                </div>

                <div className='content'>
                    <img src={e3} alt="" />
                    <h5>San Watson</h5>
                    <p> dicta, earum</p>
                    <button className='btn btn-outline-primary'><EditIcon/></button>
                    <button className='btn btn-outline-dark'><DeleteIcon/></button>
                </div>
            </div>



            <div className='blog blogBg dashBlog' style={{ backgroundColor: '#c8f3fb' }}>
                <h2>Blogs</h2>
                <div className='container salon'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-4'>
                            <div className='content'>
                                <img src={b1} alt="" />
                                <h5>Men Haircut New Style</h5>
                                <p> dicta, earum odit illum ellore quos esse obcaecati perspiciatis?
                                    Dignissimos aliquid voluptates quidem</p>
                                <button className='btn btn-primary'>Edit</button>
                                <button className='btn btn-dark'>Delete</button>
                            </div>
                        </div>

                        <div className='col-xl-4 col-lg-4'>
                            <div className='content'>
                                <img src={b2} alt="" />
                                <h5>Eyebrow Shapes</h5>
                                <p> dicta, earum odit illum ellore quos esse obcaecati perspiciatis?
                                    Dignissimos aliquid voluptates quidem</p>
                                <button className='btn btn-primary'>Edit</button>
                                <button className='btn btn-dark'>Delete</button>
                            </div>
                        </div>

                        <div className='col-xl-4 col-lg-4'>
                            <div className='content'>
                                <img src={b3} alt="" />
                                <h5>Top 5 Benefits Facial</h5>
                                <p> dicta, earum odit illum ellore quos esse obcaecati perspiciatis?
                                    Dignissimos aliquid voluptates quidem</p>
                                <button className='btn btn-primary'>Edit</button>
                                <button className='btn btn-dark'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Dashboard