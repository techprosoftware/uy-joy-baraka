import { CardSkeleton } from "../Cards/CardSkeleton"
// import { Card } from "../Cards/Cards"
import data from "../Cards/data"
import "./card-list.scss"

export const CardList = () => {
  return (
    <div>
      {data.length ? (
        <ul className="card-list">
          {data.map((card) => (
            <CardSkeleton
              key={card.id}
              card={card}
            />
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  )
}
