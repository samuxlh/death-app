import React from 'react'; 
import './style.css';
import { Link } from 'react-router-dom';

export function ProfilePage() {
  return (
    <div className="App">
      <header className="App-header">
        <p>HEADER</p>
      </header>

      <div className="App-line"></div>
      
      <main className="App-main">
        <p>
          Page 2
        </p>

        <Link to="/" className="App-link">
          Previous Page
        </Link>
      </main>
    </div>
  );
}
