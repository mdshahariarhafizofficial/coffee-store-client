import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import AddCoffee from '../Pages/AddCoffee';
import CoffeeDetails from '../Components/CoffeeDetails';
import UpdateCoffee from '../Components/UpdateCoffee';
import SingUp from '../Pages/SingUp/SingUp';
import Users from '../Pages/Users';
import SingIn from '../Pages/SingIn/Singin';

const router = createBrowserRouter([{
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            loader: () => fetch('https://coffee-store-server-chi-two-26.vercel.app/coffees'),
            Component: Home,
            hydrateFallbackElement: <p>Loading........</p>
        },
        {
            path: 'add-coffee',
            Component: AddCoffee
        },
        {
            path: 'coffee-details/:id',
            loader: ({params}) => fetch(`https://coffee-store-server-chi-two-26.vercel.app/coffees/${params.id}`),
            Component: CoffeeDetails,
            hydrateFallbackElement: <p>Loading........</p>
        },
        {
            path:'update-coffee/:id',
            loader: ({params}) => fetch(`https://coffee-store-server-chi-two-26.vercel.app/coffees/${params.id}`),
            Component: UpdateCoffee,
            hydrateFallbackElement: <p>Loading........</p>
        },
        {
          path: 'sing-up',
          Component: SingUp
        },{
            path: 'users',
            Component: Users,
            loader: () => fetch('https://coffee-store-server-chi-two-26.vercel.app/users'),
            hydrateFallbackElement: <p>Loading........</p>
        },
        {
            path: 'singIn',
            Component: SingIn,
        }
    ]
}])

export default router;