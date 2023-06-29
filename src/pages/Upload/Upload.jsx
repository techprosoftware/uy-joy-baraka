/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Upload.scss";
import arrow from "../../../public/assets/images/left-arrow.svg";
import { Link } from "react-router-dom";
import plus from "../../../public/assets/images/plus-upload.svg";
import close from '../../../public/assets/images/close.png'

export const Upload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    const imagePromises = imageFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises)
      .then((results) => {
        setSelectedImages([...selectedImages, ...results]);
      })
      .catch((error) => {
        console.error("Error reading images:", error);
      });
  };

  const removeImage = (index) => {
    // e.preventDefault()
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  useEffect(() => {
    const savedImages = sessionStorage.getItem("selectedImages");
    if (savedImages) {
      setSelectedImages(JSON.parse(savedImages));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("selectedImages", JSON.stringify(selectedImages));
  }, [selectedImages]);

  return (
    <div className="upload__inner">
      <div className="container">
        <Link to="/" className="arrow__btn">
          <img src={arrow} alt="" /> Orqaga
        </Link>
        <h2 className="upload__title">E’lon joylash</h2>

        <form className="upload__form">
          {/* <div className="images__wrap">
        { selectedImages.map((image, index) => (
        <img key={index} src={image} alt={`Selected Image ${index}`} />
      ))}
        </div> */}

          <div className="row img__wrapper">{selectedImages.map((image, index) => (
            <div className="position-relative col-6 col-sm-6 col-md-6 mb-3" key={index}>
              <img  className="img-fluid rounded-2 img__item" src={image} alt={`Selected Image ${index}`} />
              <img  className="delete__img__btn " src={close} onClick={(e) => removeImage(index)} />
            </div>
          ))}</div>

          <div className="upload__wrap">
            <p>Uy rasmini yuklang:</p>
            <label className="upload__img" htmlFor="upload">
              <img src={plus} alt="" /> Rasm yuklang
              <input
                type="file"
                onChange={handleImageChange}
                id="upload"
                visibility="hidden"
              />
            </label>
          </div>

          <div className="upload__wrap">
            <p>Shaharni tanlang:</p>
            <select className="upload__region">
              <option disabled selected value="def">
                Viloyat tanlang
              </option>
              <option value="toshkent">Toshkent shahri</option>
              <option value="andijon">Andijon</option>
              <option value="buxoro">Buxoro</option>
              <option value="fargona">Farg`ona</option>
              <option value="jizzax">Jizzax</option>
              <option value="xorazm">Xorazm</option>
              <option value="namangan">Namangan</option>
              <option value="navoiy">Navoiy</option>
              <option value="qashqadaryo">Qashqadaryo</option>
              <option value="samarqand">Samarqand</option>
              <option value="sirdaryo">Sirdaryo</option>
              <option value="surxondaryo">Surxondaryo</option>
              <option value="toshkent-obl">Toshkent viloyati</option>
              <option value="xorazm">Xorazm</option>
            </select>
            <select className="upload__region mt-2">
              <option disabled selected value="def">
                Tuman tanlang
              </option>
              <option value="toshkent">Chilonzor</option>
              <option value="andijon">Andijon</option>
              <option value="buxoro">Buxoro</option>
              <option value="fargona">Farg`ona</option>
              <option value="jizzax">Jizzax</option>
              <option value="xorazm">Xorazm</option>
              <option value="namangan">Namangan</option>
              <option value="navoiy">Navoiy</option>
              <option value="qashqadaryo">Qashqadaryo</option>
              <option value="samarqand">Samarqand</option>
              <option value="sirdaryo">Sirdaryo</option>
              <option value="surxondaryo">Surxondaryo</option>
              <option value="toshkent-obl">Toshkent viloyati</option>
              <option value="xorazm">Xorazm</option>
            </select>
          </div>

          <div className="upload__wrap">
            <p>Manzil:</p>
            <input
              className="address__input"
              type="text"
              placeholder="Manzil"
            />
            <select className="upload__region mt-2">
              <option disabled selected value="def">
                Ijara yoki sotuv
              </option>
              <option value="toshkent">Sotuv</option>
              <option value="andijon">Ijara</option>
            </select>
          </div>

          <div className="upload__wrap">
            <p>Sarlavha kiriting:</p>
            <textarea
              className="upload__title__area"
              placeholder="Sarlavha"
              rows="5"
            ></textarea>
          </div>

          <div className="upload__wrap">
            <p>Uy haqida ma’lumot:</p>
            <textarea
              className="upload__title__area"
              placeholder="Uy haqida ma’lumot"
              rows="6"
            ></textarea>
          </div>

          <div className="upload__wrap ">
            <p>Narx Kiriting:</p>
            <div className="upload__price">
              <input className="price__input" type="text" placeholder="123" />
              <select className="upload__region">
                <option value="som">So'm</option>
                <option value="dollar">Dollar</option>
              </select>
            </div>
          </div>

          <div className="upload__wrap">
            <p>Telefon raqam:</p>
            <input className="phone__input" type="text" placeholder="+998" />
          </div>

          <button type="submit" className="upload__btn">
            Saqlash
          </button>
        </form>
      </div>
    </div>
  );
};
