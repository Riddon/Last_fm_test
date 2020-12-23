import React from 'react';
import './TrackItem.css';

const TrackItem = ({songName, artistName}) => {

    return (
        <>
            <li className="track-info__list-item">
                <p className="track-info__list-item-title">
                    {songName}
                </p>

                <p className="track-info__list-item-separate-line">
                    -
                </p>

                <p className="track-info__list-item-descr">
                    {artistName}
                </p>
            </li>
        </>
    );
};

export default TrackItem;