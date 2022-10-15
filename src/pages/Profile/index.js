import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import ConditionalRender from '../../components/Profile'

export function ProfilePage() {
  return (
    <div className="App">
      <div className="App-main">
        <main className="container">
          <p>
            Sistema de Gerenciamento de Cemitério
          </p>
          <ConditionalRender hasUser={false} />
          <Link to="/" className="App-link">
            Previous Page
          </Link>
        </main>
      </div>
    </div>
  );
}
