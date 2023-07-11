import "./card-single.scss"
import { Header } from "@components/Header/Header"
import { Footer } from "@components/Footer/Footer"
import { BackButton } from "@components/BackButton/BackButton"
import { CardList } from "@components/CardList/CardList"
import data from "./data"
import { MoreBtn } from "../MoreBtn/MoreBtn"

export const CardSingle = () => {

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <div className="mt-3">
              <BackButton />
            </div>
            <div className="card-single">
              <div className="card-sigle__pics">
                {data.pics.map((img) => (
                  <img
                    className={`card-single__img-${img.id}`}
                    key={img.id}
                    src={img.src}
                  />
                ))}
              </div>
              <div className="card-single__content">
                <div className="card-single__top">
                  <div className="d-flex card-single__date">
                    <time className="card-single__time">
                      {data.cretated_at}
                    </time>
                    <span className="card-single__view">{data.view}</span>
                  </div>
                  <button className="card-single__share-btn">Ulashish</button>
                  <div className="card-single__user-info">
                    <img
                      className="card-single__user-avatar"
                      src={data.user.avatar}
                      width={32}
                      height={32}
                      alt={data.user.username}
                    />
                    <span className="card-single__user-name">{`${
                      data.user.username.split(" ")[0]
                    }\n${data.user.username.split(" ")[1]}`}</span>
                  </div>
                </div>
                <h2 className="card-single__title">{data.title}</h2>
                <p className="card-single__text">{data.body}</p>
                <form method="POST">
                  <textarea
                    className="card-single__area"
                    name="text"
                    rows={10}
                  >
                    Uy egasiga yozish
                  </textarea>
                  <div className="d-flex justify-content-between card-single__btns">
                    <a
                      className="card-single__call-btn"
                      href={"tel:+" + data.user.phone}
                    >
                      Qo’ng’iroq qilish
                    </a>
                    <button
                      className="card-single__send-btn"
                      type="submit"
                    >
                      Yuborish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="suggestion">
          <div className="container">
            <h2 className="suggestion__title">Siz uchun taklif</h2>
            <CardList />
            <MoreBtn/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
