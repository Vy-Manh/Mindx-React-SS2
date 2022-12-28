import React from "react";
import '../navbar/header.css'
import {Routes,Route,Link,NavLink} from 'react-router-dom'



const Header = () => {
    return (
        <div className="header">
            <NavLink to="/">
                <i class=" header__icon fa-brands fa-apple"></i>
            </NavLink>
            <ul className="header__navbar">
                <li>
                    <NavLink to='/Phone'>
                        Điện thoại
                    </NavLink>
                </li>
                <li>
                    <Link>
                        Máy tính
                    </Link>
                </li>
                <li>
                    <Link>
                        Phụ kiện
                    </Link>
                </li>
                <li>
                    <Link>
                        Hỗ trợ
                    </Link>
                </li>
                <li>
                    <Link>
                        <i class=" header__icon fa-solid fa-magnifying-glass"></i>
                    </Link>
                </li>
                <li>
                    <Link>
                        <i class="header__icon fa-solid fa-bag-shopping"></i>
                    </Link>
                </li>
            </ul>
            <div className="header__user">
                <div className="header__register">Đăng ký</div>
                <div className="header__login">Đăng nhập</div>
            </div>

        </div>
    )
}

export default Header