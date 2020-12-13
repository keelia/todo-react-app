import React from 'react';
import './App.scss';
import { Dashboard } from './pages/dashboard/dashboard';
import { BiUserCircle } from 'react-icons/bi';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Calendar</div>
        <div className="user-info">
          <BiUserCircle></BiUserCircle>
        </div>
      </header>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
