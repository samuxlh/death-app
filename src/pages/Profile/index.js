import React, { useEffect, useState } from 'react';
import './style.css';
import ConditionalRender from '../../components/Profile'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { db } from '../../firebase'
import { collection, getDocs } from "firebase/firestore"

export function ProfilePage() {

  const [foundUser, setFoundUser] = useState()

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

  useEffect(() => {
    const currentUser = JSON.parse(window.localStorage.getItem('currentUser'))
    if (currentUser) {
      setFoundUser(currentUser);
    } else {
      setFoundUser(false);
    }
  }, [])

  return (
    <div className="App">
      <div className="App-main">
        <main className="container">
          <a href='/'>
          <FontAwesomeIcon
            className='fa-2x'
            icon={faArrowLeftLong}
            color="#FFF"
            id="userIcon" />
          </a>
          <p>
            Sistema de Gerenciamento de Cemitério
          </p>
          <ConditionalRender hasUser={foundUser} />
        </main>
      </div>
    </div>
  );
}
