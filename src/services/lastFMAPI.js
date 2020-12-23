import axios from 'axios';
import {topListSongsURL, artistURL, trackURL} from '../constants/constURL';
import {APIKey} from '../constants/constKey';

export const getTopListSongs = () => {
    try {
        return axios
            .get(`${topListSongsURL}&api_key=${APIKey}&format=json`)
            .then(res => res);
    } catch (error) {
        return error.response;
    }
};

export const getArtistInfo = (artist) => {
    try {
        return axios
            .get(`${artistURL}${artist}&api_key=${APIKey}&format=json`)
            .then(res => res);
    } catch (error) {
        return error.response;
    }
};


export const getTrackInfo = (song) => {
    try {
        return axios
            .get(`${trackURL}${song}&api_key=${APIKey}&format=json`)
            .then(res => res);
    } catch (error) {
        return error.response;
    }
};

