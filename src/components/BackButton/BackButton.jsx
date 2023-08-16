// import "./back-button.scss";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../../../public/assets/images/left-arrow.svg";
import { useTranslation } from "react-i18next";

export const BackButton = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <>
      <Link to="" onClick={() => navigate(-1)} className="arrow__btn">
        <img src={arrow} alt="" /> {t("backbtn")}
      </Link>
    </>
  );
};
