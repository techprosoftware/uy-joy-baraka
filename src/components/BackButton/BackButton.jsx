import "./back-button.scss"
import { useNavigate } from "react-router-dom"

export const BackButton = () => {
  const navigate = useNavigate()
  return <button className="back-link" onClick={() => navigate(-1)}>Orqaga</button>
}
