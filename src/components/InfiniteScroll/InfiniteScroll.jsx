/* eslint-disable react/prop-types */
import { useState } from "react"
import InfiniteScrollReact from "react-infinite-scroll-component"
import LoadingImg from "@images/card-single-loading.svg"
import { Card } from "@components/Cards/Cards"
import CardService from "@api/card.service"
import { useDispatch, useSelector } from "react-redux"
import { incPage } from "@/redux/page/pageAction.js"

export const InfiniteScroll = ({ page }) => {
  const pageCount = page || useSelector((state) => state.page.page)
  const dispatch = useDispatch()

  const [fetcher, setFetcher] = useState({
    hasMore: true,
    data: [],
  })

  const fetchMoreData = async () => {
    setTimeout(async () => {
      const { posts } = (await CardService.getByPage(pageCount)).data

      if (fetcher.data.length / 12 >= pageCount) {
        setFetcher({ hasMore: false, data: [...fetcher.data, ...posts] })
      } else {
        dispatch(incPage(pageCount))
        setFetcher({
          hasMore: fetcher.hasMore,
          data: await posts,
        })
      }
    }, 1500)
  }
  console.log(pageCount)
  const loader = (
    <>
      <div className="container">
        <img
          className="m-auto d-block my-3"
          src={LoadingImg}
          width={50}
          height={50}
          style={{ background: "none" }}
        />
      </div>
    </>
  )
  console.log(fetcher)

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
          <ul className="card-list mt-4">
            {fetcher.data.length
              ? fetcher?.data?.map((item, idx) => (
                  <Card
                    key={idx}
                    card={item}
                  />
                ))
              : ""}
          </ul>
        ) : (
          ""
        )}
      </div>
    </InfiniteScrollReact>
  )
}
