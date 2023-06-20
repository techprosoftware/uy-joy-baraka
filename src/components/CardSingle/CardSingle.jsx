import "./card-single.scss"
import { Header } from "@components/Header/Header"
import { Footer } from "@components/Footer/Footer"
import { BackButton } from "@components/BackButton/BackButton"

export const CardSingle = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <BackButton/>
        </div>
      </main>
      <Footer />
    </>
  )
}
