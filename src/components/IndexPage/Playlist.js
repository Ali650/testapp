import React from 'react'
import liked from './img/liked.svg'
import played from './img/played.svg'
import cloud from './img/cloud.svg'
import play from './img/Play.svg'
import menuIcon from './img/menu.png'
import './Playlist.css'

const playlist = props=> {
    return(
        <div className="playlist">
            <div className="playlist-img-wrapper">
                <img src={props.img} alt="playlist-img" className="playlist-img"/>
                <img src={play} alt="play" className="play-icon"/>
            </div>
            <div className="playlist-content">
                <div className="text-content">
                    <p className="author"> {props.author} </p>
                    <p className="playlist-name"> {props.name} </p>
                    <p className="playlist-details"> {props.details} </p>
                </div>
                <div className="playlist-icons">
                    <div className="playlist-icon liked">
                        <img src={liked} alt="liked by" className="icon-liked"/>
                        <p className="playlist-icon-text liked-by">{props.liked}</p>
                    </div>
                    <div className="playlist-icon played">
                        <img src={played} alt="played by" className="icon-played"/>
                        <p className="playlist-icon-text played-by">{props.playedBy}</p>
                    </div>
                    <div className="playlist-icon cloud">
                        <img src={cloud} alt="" className="icon-cloud"/>
                    </div>
                    <div className="progress">
                        <div className="progress-bar">
                            <div className="progressed" style={{width:props.progress+'%'}} ></div>
                        </div>
                        <p className="ratio">{props.progress}% </p>
                    </div>
                </div>
            </div>

            <img src={menuIcon} alt="" className="menu-icon"/>
            
        </div>
    )
}

export default playlist