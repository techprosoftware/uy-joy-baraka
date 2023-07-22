
import "./more-btn.scss"
import {useDispatch, useSelector} from "react-redux";
import {incPage} from "@/redux/page/pageAction.js";
import cardService from "@/Api/card.service.jsx";

export const MoreBtn = () => {
  const page = useSelector(state => state.page.page)
  const dispatch = useDispatch()
  const handleClick = async (evt) => {
    evt.preventDefault()
    const response = await cardService.getByPage(page)
    try {
      console.log(response)
    } catch (err) {
      return await err
    }
    dispatch(incPage(page))
  }
  
  return <button
    onClick={handleClick}
    className="more-btn">Ko’proq ko’rish</button>
}
