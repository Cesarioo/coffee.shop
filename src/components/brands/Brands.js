import React from 'react'
import Image from 'next/image'
import imageLoader from '../../../loader'
import style from './brands.module.css'
const Brands = ({ image, number }) => {
    return (
        <div className={style.brands}>
            <div className={style.brands_logo}>
                <Image src={image} loader={imageLoader} alt="a nice coffee company logo" />
            </div>
            <div className={style.brands_subtext}>
                <p> {number} <br></br>customers worldwide</p>
            </div>
        </div>
    )
}

export default Brands
