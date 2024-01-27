import { Link } from 'react-router-dom';
import './DrinksCard.css'

export default function DrinksCard({ beer }) {
  const style = {
    backgroundImage: `url(${beer.image_url})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };

  return (
    <Link style={{ textDecoration: 'none' }} to={`/${beer.id}`}>
      <div className="drinksCard" style={style}>
        <p className="drinksName">{beer.name}</p>
        <div className="descCard">
          <p className="drinksDesc">{beer.description}</p>
        </div>
      </div>
    </Link>
  )
}