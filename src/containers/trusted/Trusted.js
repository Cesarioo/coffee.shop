import React from 'react'
import style from './trusted.module.css'
import Brands from '../../components/brands/Brands'
import Nescafe from '../../assets/Nescafe.png'
import nespresso from '../../assets/nespresso.png'
import chocapic from '../../assets/chocapic.png'

const Trusted = () => {
    return (
        <div className={style.section_padding} id="Trusted">
            <div className={style.trusted} >
                <div className={style.trusted_text} >
                    <h2> Theses Brands trust us choosed to trust us.</h2>
                    <h3>  Why dont you ?</h3>
                    <p> Theses are worldwide brands trusted by a lot of people. <br></br> They put they descisions in our bare hands. <br></br>
                        You should trust us.</p>
                </div >
                <div className={style.trusted_brands}>
                    < Brands image={Nescafe} number="36,564" />
                    < Brands image={nespresso} number="21,272" />
                    < Brands image={chocapic} number="115,005" />
                </div>
            </div>


        </div >
    )
}

export default Trusted
