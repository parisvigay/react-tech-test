import { Routes, Route } from 'react-router-dom';
import './App.css'
import DrinksDetail from './pages/DrinksDetail/DrinksDetail';
import DrinksList from './pages/DrinksList/DrinksList';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DrinksList />} />
      <Route path="/:drinkId" element={<DrinksDetail />} />
    </Routes>
  )
}