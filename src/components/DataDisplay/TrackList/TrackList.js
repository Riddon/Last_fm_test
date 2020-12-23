import React from 'react';
import './TrackList.css';
import TrackItem from "../TrackItem/TrackItem";

const TrackList = ({trackList}) => {

    console.log('Track -->', trackList);

    return(
        <>
            <ul className="track-info__list">
                {
                    trackList.map((item,i) => (
                        <TrackItem
                            key={i}
                            songName={item.name}
                            artistName={item.artist}
                        />
                    ))
                }
            </ul>
        </>
    );
};

export default TrackList;