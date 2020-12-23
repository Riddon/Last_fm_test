import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as artistActions from "../../../actions/artistActions";
import ArtistInfo from "../../DataDisplay/ArtistInfo/ArtistInfo";

const ArtistPage = (props) => {

    const { id } = props.match.params;
    const dispatch = useDispatch();
    const artistData = useSelector(state => state.artistReducer.artistInfo);

    useEffect(()=> {
        dispatch(artistActions.getArtist(id));
    }, [dispatch, id]);

    return (
        <>
            <div className="container">
                {
                    (Object.keys(artistData).length !== 0)
                    ?
                    <ArtistInfo
                        artistName={artistData.name}
                        artistImage={artistData.image[3]}
                        artistTags={artistData.tags.tag}
                        artistDescr={artistData.bio.summary}
                    />
                    :
                    ''
                }
            </div>
        </>
    );
};

export default ArtistPage;