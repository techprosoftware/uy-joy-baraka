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
    setCheck(!check);
    console.log(check);
    console.log(id);

   
      try {
        const token = localStorage.getItem("token");
        const data = await AnnounService.setActiveCard(id, token);
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
          {activeCard.isLoading ? (
            mockData.map((moc) => <CardSkeleton key={moc} />)
          ) : newData?.length ? (
            newData?.map((item) => (
              <>
                <li className="card">
                  <div className="active__checkbtn">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      hidden="hidden"
                      onChange={handleChange}
                      id={item.announcement_id}
                    />
                    <label className="switch" htmlFor={item.announcement_id} />
                  </div>

                  <img className="card__img" src={mockCardImg}  height={222} />
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
                      </div>
                    </div>
                    <h3 className="card__body">{item.description}</h3>
                    <p className="card__price">
                      {item.price} {item.price_type == "sum" ? "so'm" : "$"}
                    </p>
                  </div>
                </li>
              </>
            ))
          ) : (
            <img className="img-fluid" width={500} src={noData} />
          )}
        </ul>
      </div>
    </>
  );
};
