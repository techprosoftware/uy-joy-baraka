import "./more-btn.scss"
import {useDispatch, useSelector} from "react-redux";
import {incPage} from "@/redux/page/pageAction.js";
import cardService from "@/Api/card.service.jsx";
import {useEffect, useState} from "react";
import {CardSkeleton} from "@components/Cards/CardSkeleton";
import {Card} from "@components/Cards/Cards";
import {List} from "@components/MoreBtn/List.jsx";

export const MoreBtn = () => {
  const [fetcher, setFetcher] = useState({isLoading: false, data: [], clicked: false})
  const page = useSelector(state => state.page.page)
  console.log(page)
  const dispatch = useDispatch()
  const handleClick = async (evt) => {
    evt.preventDefault()
    setFetcher({isLoading: true, data: fetcher.data, clicked: true})
    dispatch(incPage(page))
  }
  const getCard = async () => {
    setFetcher({ isLoading: true, data: fetcher.data, clicked: true })
    const response = await cardService.getByPage(page)
    try {
      if (response.status === 200) {
        console.log('response: ', response.data.posts)
        // eslint-disable-next-line no-unsafe-optional-chaining
        setFetcher({isLoading: false, data: [...fetcher.data, ...response?.data?.posts], clicked: true})
      }
    } catch (err) {
      console.log('more btn fetch err: ', await err)
    }
  }

  useEffect(() => {
    getCard()
  },[page])
  // const mockData = [1,2,3,4,5,6,7,8,9,10]
  return <>
    <div className="container">
      <>
        {/*{fetcher.clicked ? (<ul className="card-list mt-4">*/}
        {/*  {fetcher.isLoading ? mockData.map(mock => <CardSkeleton key={mock}/>) : fetcher?.data?.map(card => <Card key={card?.slug} card={card}/>) }*/}
        {/*</ul>) : ""}*/}
        <List fetcher={fetcher}/>
      </>
      <button
        onClick={handleClick}
        className={`more-btn ${fetcher.clicked ? "disabled" : ""}`}>Ko’proq ko’rish
      </button>
    </div>
  </>
}
