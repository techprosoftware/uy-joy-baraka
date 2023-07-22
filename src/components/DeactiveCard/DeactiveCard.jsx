/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./DeactiveCard.scss";
import CardLikeIcon from "@images/card-like-icon.svg";
import CardULikeIcon from "@images/card-ulike-icon.svg";
import mockCardImg from "@images/mock-img.png";
import deleteBtn from "@images/delete-btn.svg";
import noData from "@images/no-data.svg";
import AnnounService from "../../Api/announ.service";
import { CardSkeleton } from "@components/Cards/CardSkeleton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DeactiveCard = () => {
  const [activeCard, setActiveCard] = useState({
    isLoading: true,
    data: [],
  });
  const getActives = async () => {
    const token = localStorage.getItem("token");

    const data = await AnnounService.getDeActiveCard(token);
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
    try {
      const token = localStorage.getItem("token");
      const data = await AnnounService.setActiveCard(id, token);
      console.log(data);
      if(data.status ===200) {
        toast.success("E'lon faollashtirildi.");
      
      }
      getActives();

    } catch (error) {
      toast.warning("Admin tasdig'ini kuting.");
    }
  };

  const handleDelete = async (evt) => {
    let id = evt.target.id;
    try {
      const token = localStorage.getItem("token");
      const data = await AnnounService.deleteCard(id, token);
      // console.log(data.status);
      if(data.status === 200) {
        toast.success("E'lon muvaffaqqiyatli o'chirildi.");
      }
      getActives();

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <ul className="card-list">
          {activeCard.isLoading
            ? mockData.map((moc) => <CardSkeleton key={moc} />)
            : 
            newData.length ? newData?.map((item) => (
              <>
                <li className="card">
                  <div  className="active__check_btn">
                    <img style={{cursor: 'pointer'}} onClick={handleDelete} id={item.announcement_id}  src={deleteBtn} alt="" />
                  </div>

                  <img className="card__img" src={mockCardImg} height={222} />
                  <div className="card__wrap">
                    <div className="card__inner">
                      <span className="card__city">{item.city}, {item.district}</span>
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
                      </div>
                    </div>
                    <h3 className="card__body">{item.description}</h3>
                    <button onClick={handleChange} id={item.announcement_id} className="active__btn">Faollashtirish</button>
                    <p className="de_card__price">
                      {item.price} {item.price_type == "sum" ? "so'm" : "$"}
                    </p>
                  </div>
                </li>
              </>
            )) :  <img className="img-fluid" width={500} src={noData}/>}
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
