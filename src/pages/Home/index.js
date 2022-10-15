import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function submitFunc(){
  const id = document.getElementById('inputBusca').value;
  console.log(id)
}

export function HomePage() {
  return (
    <div className="App">

      <main className="App-main">
        <div className='container'>
          <p className='shortTitle'>
            SGC
          </p>
          <h1 className='mainTitle'>Sistema de Gerenciamento de Cemitério</h1>
          <div className='inputContainer'>
            <input type="text" placeholder='Código de consulta...' id='inputBusca'></input>
            <FontAwesomeIcon icon={faMagnifyingGlass} color="#000" onClick={submitFunc} id="searchIcon"/>
          </div>
          <Link to="/profile" className="App-link">
            Next Page
          </Link>
        </div>
      </main>
    </div>
  );
}
