import React from "react";
import '../navbar/header.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'


var openMenu = false
var showMenu2 = function () {
    if (!openMenu) {
        openMenu = true
        document.querySelector('.header__navbar').classList.add('active')
        document.querySelector('.menu-icon').classList.add('fa-times')
        document.querySelector('.menu-icon').classList.remove('fa-bars')
    } else {
        openMenu = false
        document.querySelector('.header__navbar').classList.remove('active')
        document.querySelector('.menu-icon').classList.remove('fa-times')
        document.querySelector('.menu-icon').classList.add('fa-bars')
    }
}


const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className={'header__icon-1'}>
                <i className=" header__icon fa-brands fa-apple"></i>
            </NavLink>
            <div className="menu-icon fa-solid fa-bars" onClick={showMenu2}>
                <ul className="header__navbar">
                    <li>
                        <NavLink to='/Phone'>
                            Điện thoại
                        </NavLink>
                    </li>
                    <li>
                        <Link to='Maytinh'>
                            Máy tính
                        </Link>
                    </li>
                    <li>
                        <Link to='showItems'>
                            Sản phẩm
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Hỗ trợ
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i className=" header__icon fa-solid fa-magnifying-glass"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i className="header__icon fa-solid fa-bag-shopping"></i>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="header__user">
                <div className="header__login"><Link to='Login' style={{color:'white',textDecoration:'none'}}>Sign In</Link></div>
            </div>

        </div>
    )
}

export default Header