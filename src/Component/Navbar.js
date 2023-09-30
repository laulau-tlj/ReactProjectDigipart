import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Icon } from 'semantic-ui-react';
import image from '../assets/unicode.svg';
import heart from '../assets/icone-heart.svg';
import search from '../assets/icone-search.svg';
import user from '../assets/icone-user.svg';



const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo' >
                <Link to="/"><img src={image} /></Link>
            </div>
            <div className='links'>
                <Link to="">Nouveautés</Link>
                <Link to="">Créateurs</Link>
                <Link to="">Vêtements</Link>
                <Link to="">Chaussures</Link>
                <Link to="">Sacs</Link>
                <Link to="">Accessoires</Link>
                <Link to="">Joaillerie</Link>
                <Link to="">Communautés</Link>
                <Link to="">Editos</Link>
            </div>
            <div className='icon'>
                
                <ul>
                    <Link><Icon name='user ' color='black' /></Link>
                    <Link><Icon name='search ' color='black'/></Link>
                    <Link><Icon name='heart ' color='black'/></Link>
                    <Link><Icon name='shopping bag ' color='black'/></Link>
                </ul>
            
            </div>
            
        </div>
    );
}

export default Navbar;
