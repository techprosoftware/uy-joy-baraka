import { useState } from "react"
import InfiniteScrollReact from "react-infinite-scroll-component"
import LoadingImg from "@images/card-single-loading.svg"
import { Card } from "@components/Cards/Cards"
import CardService from "@api/card.service"
import { useDispatch, useSelector } from "react-redux"
import { incPage } from "@/redux/page/pageAction.js"

export const InfiniteScroll = () => {
  const page = useSelector((state) => state.page.page)
  const dispatch = useDispatch()

  const [fetcher, setFetcher] = useState({
    hasMore: true,
    data: Array.from({ length: 12 }),
  })

  const fetchMoreData = async () => {
    setTimeout(async () => {
      const response = await await CardService.getByPage(page)
      dispatch(incPage(page))
      setFetcher({
        hasMore: fetcher.hasMore,
        data: [...fetcher.data, ...response.data.posts],
      })
      if (fetcher.data.length / 12 >= page - 3) {
        setFetcher({ hasMore: false, data: [] })
      }
    }, 1500)
  }

  const loader = (
    <>
      <div className="container">
        <img
          className="m-auto d-block my-3"
          src={LoadingImg}
          width={100}
          height={100}
          style={{ background: "none" }}
        />
      </div>
    </>
  )

  return (
    <InfiniteScrollReact
      dataLength={fetcher.data.length}
      next={fetchMoreData}
      hasMore={fetcher.hasMore}
      loader={loader}
      scrollableTarget="scrollableDiv"
    >
      <div className="container">
        {fetcher.data.length ? (
          <ul className="card-list">
            {
           fetcher.length ?  fetcher?.data?.map((item, idx) => (
            <Card
              key={idx}
              card={item}
            />
          )) : ""}
          </ul>
        ) : (
          ""
        )}
      </div>
    </InfiniteScrollReact>
  )
}
