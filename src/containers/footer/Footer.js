import React from 'react'
import Logo from '../../components/logo/Logo'

import style from './footer.module.css'
const Footer = () => {
    return (
        <div className={style.footer} id="Footer">
            <div className={style.footer_logo}>
                < Logo />
            </div>
            <div className={style.footer_links}>
                <p> Media</p>
                <p> | </p>
                <p> Legal</p>q
                <p> | </p>
                <p> Processor</p>
                <p> | </p>
                <p> Coffee</p>
                <p> | </p>
                <p> About</p>
            </div>
        </div>
    )
}

export default Footer
