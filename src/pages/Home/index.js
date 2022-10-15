import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function submitFunc() {
  const id = document.getElementById('inputBusca').value;
  if (id === '12345') {
    const user = {
      id: '12345',
      pessoaPublica: true,
      cemiterio: 'Cemitério Municipal, Joaquim Botas Margarido, 300',
      nome: 'Aziz Shavershian',
      quadra: 'Quadra 1',
      rua: 'Rua 5',
      numero: 'Cova 666',
      certidaoObito: '123456',
      dataNasc: '24/03/1989',
      dataObito: '05/08/2011'
    }
    window.localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = (window.location.href + 'profile')
  }
  else {
    window.localStorage.setItem('currentUser', '');
    window.location.href = (window.location.href + 'profile')
  }
}

export function HomePage() {
  return (
    <div className="App">
      <main className="App-main">
        <div className='container'>
          <p className='shortTitle'>SGC</p>
          <h1 className='mainTitle'>Sistema de Gerenciamento de Cemitério</h1>
          <div className='inputContainer'>
            <input 
              type="text" 
              placeholder='Código de consulta...' 
              id='inputBusca'></input>
            <FontAwesomeIcon 
              icon={faMagnifyingGlass} 
              color="#000" 
              onClick={submitFunc} 
              id="searchIcon" />
          </div>
          <Link to="/profile" className="App-link">
            Next Page
          </Link>
        </div>
      </main>
    </div>
  );
}
