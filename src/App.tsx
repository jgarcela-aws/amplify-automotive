// src/App.tsx
import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Chatbot />
    </div>
  );
}

export default App;
