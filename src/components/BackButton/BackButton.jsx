import "back-button.scss"
import { Link } from "react-router-dom"

export const BackButton = (to) => {
  return <Link className="back-link" to={to}>Orqaga</Link>
}
