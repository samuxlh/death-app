import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import ProfileData from '../../components/Profile';
import { NotFound } from '../../components/404';

export function ProfilePage() {
  return (
    <div className="App">
      <div className="App-main">
        <main className="container">
          <p>
            Sistema de Gerenciamento de Cemitério
          </p>
          <ProfileData />
          <NotFound />
          <Link to="/" className="App-link">
            Previous Page
          </Link>
        </main>
      </div>
    </div>
  );
}
