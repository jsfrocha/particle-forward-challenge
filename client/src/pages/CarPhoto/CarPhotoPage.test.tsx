import React from 'react';
import {act, render, waitFor} from "@testing-library/react";
import { createMemoryHistory } from 'history';
import CarPhotoPage from "./CarPhotoPage";
import { Router } from "react-router-dom";

describe('CarPhotoPage Tests', () => {
    test('Renders the correct route', async () => {

        const history = createMemoryHistory();
        const route = '/car/1';

        history.push(route);

        // @ts-ignore
        jest.spyOn(window, "fetch")

        render(
            <Router history={history}>
                <CarPhotoPage/>
            </Router>
        )

    })
})
