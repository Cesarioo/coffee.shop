import React from 'react'
import Image from 'next/image'
import style from './opinion.module.css'
import imageLoader from '../../../loader'
const Opinion = ({ image, text }) => {
    return (
        <div className={style.opinion}>
            <div className={style.opinion_image}>
                <Image src={image} loader={imageLoader} alt="a very nice person" />
            </div>
            <div className={style.opinion_text}>
                <p> {text}</p>
            </div>
        </div>
    )
}

export default Opinion
