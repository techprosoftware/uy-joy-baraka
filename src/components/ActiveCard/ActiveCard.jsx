/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./ActiveCard.scss";
import CardLikeIcon from "@images/card-like-icon.svg";
import CardULikeIcon from "@images/card-ulike-icon.svg";
import mockCardImg from "@images/mock-img.png";
import AnnounService from "../../Api/announ.service";
import { CardSkeleton } from "@components/Cards/CardSkeleton";
import noData from "@images/no-data.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch } from 'antd';
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "@/Api/api";
import cardService from "@/Api/card.service.jsx";


export const ActiveCard = () => {
  const [activeCard, setActiveCard] = useState({
    isLoading: true,
    data: [],
  });

  const [check, setCheck] = useState(true);
  const checkInput = useRef();

  const getActives = async () => {
    const token = localStorage.getItem("token");

    const data = await AnnounService.getActiveCard(token);
    if (data.status == 200) {
      setActiveCard({
        isLoading: false,
        data: data?.data,
      });
    }
  };

  useEffect(() => {
    getActives();
  }, []);

  const newData = activeCard?.data?.posts;
  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = async (evt) => {
    let id = evt.target.id;
    console.log(evt.target.checked);
  
        try {
          const token = localStorage.getItem("token");
          const data = await AnnounService.setActiveCard(id, token);
          if(data.status ===200) {
            toast.success("E'lon faolsizlantirildi.");
          
          }
          getActives();
          
          console.log(data);
        } catch (error) {
          console.log(error.message);
        }
      
  };

  const navigate = useNavigate()
  const handleClick = async (evt) => {
    console.log(evt.target);
    const targetTag = evt.target.className
    const token = localStorage.getItem('token') || ""
    
  if (!token) {
      navigate('/register')
    }

    if (targetTag === 'card__like' || targetTag === 'card__like-img') {
      const response = await cardService.likeCard(newData.announcement_id)
      console.log('like: ', response)
    } else {
      window.scroll(0, 0)
      navigate(`/announcement/${newData?.slug}`)
    }
  }

  return (
    <>
      <div>
        <ul className="card-list">
          {activeCard.isLoading ? (
            mockData.map((moc) => <CardSkeleton key={moc} />)
          ) : newData?.length ? (
            newData?.map((item) => (
              <>
                <li       onClick={handleClick}
 className="card">
                                  <img className="card__img"         src={BASE_URL + item?.thumb[0]}
  height={222} />
                  <div className="card__wrap">
                    <div className="card__inner">
                      <span className="card__city">{item.city}</span>
                      <div className="card__right">
                        <span className="card__view me-2">
                          {item.viewCount}
                        </span>
                        <button className="card__like">
                          <img
                            className="card__like-img"
                            src={CardULikeIcon}
                            width={17}
                            height={16}
                            alt="Card like button image"
                          />
                        </button>
                        <span className="me-1" style={{fontSize: "12px", color: "#666666", lineHeight: "14px"}}> {item?.likeCount}</span>

                      </div>
                    </div>
                    <h3 className="card__body">{item.description}</h3>
                    <button onClick={handleChange} id={item.announcement_id} className="de_active__btn">Faolsizlantirish</button>

                    <p className="de_card__price">
                      {item.price.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1 ')} {item.price_type == "sum" ? "so'm" : "$"}
                    </p>
                  </div>
                </li>
              </>
            ))
          ) : (
            <img className="img-fluid" width={500} src={noData} />
          )}
        </ul>
        <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </div>
    </>
  );
};
