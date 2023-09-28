/* eslint-disable no-unused-vars */
import { Suspense, lazy, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPage } from "@/redux/page/pageAction"
const HomeBanner = lazy(() => import("./HomeBanner/HomeBanner"))
const HomeCards = lazy(() => import("./HomeCards/HomeCards"))
const Ads = lazy(() => import("@components/Ads/Ads"))
const Social = lazy(() => import("@components/Social/Social"))
const CardList = lazy(() => import("@components/CardList/CardList"))
const InfiniteScroll = lazy(() =>
  import("@components/InfiniteScroll/InfiniteScroll")
)
import LoadingImg from "@images/loader.svg"
import CardService from "@api/card.service"

const Home = () => {
  const page = useSelector((state) => state.page.page)
  const dispatch = useDispatch()

  const fetcherLikedCards = async () => {
    const response = await CardService.getLike()
    if (response?.status == 200) {
      localStorage.setItem(
        "likedCardList",
        JSON.stringify(response?.data?.posts)
      )
    }
  }

  useEffect(() => {
    dispatch(setPage(3))
    fetcherLikedCards()
  }, [])

  return (
    <>
      <Suspense
        fallback={
          <>
            <div className="container w-100 h-100">
              <img
                className="d-block mx-auto loader-img"
                src={LoadingImg}
              
                style={{ background: "none" }}
              />
            </div>
          </>
        }
      >
        <HomeBanner />
        <HomeCards />
        <Ads />
        <div className="container">
          <CardList page={2} />
        </div>
        <Social />
        <InfiniteScroll page={3} />
        {/* <MoreBtn /> */}
      </Suspense>
    </>
  )
}

export default Home
