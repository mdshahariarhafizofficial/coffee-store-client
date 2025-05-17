import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Coffees from '../Components/Coffees';

const Home = () => {
  const data = useLoaderData();
  
    return (
        <div>
          <Link to="/add-coffee">Add Coffee</Link><br />
          <Link to="/users">Users</Link><br />
          <Link to="/singin">Sing In</Link>
          <h1>Home Page</h1>
          <Link to="/sing-up">Sing Up</Link>
          <Coffees data = {data}></Coffees>  
        </div>
    );
};

export default Home;