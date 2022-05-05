import React from 'react'
import './bookhistory.scss'

import SearchIcon from '@material-ui/icons/Search';

const Bookhistory = () => {


    const tableData = [
        {
            id: 1,
            name: 'anand',
            time:'12',
            amount:'1234',
            status:'done'
        },
        {
            id: 2,
            name: 'anand',
            time:'12',
            amount:'1234',
            status:'pending'
        },
        {
            id: 3,
            name: 'anand',
            time:'12',
            amount:'1234',
            status:'done'
        },
        {
            id: 4,
            name: 'anand',
            time:'12',
            amount:'1234',
            status:'cancel'
        },
        {
            id: 5,
            name: 'anand',
            time:'12',
            amount:'1234',
            status:'done'
        },
        {
            id: 6,
            name: 'anand',
            time:'12',
            amount:'1234',
            status:'done'
        },
        {
            id: 7,
            name: 'anand',
            time:'12',
            amount:'1234',
            status:'done'
        },
        {
            id: 8,
            name: 'anand',
            time:'12',
            amount:'1234',
            status:'cancel'
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
                            <form className="form-inline">
                                <input id='sea' class="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn"><SearchIcon /></button>
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
                                <tr key={index}>
                                    <td>{value.name}</td>
                                    <td>{value.id}</td>
                                    <td>{value.time}:00 Pm</td>
                                    <td>{value.amount}</td>
                                    {value.status==="done"?
                                    <td id='done'>{value.status}</td>:
                                     value.status==="pending"?
                                     <td id='pending'>{value.status}</td>:<td id='cancel'>{value.status}</td>
                                    }
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