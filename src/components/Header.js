import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = props => {

    return (
        <div className="deepblue-bg logo-wrapper">
            <div className=" width-container">
                <NavLink className="logo" to="/">FoSoD</NavLink>
            </div>
        </div>
    )
};

export default Header;