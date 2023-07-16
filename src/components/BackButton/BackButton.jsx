import "./back-button.scss"
import { Link, useNavigate } from "react-router-dom"
import arrow from "../../../public/assets/images/left-arrow.svg"

export const BackButton = () => {
  const navigate = useNavigate()
  return (
    <>
      <Link
        to="#"
        onClick={() => navigate(-1)}
        className="arrow__btn"
      >
        <img
          src={arrow}
          alt=""
        />{" "}
        Orqaga
      </Link>
    </>
  )
}
