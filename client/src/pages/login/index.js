import React from 'react';
import './style.css';
import logoImage from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'

export default function Login(){
    // Este é um componente do React
    // Se for só uma linha o conteúdo do return  não precisa de "()".
    // Se for mais de uma linha o conteúdo do return então precisa de "()"
    return (  
            <div className="login-container">
                <section className="form">
                    <img src={logoImage} alt="Erudio Logo"/>
                    <form action="">
                        <h1>Acess your account</h1>
                        <input type="text" placeholder='Username'/>
                        <input type="password" placeholder='Password'/>
                        <button className='button' type='submit'>Login</button>
                    </form>
                </section>
                <img src={padlock} alt="Login"/>
            </div>
    )
}

//PARÂMETRO
// props == Aceita os parametros vindos do vindos da propriedade "title" do componente React onde foi chamado
// children == Recebe por parametro os filhos do componente React