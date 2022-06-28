import React from 'react'
import { NavLink } from 'react-router-dom';
import MyComponent from '../components/MyComponent';
  
function HomePage() {
    //const [homeState, setHomeState] = React.useState({});

    return (
        <div>
            Home 
            <NavLink to="/algo">ALGO</NavLink>
            <MyComponent />
        </div>
    )
}

export default HomePage