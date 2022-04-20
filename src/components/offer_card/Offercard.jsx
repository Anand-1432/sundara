import React from 'react'
import './offercard.scss'

const Offercard = (props) => {
    return (
        <>
            <div className="card offercard" style={{ width: '18rem', display: 'inline-block' }}>
                <img className="card-img-top" src={props.img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.data}</p>
                    <a href="/" className="btn btn-primary">edit</a>
                    <a href="/" className="btn btn-dark">delete</a>
                </div>
            </div>
        </>
    )
}

export default Offercard