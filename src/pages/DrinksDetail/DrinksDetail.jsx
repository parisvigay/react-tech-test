import { useNavigate, useParams } from 'react-router-dom'
import DrinksDetailCard from '../../components/DrinksDetailCard/DrinksDetailCard'
import './DrinksDetail.css'
import { useEffect, useState } from 'react';

export default function DrinksDetail() {
  const [beerDetail, setBeerDetail] = useState();

  const navigate = useNavigate();

  const beerIdObj = useParams();
  const beerId = beerIdObj['drinkId'];

  useEffect(() => {
    async function getBeer() {
      let beer;
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers/${beerId}`)
        beer = await response.json();
        setBeerDetail(beer);
      }
      catch(error) {
        console.error(error);
      }
    }
    getBeer();

  }, [beerId]);

  function toHome() {
    navigate('/')
  }

  return (
    <div className="drinksDetailMain">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16" className="toHome" onClick={toHome}>
        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
      </svg>
      {beerDetail && (
        <DrinksDetailCard beerDetail={beerDetail} />
      )}
    </div>
  )
}