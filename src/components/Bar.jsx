import { React, useState } from 'react';
import { Link } from "react-router-dom"
import leafOrangeImg from "../img/leaf_orange.png"
import "../style/Bar.css"

function Bar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='navBar'>
            <Link className='titleCover' to="/">
                <img src={leafOrangeImg} />
                <p>Nurspace</p>
            </Link>
            <button className='barButton' onClick={toggleMenu}/>
            <div className={`nav ${menuVisible ? 'visible' : ''}`}>
                <Link className='navElement' to="/login">
                    LOG IN
                </Link>
                <Link className='navElement' to="/signup">
                    SIGN UP
                </Link>
                <Link className='navElement' to="/user">
                    USER
                </Link>
            </div>
        </div>
    );
};

export default Bar;