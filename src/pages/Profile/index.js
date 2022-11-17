import React, { useEffect, useState } from 'react';
import './style.css';
import ConditionalRender from '../../components/Profile'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
export function ProfilePage() {

  const [foundUser, setFoundUser] = useState()

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
