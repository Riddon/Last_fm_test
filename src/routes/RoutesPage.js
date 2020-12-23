import React from 'react';
import {Switch, Route} from "react-router-dom";
import {routes} from '../constants/constRoutes';
import MainPage from "../components/Layouts/MainPage/MainPage";
import TrackPage from "../components/Layouts/TrackPage/TrackPage";
import ArtistPage from "../components/Layouts/ArtistPage/ArtistPage";

const RoutesPage = () => {
    return (
        <Switch>
            <Route exact path={routes.home.href} component={MainPage}/>
            <Route exact path={routes.search.href} component={TrackPage}/>
            <Route exact path={`${routes.artist.href}/:id`} component={ArtistPage}/>
        </Switch>
    );
};

export default RoutesPage;