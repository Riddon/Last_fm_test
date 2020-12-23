import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import TrackSearchForm from "../../DataEntry/TrackSearchForm/TrackSearchForm";
import TrackList from "../../DataDisplay/TrackList/TrackList";
import * as trackActions from "../../../actions/trackActions";

const TrackPage = () => {
    const dispatch = useDispatch();
    const trackList = useSelector(state => state.trackReducer.trackInfo);

    const showTrack = (track) => {
        dispatch(trackActions.getTrack(track));
    };

    return (
        <>
            <div className="container">
                <TrackSearchForm handlerSubmit={showTrack}/>
                <TrackList trackList={trackList}/>
            </div>
        </>
    );
};

export default TrackPage;