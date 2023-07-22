/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./Upload.scss";
import { Link } from "react-router-dom";
import plus from "../../../public/assets/images/plus-upload.svg";
import close from "../../../public/assets/images/close.png";
import ImageCompressor from "image-compressor.js";
import { BackButton } from "@components/BackButton/BackButton";
import { Select, Space } from "antd";
import AnnounService from "../../Api/announ.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const provinceData = [
  "Toshkent",
  "Andijon",
  "Buxoro",
  "Fargona",
  "Jizzax",
  "Xorazm",
  "Namangan",
  "Navoiy",
  "Qashqadaryo",
  "Qoraqalpogiston",
  "Samarqand",
  "Sirdaryo",
  "Surxondaryo",
  "ToshkentVil",
];
const cityData = {
  Toshkent: [
    "Bektemir ",
    "Chilonzor ",
    "Mirzo Ulug'bek ",
    "Mirobod ",
    "Olmazor ",
    "Sergeli ",
    "Shayxontohur ",
    "Uchtepa ",
    "Yakkasaroy ",
    "Yashnobod ",
    "Yunusobod ",
    "Akmal-Abad ",
    "Bekabad ",
    "Bo'ka ",
    "Bo'stonliq ",
    "Bo'zsu ",
    "Chinoz ",
    "Ohangaron ",
    "Oqqo'rg'on ",
    "Parkent ",
    "Piskent ",
    "Quyi Chirchiq ",
    "O'rta Chirchiq ",
    "Soh ",
    "Yangiyo'l ",
    "Yuqori Chirchiq ",
    "Zangiota ",
  ],
  Andijon: [
    "Andijon shahri",
    "Asaka ",
    "Baliqchi ",
    "Boz suv ",
    "Bulungur ",
    "Izboskan ",
    "Jalaquduq ",
    "Markhamat ",
    "Oltinko'l ",
    "Paxtaobod ",
    "Shahrixon ",
    "Ulugnor ",
    "Xo'jaobod ",
    "Xonobod ",
    "Qorasuv ",
  ],
  Namangan: [
    "Chortoq ",
    "Chust ",
    "Kasansay ",
    "Mingbuloq ",
    "Namangan shahri",
    "Norin ",
    "Pop ",
    "To'rakurgon ",
    "Uchqo'rg'on ",
    "Uychi ",
    "Yangiqo'rg'on ",
    "Yangiobod ",
  ],
  Fargona: [
    "Bog'dod ",
    "Beshariq ",
    "Dangara ",
    "Farg'ona shahri",
    "Farg'ona ",
    "Furqat ",
    "Quva ",
    "Qo'shtepa ",
    "Rishton ",
    "So'x ",
    "Toshloq ",
    "Uchko'prik ",
    "Yozyovon ",
  ],
  Sirdaryo: [
    "Akaltyn ",
    "Bayavut ",
    "Boyovut ",
    "Guliston shahri",
    "Guliston ",
    "Mirzaobod ",
    "Ohangaron ",
    "Oqoltin ",
    "Sardoba ",
    "Shirin shahri",
    "Sirdaryo ",
    "Xovos ",
  ],
  Jizzax: [
    "Arnasoy ",
    "Baxmal ",
    "Do'stlik ",
    "Forish ",
    "G'allaorol ",
    "Gagarin ",
    "Paxtakor ",
    "Sharof Rashidov ",
    "Yangiobod ",
    "Zafarobod ",
    "Zarbdor ",
    "Zomin ",
  ],
  Samarqand: [
    "Bulung'ur ",
    "Ishtixon ",
    "Jomboy ",
    "Kattakurgon ",
    "Kibray ",
    "Narpay ",
    "Nurobod ",
    "Oqdaryo ",
    "Pastdarg'om ",
    "Payariq ",
    "Samarqand shahri",
    "Toyloq ",
    "Urgut ",
    "Xo'jaobod ",
  ],
  Qashqadaryo: [
    "Chiroqchi ",
    "Dehqonobod ",
    "G'uzor ",
    "Kasbi ",
    "Kitob ",
    "Koson ",
    "Mirishkor ",
    "Muborak ",
    "Nishon ",
    "Qamashi ",
    "Qarshi shahri",
    "Qarshi ",
    "Shakhrisabz ",
    "Yakkabog' ",
    "Yarimobod ",
    "Zomin ",
  ],
  Surxondaryo: [
    "Angor ",
    "Boysun ",
    "Denov ",
    "Jarqo'rg'on ",
    "Qiziriq ",
    "Qumqo'rg'on ",
    "Sherobod ",
    "Sho'rchi ",
    "Muzrabot ",
    "Termiz shahri",
    "Termiz ",
    "Uzun ",
    "Sariosiyo ",
  ],
  Navoiy: [
    "Karmana ",
    "Khatirchi ",
    "Konimex ",
    "Navbahor ",
    "Navoiy shahri",
    "Navoiy ",
    "Nurota ",
    "Qiziltepa ",
    "Tomdi ",
    "Uchquduq ",
    "Xatirchi ",
    "Zarafshon shahri",
  ],
  Buxoro: [
    "Buxoro shahri",
    "Buxoro ",
    "G'ijduvon ",
    "Jondor ",
    "Kogon ",
    "Qorako'l ",
    "Qorovulbozor ",
    "Peshku ",
    "Romitan ",
    "Shofirkon ",
    "Vobkent ",
    "Yangiobod ",
  ],
  Xorazm: [
    "Bog'ot ",
    "Gurlan ",
    "Hazorasp ",
    "Khiva shahri",
    "Shovot ",
    "Urganch shahri",
    "Urganch ",
    "Xonqa ",
    "Xorazm ",
    "Yangibozor ",
  ],
  Qoraqalpogiston: [
    "Amudaryo ",
    "Beruniy ",
    "Chimboy ",
    "Ellikqal'a ",
    "Kegeyli ",
    "Mo'ynoq ",
    "Nukus shahri",
    "Nukus ",
    "Qanliko'l ",
    "Qo'ng'irot ",
    "Qorao'zak ",
    "Shumanay ",
    "Taxtako'pir ",
    "To'rtko'l ",
    "Xo'jayli ",
  ],
};
export const Upload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [type, setType] = useState();
  const [price_type, setPrice_type] = useState();

  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
    setCity(value);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
    setDistrict(value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setType(value);
  };

  const handleChange1 = (value) => {
    setPrice_type(value);
  };

  const [urls, setUrls] = useState();

  const handleImageChange = async (evt) => {
    const maxAllowedImages = 4;
    const maxTotalSize = 4 * 1024 * 1024; // 4 MB in bytes
    const files = Array.from(evt.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length > maxAllowedImages) {
      toast.error(`Maksimum ${maxAllowedImages} ta rasm yuklash mumkin.`);
      return;
    }

    let totalSize = 0;
    const compressedImages = [];

    const imagePromises = imageFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const compressor = new ImageCompressor();
        compressor.compress(file, {
          quality: 0.3,
          success(result) {
            const reader = new FileReader();
            reader.onload = () => {
              resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(result);
          },
          error(error) {
            reject(error);
          },
        });
      });
    });

    try {
      const compressedResults = await Promise.all(imagePromises);
      const compressedFiles = compressedResults.map((result, index) => {
        const compressedImage = dataURLtoFile(result, imageFiles[index].name);
        return compressedImage;
      });
      const filteredResults = compressedResults.filter(Boolean);
      const compressedImageUrls = filteredResults.map((image) =>
        typeof image === "string" ? image : URL.createObjectURL(image)
      );

      totalSize = compressedFiles.reduce((acc, file) => acc + file.size, 0);

      if (totalSize > maxTotalSize) {
        toast.error(
          "Umumiy hajm 4 MB dan oshdi. Iltimos, kichik hajmdagi rasmlar yuklang."
        );
        return;
      }
      setUrls(compressedImageUrls);
      setSelectedImages(compressedFiles);
    } catch (error) {
      console.error("Rasmni kichraytirishda xatolik:", error);
    }

    console.log("Umumiy rasmlar hajmi:", totalSize, "bayt");
  };

  const dataURLtoFile = (dataURL, fileName) => {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
  };

  const removeImage = (index) => {
    const updatedImages = [...urls];
    updatedImages.splice(index, 1);
    setUrls(updatedImages);
  };

  const title = useRef();
  const address = useRef();
  const description = useRef();
  const price = useRef();
  const phone = useRef();

  const [files, setFiles] = useState();

  const sendAnnoun = async (body) => {
    const token = localStorage.getItem("token");
    const data = await AnnounService.CreateAnnoun(body, token);
    if (data?.status === 201) {
      toast.success("E'lon muvaffaqqiyatli qo'shildi.");
    } else {
      toast.error("E'lon qo'shilmadi.");
    }
  };


  const handleSubmit =  (e) => {
    e.preventDefault();
    const formData = new FormData();

    const fullPhone = "998" + phone.current.value;
    formData.append("phone", fullPhone);
    formData.append("title", title.current.value);
    formData.append("address", address.current.value);
    formData.append("description", description.current.value);
    formData.append("price", price.current.value);
    formData.append("city", city);
    formData.append("district", district);
    formData.append("type", type);
    formData.append("price_type", price_type);
    for (let i = 0; i < selectedImages?.length; i++) {
      formData.append(`images`, selectedImages[i]);
    }

     sendAnnoun(formData);
     
  };

  return (
    <div className="upload__inner">
      <div className="container">
        <BackButton />
        <h2 className="upload__title">E’lon joylash</h2>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="upload__form"
        >
          <div className="d-flex flex-wrap gap-3 justify-content-center img__wrapper">
            {urls?.map((image, index) => (
              <div
                className="position-relative "
                key={index}
              >
                <img
                  className="rounded-2 img__item"
                  src={image}
                  alt={`Selected Image ${index}`}
                />
                <img
                  className="delete__img__btn "
                  src={close}
                  onClick={(e) => removeImage(index)}
                />
              </div>
            ))}
          </div>

          <div className="upload__wrap">
            <p>Uy rasmini yuklang:</p>
            <label className="upload__img" htmlFor="upload">
              <img src={plus} alt="" /> Rasm yuklang
              <input
                type="file"
                className="upload-input"
                // Has been edited and added classname,  because of not appearing in the DOM, also in CSS
                onChange={handleImageChange}
                id="upload"
                multiple
                accept="image/*"
                visibility="hidden"
              />
            </label>
          </div>

          <div className="upload__wrap">
            <p>Shaharni tanlang:</p>
            <Space wrap>
              <Select
                defaultValue="Shahar tanlang"
                style={{
                  width: 120,
                }}
                onChange={handleProvinceChange}
                options={provinceData.map((province) => ({
                  label: province,
                  value: province,
                }))}
              />
              <Select
              defaultValue="Tuman tanlang"
                style={{
                  width: 120,
                }}
                value={secondCity}
                onChange={onSecondCityChange}
                options={cities?.map((city) => ({
                  label: city,
                  value: city,
                }))}
              />
            </Space>
          </div>

          <div className="upload__wrap">
            <p>Manzil:</p>
            <input
              className="address__input mb-2"
              type="text"
              ref={address}
              placeholder="Manzil"
            />
            <Select
              defaultValue="Ijara yoki Sotuv"
              style={{
                width: 200,
              }}
              onChange={handleChange}
              options={[
                {
                  label: "Ijara yoki Sotuv",
                  options: [
                    {
                      label: "Ijara",
                      value: "rent",
                    },
                    {
                      label: "Sotuv",
                      value: "sale",
                    },
                  ],
                },
              ]}
            />
          </div>

          <div className="upload__wrap">
            <p>Sarlavha kiriting:</p>
            <textarea
              ref={title}
              className="upload__title__area"
              placeholder="Sarlavha"
              rows="5"
            ></textarea>
          </div>

          <div className="upload__wrap">
            <p>Uy haqida ma’lumot:</p>
            <textarea
              ref={description}
              className="upload__title__area"
              placeholder="Uy haqida ma’lumot"
              rows="6"
            ></textarea>
          </div>

          <div className="upload__wrap ">
            <p>Narx Kiriting:</p>
            <div className="upload__price">
              <div className="upload__phone">
                <input
                  required
                  ref={price}
                  id="phone"
                  className="price__input"
                  type="number"
                  placeholder="Narx kiriting:"
                />
              </div>
              <Select
                defaultValue="Valyuta"
                style={{
                  width: 200,
                }}
                onChange={handleChange1}
                options={[
                  {
                    label: "Valyuta",
                    options: [
                      {
                        label: "So'm",
                        value: "sum",
                      },
                      {
                        label: "Dollar",
                        value: "dollar",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>

          <div className="upload__wrap">
            <p>Telefon raqam:</p>
            <div className="upload__price">
              <div className="upload__phone">
                <span>+998</span>
                <input
                  ref={phone}
                  required
                  id="phone"
                  className="price__input"
                  type="number"
                  placeholder="__ ___ __ __"
                />
              </div>
            </div>{" "}
          </div>

          <button type="submit" className="upload__btn">
            Saqlash
          </button>
        </form>
      </div>
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
  );
};
