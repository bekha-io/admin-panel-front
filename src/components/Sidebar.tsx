import React from 'react'
import classNames from 'classnames';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <header>
                <div className='profile-details'>
                    <div className="profile-image">BI</div>
                    <div className="profile-text">
                        <div className="profile-title">Bekhruz Iskandarzoda</div>
                        <div className="profile-role">Администратор</div>
                    </div>
                </div>

                <nav className='pages'>
                    <NavLink to="/" className={({ isActive }) => classNames("page", isActive && "active")}>Пополнение кошелька</NavLink>
                    <NavLink to="/page-2" className={({ isActive }) => classNames('page', isActive && "active")}>История заявок</NavLink>
                    <NavLink to="/page-3" className={({ isActive }) => classNames('page', isActive && "active")}>Настройки</NavLink>
                </nav>
            </header>



            <footer className='app-description'>
                ХуетаАдмин v1.0.0
            </footer>
        </div>
    )
}

export default Sidebar