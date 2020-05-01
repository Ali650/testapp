import React from 'react'
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import Instagram from './img/Instagram.svg'
import './InnerPage.css'

const innerPage = ()=> {
    return(
        <div className="innerPage">
            <h1 className="inner-header">This is page 2</h1>
            <p className="description">
            This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. 
            </p>
            <div className="social-icons">
                <a href="https://www.facebook.com" alt="facebook link">
                    <img className="social-icon facebook" src={facebook} alt=""/>
                </a>
                <a href="https://www.twitter.com" alt="twitter link">
                    <img className="social-icon twitter" src={twitter} alt=""/>
                </a>
                <a href="https://www.instagram.com" alt="instagram link">
                    <img className="social-icon instagram" src={Instagram} alt=""/>
                </a>
            </div>
            
        </div>
    )
}

export default innerPage