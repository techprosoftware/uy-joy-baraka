import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
const Header = lazy(() => import("@components/Header/Header"))
const Footer = lazy(() => import("@components/Footer/Footer"))
const Home = lazy(() => import("@pages/Home/Home"))
const Upload = lazy(() => import("@pages/Upload/Upload"))
const Announ = lazy(() => import("@pages/Announ/Announ"))
const NotFoundError = lazy(() => import("@pages/404/404"))
const CardSingle = lazy(() => import("@components/CardSingle/CardSingle"))
const Messaging = lazy(() => import("@pages/Messaging/Messaging"))
const AboutUs = lazy(() => import("@pages/AboutUs/AboutUs"))
const UserInfo = lazy(() => import("@pages/UserInfo/UserInfo"))
const AnnounSearch = lazy(() => import("@pages/AnnounSearch/AnnounSearch"))
const Favorite = lazy(() => import("@pages/Favorite/Favorite"))
import LoadingImg from "@images/card-single-loading.svg"

export const Public = () => {
  return <>
    <Suspense fallback={<>
        <div className="container w-100 h-100">
          <img
            className="d-block mx-auto"
            src={LoadingImg}
            width={200}
            height={200}
            style={{ background: "none" }}
          />
        </div>
      </>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/announ/*" element={<Announ />} />
          <Route path="*" element={<NotFoundError />} />
          <Route path="/card-search" element={<AnnounSearch />} />
          <Route path="/announcement/:id" element={<CardSingle />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <Footer />
      </Suspense>
  </>
}
