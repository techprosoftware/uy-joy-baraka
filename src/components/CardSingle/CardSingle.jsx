import "./card-single.scss"
import { Header } from "@components/Header/Header"
import { Footer } from "@components/Footer/Footer"
import { BackButton } from "@components/BackButton/BackButton"
import { CardList } from "@components/CardList/CardList"
import data from "./data"
import { MoreBtn } from "../MoreBtn/MoreBtn"
import { useState } from "react"
import { motion } from "framer-motion"
import Skeleton from "react-loading-skeleton"

export const CardSingle = () => {
  let [isLoading, setIsLoading] = useState(false)
  let [imgId, setImgId] = useState(1)

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <div className="mt-3">
              <BackButton />
            </div>
            <motion.div
              className="card-single"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="card-single__pics">
                <div className="img-select">
                  {data.pics.map((img, idx) =>
                    isLoading ? (
                      <Skeleton
                      className="mb-2"
                        key={idx}
                        width={120}
                        height={120}
                      />
                    ) : (
                      <img
                        onClick={() => setImgId(idx)}
                        className={`img-item card-single__img-${idx}`}
                        key={img.id}
                        src={img.src}
                        width={120}
                        height={120}
                        data-id={idx}
                      />
                    )
                  )}
                </div>

                <div className="img-display">
                  <div className="img-showcase">
                    {isLoading ? (
                      <Skeleton
                        width={466}
                        height={525}
                      />
                    ) : (
                      <img
                        className="show-image"
                        width={466}
                        height={525}
                        src={data.pics[imgId].src}
                        alt="Home images"
                        aria-label="Home images"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="card-single__content">
                <div className="card-single__top">
                  <div className="d-flex card-single__date">
                    <time className="card-single__time">
                      {isLoading ? <Skeleton width={71} /> : data.created_at}
                    </time>
                    <span className="card-single__view">
                      {isLoading ? <Skeleton width={21} /> : data.view}
                    </span>
                  </div>
                  <button className="card-single__share-btn">Ulashish</button>
                  <div className="card-single__user-info">
                    {isLoading ? (
                      <Skeleton
                        width={109}
                        height={32}
                      />
                    ) : (
                      <>
                        <img
                          className="card-single__user-avatar"
                          src={data.user.avatar}
                          width={32}
                          height={32}
                          alt={data.user.username}
                        />
                        <span className="card-single__user-name">
                          {`${data.user.username.split(" ")[0]}\n${
                            data.user.username.split(" ")[1]
                          }`}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <h2 className="card-single__title">
                  {isLoading ? (
                    <Skeleton
                      width={463}
                      height={56}
                    />
                  ) : (
                    data.title
                  )}
                </h2>
                <p className="card-single__text">
                  {isLoading ? (
                    <Skeleton
                      width={463}
                      height={136}
                    />
                  ) : (
                    data.body
                  )}
                </p>
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
            </motion.div>
          </div>
        </section>
        <section className="suggestion">
          <div className="container">
            <h2 className="suggestion__title">Siz uchun taklif</h2>
            <CardList />
            <MoreBtn />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
