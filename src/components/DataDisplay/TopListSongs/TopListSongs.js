import React from 'react';
import SongItem from "../SongItem/SongItem";
import './TopListSongs.css';


const TopListSongs = ({topList}) => {

    return (
        <>
            <ul className="top-list">
                {
                    topList.map((item) => (
                        <SongItem
                            key={item.playcount}
                            song={item.name}
                            artist={item.artist.name}
                            imageArtist={item.image[3]["#text"]}
                            artistURL={item.artist.url}
                        />
                    ))
                }
            </ul>
        </>
    );
};

export default TopListSongs;