
import "./card-single.scss"
import {BackButton} from "@components/BackButton/BackButton"
import {CardList} from "@components/CardList/CardList"
// import data from "./data"
import {MoreBtn} from "../MoreBtn/MoreBtn"
import {useEffect, useState} from "react"
import {motion} from "framer-motion"
import "./share"
import {BASE_URL} from "../../Api/api"
import {useParams} from "react-router-dom";

import {Link, useParams} from "react-router-dom";
import CardService from "@/Api/card.service.jsx";
import {FaCopy, FaFacebook, FaTelegram, FaTwitter, FaWhatsapp} from "react-icons/fa";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {toast} from 'react-toastify'
import {ToastContainer} from "react-bootstrap";

export const CardSingle = () => {
  let [imgId, setImgId] = useState(0)
  let [modal, setModal] = useState(false)
  const [card, setCard] = useState({})
  const {id} = useParams()
  const notify = toast("Copied!")

  window.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      setModal(false)
    }
  })

  const fetcher = async () => {
    try {
      const response = await CardService.getByCard(id)
      if (response.status === 200) {
        setCard(response.data)
      }
    } catch (error) {
      console.log('Error fetching card data: ', error)
    }
  }

  useEffect(() => {
    fetcher()
  }, [])

  const data = card.post
  const user = card.user
  const time = data?.updatedAt.split('-')
  const customPrice = data?.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ');
  const currentUrl = window.location.href
  return (<>
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
                {data?.thumb?.slice(0, 4).map((img, idx) => (<img
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
                    src={BASE_URL + data?.thumb[imgId]}
                    alt="Home images"
                    aria-label="Home images"
                  />
                </div>
              </div>
            </div>
            <div className="card-single__content">
              <div className="card-single__top">
                <div className="d-flex card-single__date">
                  <time
                    className="card-single__time">{`${time?.length ? `${time[2]?.slice(0, 2)}.${time[1]}.${time[0]}` : ''}`}</time>
                  <span className="card-single__view">{data?.viewCount}</span>
                </div>
                <button
                  onClick={() => setModal(!modal)}
                  className="card-single__share-btn"
                >
                  Ulashish
                  <div
                    style={{display: `${modal ? "block" : "none"}`}}
                    className="share-btn"
                  >
                    <a className="ms-2" target="_blank" href={`https://t.me/share/url?url=${currentUrl}`}><FaTelegram
                      fontSize={26}/></a>
                    <a className="ms-2" target="_blank"
                       href={`https://www.facebook.com/sharer.php?u=${currentUrl}`}><FaFacebook fontSize={26}/></a>
                    <a className="ms-2" target="_blank"
                       href={`https://api.whatsapp.com/send?text=${currentUrl}`}><FaWhatsapp fontSize={26}/></a>
                    <a className="ms-2" target="_blank"
                       href={`https://twitter.com/intent/tweet?url=${currentUrl}`}><FaTwitter fontSize={26}/></a>
                    <CopyToClipboard text={currentUrl} >
                      <span className="ms-2" onClick={notify}><FaCopy fontSize={26}/></span>
                    </CopyToClipboard>
                  </div>
                </button>
                <div className="card-single__user-info">
                  <img
                    className="card-single__user-avatar"
                    src={BASE_URL + user?.avatar}
                    width={32}
                    height={32}
                    alt={user?.full_name}
                  />
                  <span className="card-single__user-name">
                    {user?.full_name}
                  </span>
                </div>
              </div>
              <p
                className="card__price card-single__price">{customPrice} {data?.price_type === "dollar" ? "$" : "s'om"}</p>
              <h2 className="card-single__title">{data?.title}</h2>
              <p className="fs-4 mt-2">{data?.district}, {data?.address}</p>
              <p className="card-single__text">{data?.description}</p>
              <div className="d-flex justify-content-between mt-3 card-single__btns">
                <a
                  className="card-single__call-btn"
                  href={"tel:+" + user?.phone}
                >
                  Qo’ng’iroq qilish
                </a>
                <Link
                  className="card-single__send-btn"
                  to={'/messaging'}
                >
                  Xabar yuborish
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="suggestion">
        <div className="container">
          <h2 className="suggestion__title">Siz uchun taklif</h2>
          <CardList page={1} count={5}/>
          <MoreBtn/>
        </div>
      </section>
    </main>

    <ToastContainer/>
    <Footer/>
  </>)
}
>>>>>>> 25db0e0abde8ba0aae6f1025b0b99a20f859fe70
