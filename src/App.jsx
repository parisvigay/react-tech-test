import { Routes, Route } from 'react-router-dom';
import './App.css'
import DrinksDetail from './pages/DrinksDetail/DrinksDetail';
import DrinksList from './pages/DrinksList/DrinksList';

export default function App() {
  return (
    <>
      <DrinksList />
      <Routes>
        <Route path="/drinks-detail" element={DrinksDetail} />
      </Routes>
    </>
  )
}