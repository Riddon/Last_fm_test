import React from 'react';
import './ArtistInfo.css';

const ArtistInfo = ({artistName, artistImage, artistTags, artistDescr}) => {

    return (
        <>
            <div className="artist-info__container">
                <h2 className="artist-info__title">
                    {artistName}
                </h2>

                <div className="artist-info__image">
                    <img src={artistImage['#text']} alt={artistName}/>
                </div>

                <div className="artist-info__tags">
                    {
                        artistTags.map((item, i) => (
                            <p key={i}>
                                {item.name}
                            </p>
                        ))
                    }
                </div>

                <p className="artist-info__description">
                    {artistDescr}
                </p>
            </div>
        </>
    );
};

export default ArtistInfo;