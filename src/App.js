
import './App.css';

import { Route, Routes } from "react-router-dom";

import Header from './components/Header';
/* import AddCard from './components/products/AddCard'; */
import CardList from './components/CardList';
import Card from './components/products/Card';
import EditCard from './components/products/EditCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/dolci/:id" element={<Card />} />
        <Route path="/edit/:id" element={<EditCard/>}/>
      </Routes>
      
      {/* <AddCard /> */}
    </div>
  );
}

export default App;
