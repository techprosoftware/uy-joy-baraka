/* eslint-disable no-unused-vars */
import React from "react";
import imgerr from "../../../public/assets/images/404.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NotFoundError = () => {
  const { t } = useTranslation();

  return (
    <div>
      <img className="error__img" src={imgerr} alt="" />
      <h3 className="title__error mb-2">{t("notfound.errortitle")}</h3>
      <Link to={'/'} className="d-block text-center h5 text-success m-auto">{t("notfound.errorbtn")}</Link>
    </div>
  );
};
