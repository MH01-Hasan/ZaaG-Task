import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <div >
            <NavLink to="/TaskOne" className='nav-link' >Task One</NavLink>
            <NavLink to="/TaskTwo" className='nav-link' >Task Two</NavLink>

        </div>
    );
};

export default Home;