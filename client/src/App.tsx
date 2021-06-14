import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import CarPage from "./pages/Car/CarPage";
import CarPhotoPage from "./pages/CarPhoto/CarPhotoPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact strict path={"/car/photo/:photoIdx"}>
                    <CarPhotoPage/>
                </Route>
                <Route exact path={"/car"}>
                    <CarPage/>
                </Route>
                <Route exact path={"/"}>
                    <Redirect to={"/car"}/>
                </Route>
                <Route path={'*'}>
                    <NotFoundPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
