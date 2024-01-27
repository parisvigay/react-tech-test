import { useState, useEffect } from 'react';
import DrinksCard from '../../components/DrinksCard/DrinksCard';
import './DrinksList.css'

export default function DrinksList() {
  const [beers, setBeers] = useState([]);
  const [moreBeers, setMoreBeers] = useState(false);

  useEffect(() => {
    async function getBeers() {
      try {
        const response = await fetch("https://api.punkapi.com/v2/beers?per_page=10")
        const beers = await response.json();
        setBeers(beers);
      }
      catch (error) {
        console.error(error);
      }
    };

    getBeers();
    
  }, []);

  async function getMoreBeers() {
    try {
      const response = await fetch("https://api.punkapi.com/v2/beers?")
      const moreBeers = await response.json();
      setBeers(moreBeers);
    }
    catch (error) {
      console.error(error);
    }
    setMoreBeers(true);
  };

  function lessBeers() {
    window.location.reload();
  };

  return (
    <div className="drinksListMain">
      <div className="drinksContainer">
        {beers.map((beer, index) => (
          <DrinksCard key={index} beer={beer}/>
        ))}
      </div>
      {moreBeers ? (
        <div className="loadBeers" onClick={lessBeers}>See Less Beers</div>
      ) : (
        <div className="loadBeers" onClick={getMoreBeers}>
          See More Beers
        </div>
      )}
    </div>
  )
}