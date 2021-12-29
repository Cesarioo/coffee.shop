import React from 'react';
import Image from 'next/image'

import coffee from '../../assets/coffee.png';
import style from './header.module.css'
import imageLoader from '../../../loader';
const Header = () => {
    return (
        <div className={style.header} >
            <div className={style.header_text} className={style.section_padding}>
                <h1> The best coffee <br></br> that feels like you're home</h1>
                <div className={style.header_text_button}>
                    <button type="button"> <a href="https://www.google.com"><p> Visit us now !</p>  </a> </button>
                </div>
            </div>
            <div className={style.header_image}>
                <Image src={coffee} loader={imageLoader} alt="a nice coffee" />
            </div>
        </div >
    )
}

export default Header
