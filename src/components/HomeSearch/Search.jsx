/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./search.scss"
import { BASE_URL } from "@api/api"

export const Search = ({ data }) => {
  return (
    <div className="search-result">
      {data?.map((item) => (
        <>
          <Link
            to={`/announcement/${item.slug}`}
            className="d-block bg-white border-bottom p-3 text-success"
          >
            <img
              src={BASE_URL + item.thumb[0]}
              width={50}
              height={50}
            />
            <span className="mx-3 fs-5">
              {item.city}
              {item.district ? ", " : ""}
            </span>
            <span>{item.district}</span>
            <p className="m-0 my-1">
              {item?.description?.length > 100
                ? `${item?.description?.substring(0, 50)}...`
                : item?.description}
            </p>
          </Link>
        </>
      ))}
    </div>
  )
}
