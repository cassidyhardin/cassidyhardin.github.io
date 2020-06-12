import React from 'react';
import logo from './logo.svg';
import cassidy from './cassidy.jpeg'
import './App.css';
import About from './components/about'
import Navbar from './components/navbar'
import Projects from './components/projects'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={cassidy} className='display-picture' alt="logo"/>
        <p>

         Cassidy Hardin

        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/cassidyhardin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>

        <a
          className="App-link"
          href="https://github.com/cassidyhardin"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>



        
      </header>

      <About></About>
      <Projects></Projects> 
      <Navbar> </Navbar> 
    </div>
  );
}

export default App;
