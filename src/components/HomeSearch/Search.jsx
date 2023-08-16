/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
// import "./search.scss"
import { BASE_URL } from "@api/api"

export const Search = ({ data }) => {
  console.log(data)
  return (
    <div className="search-result">
      {data?.map((item) => (
        <>
          <Link
            to={`/announcement/${item.slug}`}
            className="d-block bg-white border-bottom p-3 text-success"
          >
            <div className="d-flex">
              <img
                className="rounded"
                src={BASE_URL + item.thumb[0]}
                width={40}
                height={40}
              />
              <div className="mx-3">
                <span>
                  {item.city}
                  {item.district ? ", " : ""}
                </span>
                <span>{item.district}</span>
                <p>
                  {item?.description?.length > 150
                    ? `${item?.description?.substring(0, 50)}...`
                    : item?.description}
                </p>
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  )
}
