import React from 'react'
import Image from 'next/image'
import imageLoader from '../../../loader'

import style from './cta.module.css'
import coffee2 from '..//..//assets//coffee2.png'
const Cta = () => {
    return (
        <div className={style.cta} id="CTA">
            <div className={style.cta_text_headers}>
                <h2> What are you waiting for ?</h2>
                <h3> This is now ! <br></br> Grab your places <br></br> Before its too late</h3>
            </div>
            <div className={style.cta_image}>
                < Image src={coffee2} loader={imageLoader} alt=" a nice coffee image" />
            </div>
        </div >
    )
}

export default Cta
