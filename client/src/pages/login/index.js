import React from 'react';
import './style.css';

export default function Login(){
    // Este é um componente do React
    // Se for só uma linha o conteúdo do return  não precisa de "()".
    // Se for mais de uma linha o conteúdo do return então precisa de "()"
    return (
        <div>
            <h1>Wellcome</h1>        
            <h2>Well</h2>
        </div>
    )
}

//PARÂMETRO
// props == Aceita os parametros vindos do vindos da propriedade "title" do componente React onde foi chamado
// children == Recebe por parametro os filhos do componente React