import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { collection, getDocs } from "firebase/firestore"

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
    window.localStorage.removeItem('currentUser');
    window.location.href = (window.location.href + 'profile')
  }
}

export function HomePage() {
  const [jazigo, setJazigo] = useState([]);
  const fetchPost = async () => {
    await getDocs(collection(db, "jazigo"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setJazigo(newData);
        console.log(jazigo, newData);
      })
  }
  useEffect(() => {
    fetchPost();
  }, [])
  return (
    <div className="App">
      <main className="App-main">
        <div className='container'>
          <p className='shortTitle'>SGC</p>
          <h1 className='mainTitle'>Sistema de Gerenciamento de Cemitério</h1>
          <p className='smallText'>Insira o código de consulta do jazigo no campo abaixo.</p>
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
          {/* <Link to="/profile" className="App-link">
            Next Page
          </Link> */}
        </div>
      </main>
    </div>
  );
}
