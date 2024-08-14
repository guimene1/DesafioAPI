import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pickle, setCharacter] = useState(null);

  useEffect(() => {
    const urls = [
      'https://rickandmortyapi.com/api/character/265',
      'https://rickandmortyapi.com/api/character/218',
      'https://rickandmortyapi.com/api/character/290',
      'https://rickandmortyapi.com/api/character/608',
      'https://rickandmortyapi.com/api/character/128',
      'https://rickandmortyapi.com/api/character/338',
      'https://rickandmortyapi.com/api/character/690',
      'https://rickandmortyapi.com/api/character/707',
      'https://rickandmortyapi.com/api/character/475',
      'https://rickandmortyapi.com/api/character/579',
      'https://rickandmortyapi.com/api/character/360',
      'https://rickandmortyapi.com/api/character/507',
      'https://rickandmortyapi.com/api/character/229',
      'https://rickandmortyapi.com/api/character/518',
      'https://rickandmortyapi.com/api/character/583',
      'https://rickandmortyapi.com/api/character/580',
      'https://rickandmortyapi.com/api/character/68',
      'https://rickandmortyapi.com/api/character/328',
    ];

    Promise.all(urls.map(url =>
      fetch(url)
        .then((response) => response.json())
    ))
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setCharacter(data[randomIndex]);
      })
      .catch((error) => console.error('Erro com a API:', error));
  }, []);

  if (pickle === null) {
    return <div>Carregando</div>;
  }

  return (
    <div className='Poggers'>
      <header>
        <strong>Rick and Morty Aleatorios</strong>
      </header>

      <article key={pickle.id}>
        <img src={pickle.image} alt={pickle.name} />
        <p><b>Nome:</b> {pickle.name}</p>
        <p><b>Status:</b> {pickle.status}</p>
        <p><b>Espécie:</b> {pickle.species}</p>
        <p><b>Tipo:</b> {pickle.type}</p>
        <p><b>Gênero:</b> {pickle.gender}</p>
        <p><b>Origem:</b> {pickle.origin.name}</p>
        <p><b>Local:</b> {pickle.location.name}</p>
        <button onClick={() => window.location.reload()}>Atualizar Página</button>
      </article>

    </div>
  );
}

export default App;
