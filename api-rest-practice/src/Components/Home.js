import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

//Un componente que no es funcional no puede tener ciclos de vida
const Home = () => {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Clothes Shop</h1>
                <Link to = '/products'>Entrar</Link>
            </header>
        </div>
    );

};

export default Home;