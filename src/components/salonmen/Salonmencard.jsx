import React from 'react'
import './salonmencard.scss'

const Salonmencard = (props) => {
    return (
        <>
            <div className="card Mencard" style={{width: '18rem', display:'inline-block'}}>
                <img className="card-img-top" src={props.img} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.data}</p>
                        <a href="/" className="btn btn-primary">Add To Card</a>
                    </div>
            </div>
        </>
    )
}

export default Salonmencard