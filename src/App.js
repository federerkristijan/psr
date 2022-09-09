import { Router, Route, Link, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes><Home /></Routes>
        <Routes></Routes>
        <Routes></Routes>
        <Routes></Routes>
        <Routes></Routes>
        <Routes></Routes>
        <Routes></Routes>
        <Routes></Routes>
        <Routes></Routes>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
