import React from 'react'
import conhecimentos from '../../data/conhecimento'
import  './Conhecimentos.css'

export default () => {

    const lista = conhecimentos.map((conhecimento) => {
        return(
            <div className="item">
                <div className="content">
                    {conhecimento.nome}
                </div>
                <div className="images">
                    <img src={conhecimento.imagem}></img>
                </div>
            </div>            
        );
    });

    return(
        <section  class="cards">
                {lista}
        </section>
    )
};