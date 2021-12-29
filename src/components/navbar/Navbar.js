import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo from '../logo/Logo'
import style from './navbar.module.css'

const Menu = () => (
    <>
        <a href="#Trusted"> Associates </a>
        <a href="#Social"> They Think </a>
        <a href="#CTA"> Why wait ? </a>
        <a href="#Footer"> About </a>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className={style.navbar}>
            <div className={style.navbar_items}>
                <div className={style.navbar_items_logo}>
                    < Logo />
                </div>
                <div className={style.navbar_items_links}>
                    < Menu />
                </div>
                <div className={style.navbar_items_hiddentext}>
                    <a href="#"> Welcome ! </a>
                </div>
            </div>
            <div className={style.gpt3__navbar_menu}>
                {toggleMenu
                    ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className={style.gpt3__navbar_menu_container}>
                        <div className={style.gpt3__navbar_menu_container_links}>
                            < Menu />
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Navbar
