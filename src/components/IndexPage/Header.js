import React from 'react'
import refresh from './img/refresh.svg'
import {NavLink} from 'react-router-dom'
import mic from './img/mic.svg'
import download from './img/download.svg'
import headphones from './img/headphones.svg'
import user from './img/User.jpg'
import './Header.css'

const header = ()=> {
    return(
        <header className="header">
            <NavLink to="/jifcast" tag="p" className="logo">jifcast</NavLink>
            <div className="headerEl header-refresh">
                <img src={refresh} alt="" className="header-icon icon-refresh"/>
                <p className="icon-text text-refresh">refresh</p>
            </div>
            <div className="headerEl header-discover">
                <img src={mic} alt="" className="header-icon icon-discover"/>
                <p className="icon-text text-discover">discover</p>
            </div>
            <div className="headerEl header-notification">
                <img src={headphones} alt="" className="header-icon icon-notification"/>
                <div className="notification-num">12</div>
                <p className="icon-text text-notification">notification</p>
            </div>
            <div className="headerEl header-download">
                <img src={download} alt="" className="header-icon icon-download"/>
                <div className="downloads-num">16</div>
            </div>
            <div className="headerEl userName">
                <img src={user} alt="" className="user-img"/>
                <p className="username-text">username</p>
            </div>
            <h2 className="download-text">Downloads</h2>
        </header>
    )
}

export default header