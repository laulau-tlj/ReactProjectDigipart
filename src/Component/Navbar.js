import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Icon } from 'semantic-ui-react';
import image from '../assets/unicode.svg';




const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={image} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Nouveautés</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Créateurs</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Vêtements</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Chaussures</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Sacs</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Accessoires</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Communautés</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Editos</a>
                        </li>
                        </ul>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true"><Icon name='user ' color='black' /></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true"><Icon name='search ' color='black' /></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true"><Icon name='heart ' color='black' /></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true"><Icon name='shopping bag ' color='black' /></a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    );
}

export default Navbar;
