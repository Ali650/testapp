import React from 'react'
import JRE from './img/JRE.jpg'
import MFM from './img/MFM.jpg'
import Playlist from './Playlist'
import './Container.css'

const container = ()=> {
    return(
        <div className="container">
            <p className="container-header">Playlists</p>
            <Playlist
             img={JRE}
             author="JoeRogan"
             name="JRE MMA Show #75 with Dan Hardy"
             details="Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy."
             liked="84"
             playedBy="96"
             progress="48" />
            <Playlist
            img={MFM}
            author="myfavoritemurder"
            name="MFM Minisode 13"
            details="This week’s hometowns include serial killer connections and an acid trip discovery."
            liked="43"
            playedBy="87"
            progress="79" />
            <Playlist
             img={JRE}
             author="JoeRogan"
             name="JRE MMA Show #75 with Dan Hardy"
             details="Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy."
             liked="84"
             playedBy="96"
             progress="48" />
        </div>
    )
}

export default container