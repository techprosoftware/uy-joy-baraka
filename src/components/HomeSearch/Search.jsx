/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import "./search.scss"
import { BASE_URL } from "@api/api";

export const Search = ({ data }) => {
  return (
    <div className="search-result">
      {data?.map((item) => (
        <>
          <Link
            to={`/announcement/${item.slug}`}
            className="wrapper-box d-block bg-white border-bottom text-success"
          >
            <div className="wrapper">
              <img
                className="rounded-img"
                src={BASE_URL + item.thumb[0]}
                width={40}
                height={40}
              />
              <div className="wrapper-box__texts mx-3">
                <span className="wrapper-box__city">
                  {item.city}
                  {item.district ? ", " : ""}
                </span>
                <span>{item.district}</span>
                <div className="line"></div>
                <p className="description text-black">
                  {item?.description?.length > 150
                    ? `${item?.description?.substring(0, 50)}...`
                    : item?.description}
                </p>
              </div>
            </div>
          </Link>
        </>
      ))}
      {data?.length > 0 && <div className="additional__line"></div>}
      {data?.length > 0 && (
        <div className="view__more-wrapper">
          <a className="view__more" href="#top">
            Davom eting ↓
          </a>
        </div>
      )}
    </div>
  );
};
