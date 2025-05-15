import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Coffees from '../Components/Coffees';

const Home = () => {
  const data = useLoaderData();
  
    return (
        <div>
          <Link to="/add-coffee">Add Coffee</Link>
          <h1>Home Page</h1>
          <Coffees data = {data}></Coffees>  
        </div>
    );
};

export default Home;