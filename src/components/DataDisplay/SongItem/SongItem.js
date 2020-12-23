import React from 'react';
import {NavLink} from "react-router-dom";
import './SongItem.css';
import {routes} from "../../../constants/constRoutes";

const SongItem = ({song, artist, imageArtist, artistURL}) => {
    return (
        <>
            <li className="top-list-item">
                <div className="top-list-item-container">
                    <div className="top-list-item-image">
                        <img src={imageArtist} alt={song}/>
                    </div>

                    <h2 className="top-list-item-title">
                        {song}
                    </h2>

                    <NavLink className="top-list-item-desc" to={`${routes.artist.href}/${artist}`}>
                        {artist}
                    </NavLink>

                    <a className="top-list-item-link" href={artistURL} target="_blank" rel="noreferrer">
                        Show at Last.fm
                    </a>
                </div>
            </li>
        </>
    );
};

export default SongItem;