import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import AddCoffee from '../Pages/AddCoffee';

const router = createBrowserRouter([{
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: 'add-coffee',
            Component: AddCoffee
        }
    ]
}])

export default router;