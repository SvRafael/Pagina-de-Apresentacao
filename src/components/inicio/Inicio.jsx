import React from 'react'
import Foto from '../../imgs/IMG_20200526_192526_729.jpg'
import './Inicio.css'

export default () => {

    return(
        <section class="divInicio" id="Inicio">
            <div class="itemInicio" >
                <img src={Foto} alt="" class="imgPerfil"/>
            </div>
            <div class="itemInicio" id="dados">
                
                <h3><label class="fa fa-user-circle labelIcon"/>Rafael Souza</h3>
                <h3><label class="fa fa-envelope labelIcon"/>rafaelsvsouza@hotmail.com</h3>
                <h3><label class="fa fa-calendar labelIcon"/>20 Anos</h3>
                <h3><label class="fa fa-map-marker labelIcon"/>Pompéia-SP</h3>
            </div>
            <div class="itemInicio" >
                <h3><a class="fab fa-linkedin labelIcon" href="https://www.linkedin.com/in/rafael-souza-967b8815b" target="_blank" /><a class="rs" href="https://www.linkedin.com/in/rafael-souza-967b8815b" target="_blank">LinkedIn</a></h3>
                <h3><a class="fab fa-github-square labelIcon" href="https://github.com/SvRafael" target="_blank"/><a href="https://github.com/SvRafael" target="_blank" class="rs">GitHub</a></h3>
            </div>
        </section>
    )
};