import { CardSingleSkeleton } from "../CardSingle/CardSingleSkeleton"
// import { Card } from "../Cards/Cards"
import data from "../Cards/data"
import "./card-list.scss"

export const CardList = () => {
  return (
    <>
      {data.length ? (
        <ul className="card-list">
          {data.map((card) => (
            <CardSingleSkeleton
              key={card.id}
              card={card}
            />
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  )
}
