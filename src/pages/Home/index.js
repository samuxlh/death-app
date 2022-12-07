import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase'
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { collection, getDocs } from "firebase/firestore"

function submitFunc() {
  const id = document.getElementById('inputBusca').value;
  var get =  JSON.parse(localStorage.getItem('dbUsers'));
  var currentUser = get.find(o => o.uid === id)
  console.log(currentUser)
  if (currentUser) {
    window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
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
        window.localStorage.setItem('dbUsers', JSON.stringify(newData));
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
