import React from 'react'
import Footer from '../../components/footer/Footer'
import NearMencard from '../../components/near_men_card/NearMencard'
import './nearmen.scss'

const Nearmen = () => {


    const Arr0 = [
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
            <div className='salonCon'>Hair Cut</div>

            <div className='mapCon'>
                {Arr0.map((value, index) => {
                    return (
                        <NearMencard
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

export default Nearmen