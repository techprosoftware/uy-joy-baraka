import "./card-single.scss"
import {Header} from "@components/Header/Header"
import {Footer} from "@components/Footer/Footer"
import {BackButton} from "@components/BackButton/BackButton"
import {CardList} from "@components/CardList/CardList"
// import data from "./data"
import {MoreBtn} from "../MoreBtn/MoreBtn"
import {useState} from "react"
import {motion} from "framer-motion"
import "./share"
import {BASE_URL} from "../../Api/api"
import axios from "axios";
import {useParams} from "react-router-dom";

export const CardSingle = () => {
  let [imgId, setImgId] = useState(1)
  let [modal, setModal] = useState(false)
  window.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      setModal(false)
    }
  })

  const data = {
    announcement_id: "c13b3cb4-ea6b-4220-bec1-56e01945ae5a",
    slug: "toshkent-uy-sotiladi",
    title: "toshkent-uy-sotiladi",
    thumb: ["/images/uploads/default.png"],
    city: "Toshkent",
    district: "Chilonzor",
    address: "Alisher Navoiy ko'chasi ",
    type: "sale",
    description: "O'rmonga o't ketsa Ho'lu toshkenlik birday yonadi",
    price: 100000,
    price_type: "dollar",
    status: true,
    confirm: true,
    likeCount: 0,
    viewCount: 0,
    rec: false,
    createdAt: "2023-07-13T10:25:11.622Z",
    updatedAt: "2023-07-13T10:31:21.943Z",
    user_id: "47eea903-d193-41fd-a768-1612ea937e1e",
  }

  const user = {
    user_id: "47eea903-d193-41fd-a768-1612ea937e1e",
    full_name: "Admin",
    phone: "998905210501",
    address: null,
    role: "admin",
    user_attempts: 0,
    avatar: "/images/users/default.png",
    confirm: true,
    socket_id: null,
    status: "offline",
    createdAt: "2023-07-12T08:29:07.743Z",
    updatedAt: "2023-07-15T12:12:09.928Z",
  }

  const time = data.createdAt.split('-')
  const customPrice = data?.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ');
  const handleForm = () => {
  }

  return (<>
    <Header/>
    <main>
      <section>
        <div className="container">
          <div className="mt-3">
            <BackButton/>
          </div>
          <motion.div
            className="card-single"
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="card-single__pics">
              <div className="img-select">
                {data?.thumb?.map((img, idx) => (<img
                  onClick={() => setImgId(idx)}
                  className={`img-item card-single__img-${idx}`}
                  key={idx}
                  src={BASE_URL + img}
                  width={120}
                  height={120}
                  data-id={idx}
                />))}
              </div>

              <div className="img-display">
                <div className="img-showcase">
                  <img
                    className="show-image"
                    width={466}
                    height={525}
                    src={BASE_URL + data?.thumb[imgId - 1]}
                    alt="Home images"
                    aria-label="Home images"
                  />
                </div>
              </div>
            </div>
            <div className="card-single__content">
              <div className="card-single__top">
                <div className="d-flex card-single__date">
                  <time className="card-single__time">{`${time[2].split('T')[0]}. ${time[1]}.${time[0]}`}</time>
                  <span className="card-single__view">{data?.viewCount}</span>
                </div>
                <button
                  onClick={() => setModal(!modal)}
                  className="card-single__share-btn"
                >
                  Ulashish
                  <div
                    style={{display: `${modal ? "block" : "none"}`}}
                    className="share-btn a2a_kit a2a_kit_size_32 a2a_default_style"
                  >
                    <a
                      className="a2a_dd"
                      href="https://www.addtoany.com/share"
                    ></a>
                    <a className="a2a_button_facebook"></a>
                    <a className="a2a_button_twitter"></a>
                    <a className="a2a_button_telegram"></a>
                    <a className="a2a_button_copy_link"></a>
                  </div>
                </button>
                <div className="card-single__user-info">
                  <img
                    className="card-single__user-avatar"
                    src={BASE_URL + user.avatar}
                    width={32}
                    height={32}
                    alt={user.full_name}
                  />
                  <span className="card-single__user-name">
                    {user.full_name}
                  </span>
                </div>
              </div>
              <p className="card__price card-single__price">{customPrice} {"s'om"}</p>
              <h2 className="card-single__title">{data.title}</h2>
              <p className="card-single__text">{data.description}</p>
              <form method="POST" onSubmit={handleForm}>
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
                    href={"tel:+" + user.phone}
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
          <CardList/>
          <MoreBtn/>
        </div>
      </section>
    </main>
    <Footer/>
  </>)
}
