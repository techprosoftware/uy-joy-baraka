import "./back-button.scss"
import { Link } from "react-router-dom"
import arrow from "../../../public/assets/images/left-arrow.svg";


export const BackButton = () => {
  
  return <><Link to="/" className="arrow__btn">
  <img src={arrow} alt="" /> Orqaga
</Link></>
}
