
import './global.css';
import Routes from './routes';

export default function App() {
  return (
    <Routes/>// Método React de src/pages/login/index.js
    );
}

// Propriedades React

// Sempre inicie o nome dos componentes com letra maiuscula se nao nao funciona


// Imultabilidade : Só consigo mudar o estado se eu usar o estado "useState" (biblioteca nativa do React)
// isto almenta a performance e protege o sistema de variaveis que vamos criando ao longo do tempo e fogem do controle