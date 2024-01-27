import './DrinksCard.css'

export default function DrinksCard({beer}) {
  const style = {
    backgroundImage: `url(${beer.image_url})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  };

  return (
    <div className="drinksCard" style={style}>
      <p className="cardTitle">{beer.name}</p>
      <div className="titleCard">
        <p className="cardDesc">{beer.description}</p>
      </div>
    </div>
  )
}