import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import './schedule.scss'

import st1 from '../../assets/st1.png'

const Schedule = () => {

  const Stylish = [
    { id: 1, name: "Name 1" },
    { id: 2, name: "Name 2" },
    { id: 3, name: "Name 3" },
    { id: 4, name: "Name 4" },
    { id: 5, name: "Name 5" },
    { id: 6, name: "Name 6" },
    { id: 7, name: "Name 7" },
  ]

  return (
    <>
      <div className='schedule'>

        <div className='table-responsive'>
          <div className='scheduleHead'>
            <span>Schedule Your Appointment</span>
            <select name="" id="">
              <option value="">January</option>
              <option value="">January</option>
              <option value="">January</option>
              <option value="">January</option>
              <option value="">January</option>
              <option value="">January</option>
              <option value="">January</option>
            </select>
          </div>
        </div>

        <div className='table-responsive'>
          <div className='TextConatiner'>
            <p className='slot'>Available Slot</p>

            <section className='days'>
              <span className='day'>Morning</span>
              <button className='btn' style={{ marginLeft: '41px' }}>10:00 AM</button>
              <button className='btn'>11:00 AM</button>
              <button className='btn'>11:30 AM</button>
            </section>

            <section className='days'>
              <span className='day'>Afternoon</span>
              <button className='btn'>12:00 PM</button>
              <button className='btn'>01:00 PM</button>
              <button className='btn'>02:00 PM</button>
              <button className='btn'>03:00 PM</button>
              <button className='btn'>03:30 PM</button>
              <button className='btn'>04:00 PM</button>
            </section>

            <section className='days'>
              <span className='day'>Evening</span>
              <button className='btn' style={{ marginLeft: '45px' }}>05:00 PM</button>
              <button className='btn'>05:30 PM</button>
              <button className='btn'>06:00 PM</button>
              <button className='btn'>07:00 PM</button>
              <button className='btn'>07:30 PM</button>
            </section>
          </div>
        </div>


        <div className='table-responsive'>
          <div className='stylish'>
            <p>Select Your Stylish</p>

            {
              Stylish.map((value, index) => {
                return (
                  <button key={value.id} className='select'>
                    <img src={st1} alt="" />
                    <section>{value.name}</section>
                  </button>
                );
              })
            }
          </div>
        </div>

        <div className='cont'>
          <Link to='/schedule' className='btn'>Continue</Link>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Schedule