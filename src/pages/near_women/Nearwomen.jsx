import React from 'react'
import Footer from '../../components/footer/Footer'
import NearWomenCard from '../../components/near_women_card/NearWomenCard'
import './nearwomen.scss'

const Nearwomen = () => {

    const Arr7 = [
        {
            id: 1,
            title: 'Hair color',
            img: 'https://picsum.photos/seed/picsum/500/300',
            data: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 2,
            title: 'Hair color',
            img: 'https://picsum.photos/seed/picsum/500/300',
            data: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 3,
            title: 'Hair color',
            img: 'https://picsum.photos/seed/picsum/500/300',
            data: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 4,
            title: 'Hair color',
            img: 'https://picsum.photos/seed/picsum/500/300',
            data: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
    ]

    return (
        <>
            <div className='womenCon'>Bridal</div>

            <div className='mapCon'>
                {Arr7.map((value, index) => {
                    return (
                        <NearWomenCard
                            key={value.id}
                            img={value.img}
                            title={value.title}
                            data={value.data}
                        />
                    );
                })}
            </div>

         <Footer/>

        </>
    )
}

export default Nearwomen