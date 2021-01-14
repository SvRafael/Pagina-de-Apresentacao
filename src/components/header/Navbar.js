import React from 'react'
import './Navbar.css'

export default () => {
    return(
        <div>
            <nav>
                <input type="checkbox" id="check"/>
                    <label for="check">
                        <i class="fas fa-bars" id="btn"></i>
                        <i class="fas fa-times" id="cancel"></i>
                    </label>
                <ul>
                    <li><a href="#Inicio">ínicio</a></li>
                    <li><a href="#Sobre">Sobre</a></li>
                    <li><a href="#Conhecimentos">Conhecimentos</a></li>
                    <li><a href="#Qualidades">Qualidades</a></li>
                    <li><a href="#Experiencias">Expêriencias</a></li>
                </ul>
            </nav>
        </div>
    )
};