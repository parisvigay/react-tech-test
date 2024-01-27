import './DrinksDetailCard.css'

export default function DrinksDetailCard({ beerDetail }) {
    const style = {
        backgroundImage: `url(${beerDetail[0].image_url})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      };

  return (
    <div className="drinksDetailCard">
        <div className="drinkNameAndABV">
            <h1 className="drinkName">{beerDetail[0].name}</h1>
            <p className="drinkABV"> ABV {beerDetail[0].abv} %</p>
        </div>
        <h4 className="drinkTagline">"{beerDetail[0].tagline}"</h4>
        <img src={beerDetail[0].image_url} alt="img" className="drinkImg" />
        <p className="drinkDesc">{beerDetail[0].description}</p>
        <h5 className="drinkFirstBrewed">Since {beerDetail[0].first_brewed}</h5>
    </div>
  )
}
