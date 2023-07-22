
import "./more-btn.scss"
import {useDispatch, useSelector} from "react-redux";
import {incPage} from "@/redux/page/pageAction.js";

export const MoreBtn = () => {
  const page = useSelector(state => state.page.page)
  const dispatch = useDispatch()
  const handleClick = async (evt) => {
    evt.preventDefault()
    
    dispatch(incPage(page))
  }
  
  return <button
    onClick={handleClick}
    className="more-btn">Ko’proq ko’rish</button>
}
>>>>>>> 25db0e0abde8ba0aae6f1025b0b99a20f859fe70
