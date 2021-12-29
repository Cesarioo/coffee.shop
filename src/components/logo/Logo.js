import React from 'react'
import logo from '../logo/logo.png'
import Image from 'next/image'
import style from './logo.module.css'
import imageLoader from '../../../loader'

const Logo = () => {
    return (
        <div className={style.logo}>
            <div className={style.logo_image}>
                < Image src={logo} loader={imageLoader} alt="a nice log " />
            </div>
        </div>
    )
}

export default Logo
