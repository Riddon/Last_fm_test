import React, {useState} from 'react';
import './TrackSearchForm.css';

const TrackSearchForm = ({handlerSubmit}) => {
    const [trackName, setTrackName] = useState('');

    const onSubmitEvent = (e) => {
        e.preventDefault();
        handlerSubmit(trackName);
    };

    const handlerChange = (e) => {
        setTrackName(e.target.value);
    };

    return (
        <>
            <form className="track-search_form" onSubmit={onSubmitEvent}>
                <legend className="track-search_title">
                    Find your Track
                </legend>
                <p className="track-search_content">
                    <input
                        className="track-search_input"
                        name="track"
                        type="text"
                        placeholder="Example: Dynamite"
                        onChange={handlerChange}
                        value={trackName}/>
                    <button className="track-search_btn" type="submit">
                        Find
                    </button>
                </p>
            </form>
        </>
    );
};

export default TrackSearchForm;