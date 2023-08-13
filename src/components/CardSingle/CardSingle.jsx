import "./card-single.scss";
import { BackButton } from "@components/BackButton/BackButton";
import { CardList } from "@components/CardList/CardList";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BASE_URL } from "@api/api";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import CardService from "@/Api/card.service.jsx";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import LoadingIcon from "@images/card-single-loading.svg";
import TelegramIcon from "@images/telegram-icon.svg";
import WhatsappIcon from "@images/whatsapp-icon.svg";
import { InfiniteScroll } from "@components/InfiniteScroll/InfiniteScroll";
import { useTranslation } from "react-i18next";
import MessagingService from "../../Api/messaging.service";

export const CardSingle = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [userId, setUserId] = useState();
  const [anId, setAnId] = useState();

  const userMessage = useRef();

  const postMessage = async (body, idx) => {
    const data = await MessagingService.PostMessage(body, idx);
    if (data.ok === true) {
      toast.success("Xabar yuborildi");
      navigate("/messaging");
    }
    console.log(data);
  };

  const handleMessage = () => {
    const data = {
      message: userMessage.current?.value,
      announcement_id: anId,
    };
    console.log(data);
    postMessage(data, userId);
  };

  let [imgId, setImgId] = useState(0);
  let [modal, setModal] = useState(false);
  const [card, setCard] = useState({ isLoading: true, data: {} });
  const { id } = useParams();

  window.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      setModal(false);
    }
  });

  const fetcher = async () => {
    setCard({ isLoading: true, data: [] });
    try {
      const response = await CardService.getByCard(id);
      setAnId(response.data.post.announcement_id);
      setUserId(response.data.post?.user_id);
      if (response.status === 200) {
        setCard({ isLoading: false, data: response.data });
      }
    } catch (error) {
      setCard({ isLoading: false, data: [] });
      console.log("Error fetching card data: ", error);
    }
  };

  useEffect(() => {
    fetcher();
  }, [id]);

  const data = card.data.post;
  const user = card.user;
  const time = data?.updatedAt.split("-");
  const customPrice = data?.price
    .toString()
    .replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, "$1 ");
  const currentUrl = window.location.href;
  console.log(card);
  return (
    <>
      <main>
        <section>
          <div className="container">
            <div className="mt-5 pt-5">
              <BackButton />
            </div>
            {card.isLoading ? (
              <img
                className={
                  "justify-content-center align-items-center mx-auto w-100 p-5"
                }
                src={LoadingIcon}
                width={300}
                height={300}
                alt={"Loading image"}
              />
            ) : (
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
                    {data?.thumb?.slice(0, 4).map((img, idx) => (
                      <img
                        onClick={() => setImgId(idx)}
                        className={`img-item card-single__img-${idx}`}
                        key={idx}
                        src={BASE_URL + img}
                        alt={img}
                        width={120}
                        height={120}
                        data-id={idx}
                      />
                    ))}
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
                      <time className="card-single__time">{`${
                        time?.length
                          ? `${time[2]?.slice(0, 2)}.${time[1]}.${time[0]}`
                          : ""
                      }`}</time>
                      <span className="card-single__view">
                        {data?.viewCount}
                      </span>
                    </div>
                    <button
                      onClick={() => setModal(!modal)}
                      className="card-single__share-btn"
                    >
                      {t("singlepage.share")}
                      <div
                        style={{ display: `${modal ? "block" : "none"}` }}
                        className="share-btn rounded shadow"
                      >
                        <a
                          className="ms-2"
                          href={`https://t.me/share/url?url=${currentUrl}`}
                        >
                          <img
                            src={TelegramIcon}
                            width={23}
                            height={23}
                            alt="Telegram icon"
                          />
                        </a>
                        <a
                          className="ms-2"
                          href={`https://www.facebook.com/sharer.php?u=${currentUrl}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#4a90e2"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {" "}
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </a>
                        <a
                          className="ms-2"
                          href={`https://api.whatsapp.com/send?text=${currentUrl}`}
                        >
                          <img
                            src={WhatsappIcon}
                            width={23}
                            height={23}
                            alt="Whatsapp icon"
                          />
                        </a>
                        <a
                          className="ms-2"
                          href={`https://twitter.com/intent/tweet?url=${currentUrl}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#4a90e2"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </a>
                        <CopyToClipboard text={currentUrl}>
                          <span
                            className="ms-2"
                            onClick={() => toast.success("Copied!")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#4c4f4d"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect
                                x="9"
                                y="9"
                                width="13"
                                height="13"
                                rx="2"
                                ry="2"
                              ></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                          </span>
                        </CopyToClipboard>
                      </div>
                    </button>
                    {/* <div className="card-single__user-info">
                      <span className="card-single__user-name">
                        {user?.full_name}
                      </span>
                    </div> */}
                  </div>
                  <p className="card__price card-single__price">
                    {customPrice} {data?.price_type === "dollar" ? "$" : "s'om"}
                  </p>
                  <h2 className="card-single__title">{data?.title}</h2>
                  <p className="fs-4 mt-2">{data?.address}</p>
                  <p className="card-single__text">{data?.description}</p>
                  <form>
                    <textarea
                      className="card-single__area"
                      name="chat"
                      id="chat"
                      ref={userMessage}
                      rows="7"
                      placeholder="Uy egasiga yozish"
                    ></textarea>
                  </form>
                  <div className="d-flex justify-content-between mt-3 card-single__btns">
                    <a
                      className="card-single__call-btn"
                      href={"tel:+" + user?.phone}
                    >
                      {t("singlepage.phone")}
                    </a>
                    <button
                      className="card-single__send-btn"
                      onClick={handleMessage}
                    >
                      {t("singlepage.sendsms")}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
        <section className="suggestion">
          <div className="container">
            <h2 className="suggestion__title"> {t("singlepage.recomended")}</h2>
            <CardList page={1} count={12} />
          </div>
        </section>
        <InfiniteScroll page={2} />
      </main>
    </>
  );
};
