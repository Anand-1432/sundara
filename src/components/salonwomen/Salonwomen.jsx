import React from 'react'
import './salonwomen.scss'

const Salonwomen = (props) => {
    return (
        <>
            <div className="card Womencard" style={{ width: '18rem', display: 'inline-block' }}>
                <img className="card-img-top" src={props.img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.data}</p>
                    <a href="/" className="btn btn-primary">Add To Card</a>
                </div>
            </div>
        </>
    )
}

export default Salonwomen