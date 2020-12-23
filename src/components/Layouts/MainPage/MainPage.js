import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as topListSongsActions from '../../../actions/topListSongsActions';
import TopListSongs from "../../DataDisplay/TopListSongs/TopListSongs";


const MainPage = () => {

    const dispatch = useDispatch();
    const topList = useSelector(state => state.topListSongsReducer.topListSongs);

    useEffect(()=> {
        dispatch(topListSongsActions.getTopList());
    }, [dispatch]);

    return (
        <>
            <div className="container">
                <TopListSongs topList={topList}/>
            </div>
        </>
    );
};

export default MainPage;