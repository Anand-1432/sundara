import React from 'react'
import './bookhistory.scss'

import SearchIcon from '@material-ui/icons/Search';

const Bookhistory = () => {


    const tableData = [
        {
            id: 1,
            name: 'anand'
        },
        {
            id: 2,
            name: 'anand'
        },
        {
            id: 3,
            name: 'anand'
        },
        {
            id: 4,
            name: 'anand'
        },
        {
            id: 5,
            name: 'anand'
        },
        {
            id: 6,
            name: 'anand'
        },
        {
            id: 7,
            name: 'anand'
        },
        {
            id: 8,
            name: 'anand'
        },
        {
            id: 9,
            name: 'anand'
        },
        {
            id: 10,
            name: 'anand'
        },
    ]



    return (
        <>

            <div className='conatiner bookdate'>
                <div className='row'>
                    <div className='col-xl-4 col-lg-4 boxCon'>
                        <div className='box1'>
                            <p>Booking History</p>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 boxCon'>
                        <div className='box2'>
                            <div>
                                <select name="" id="">
                                    <option value="">DD</option>
                                </select>
                                <select name="" id="">
                                    <option value="">MM</option>
                                </select>
                                <select name="" id="">
                                    <option value="">YY</option>
                                </select>
                            </div>
                            <select name="" id="status">
                                <option value="">Status</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 boxCon'>
                        <div className='box3'>
                            <form class="form-inline">
                                <input id='sea' class="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn"><SearchIcon /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className='table-responsive'>
                <table className='fulldata'>
                    <thead>
                        <th>Customer Name</th>
                        <th>Refer id</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </thead>
                    <tbody>

                        {tableData.map((value, index) => {
                            return (
                                <tr>
                                    <td>Anand Rao Gaikwad</td>
                                    <td>213132</td>
                                    <td>3:00 Pm</td>
                                    <td>300</td>
                                    <td>Done</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Bookhistory