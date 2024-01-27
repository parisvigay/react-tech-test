import { useState, useEffect } from 'react';
import DrinksCard from '../../components/DrinksCard/DrinksCard';
import './DrinksList.css'

export default function DrinksList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function getBeers() {
      try {
        const response = await fetch("https://api.punkapi.com/v2/beers?per_page=10")
        const beers = await response.json();
        console.log(beers);
        setBeers(beers);
      }
      catch (error) {
        console.error(error);
      }
    }

    getBeers();
  }, []);

  return (
    <div className="drinksListMain">
      <div className="drinksContainer">
        {beers.map((beer, index) => (
          <DrinksCard key={index} beer={beer}/>
        ))}
      </div>
    </div>
  )
}