/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./Upload.scss";
import close from "../../../public/assets/images/close.png";
import ImageCompressor from "image-compressor.js";
import { BackButton } from "@components/BackButton/BackButton";
import { Button, Form, InputNumber, Select, Space } from "antd";
import AnnounService from "../../Api/announ.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

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
    const maxTotalSize = 6 * 1024 * 1024; // 4 MB in bytes
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
          "Umumiy hajm 6 MB dan oshdi. Iltimos, kichik hajmdagi rasmlar yuklang."
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
      toast.error("Maydonni to'liq to'ldiring.");
    }
  };

  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  const handleSubmit = (e) => {
    enterLoading(0)
    e.preventDefault();
    const formData = new FormData();
    // console.log(fullPhone);

  console.log(phone.current.value);

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
  const { t } = useTranslation();

  return (
    <div className="upload__inner">
      <div className="container">
        <BackButton />
        <h2 className="upload__title">{t("addannoun.annountitle")}</h2>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="upload__form"
        >
          <div className="d-flex flex-wrap gap-3 justify-content-center img__wrapper">
            {urls?.map((image, index) => (
              <div className="position-relative " key={index}>
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
            <p>{t("addannoun.addimg")}:</p>
            <label className="upload__img" htmlFor="upload">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#008b51"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>{" "}
              {t("addannoun.imgtitle")}
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
            <p>{t("addannoun.selectcity")}:</p>
            <Space wrap>
              <Select
              placeholder={t("addannoun.selectcity")}
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
                placeholder={t("addannoun.selectcity")}
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
            <p>{t("addannoun.address")}:</p>
            <input
              className="address__input mb-2"
              type="text"
              ref={address}
              placeholder="Chilonzor metorining yonida"
            />
            <Select
              defaultValue={t("addannoun.type")}
              style={{
                width: 200,
              }}
              onChange={handleChange}
              options={[
                {
                  label: `${t("addannoun.type")}`,
                  options: [
                    {
                      label: `${t("addannoun.rent")}`,
                      value: "rent",
                    },
                    {
                      label: `${t("addannoun.sale")}`,
                      value: "sale",
                    },
                  ],
                },
              ]}
            />
          </div>

          <div className="upload__wrap">
            <p>{t("addannoun.title")}</p>
            <textarea
              ref={title}
              className="upload__title__area"
              placeholder="Faqat oilaga beriladi"
              rows="5"
            ></textarea>
          </div>

          <div className="upload__wrap">
            <p>{t("addannoun.desc")}</p>
            <textarea
              ref={description}
              className="upload__title__area"
              placeholder="Uy yaxshi hamma sharoiti bor"
              rows="6"
            ></textarea>
          </div>

          <div className="upload__wrap ">
            <p>{t("addannoun.price")}</p>
            <div className="upload__price">
              <div className="upload__phone">
                <input
                  required
                  ref={price}
                  id="phone"
                  className="price__input"
                  type="number"
                  placeholder="2 000 000"
                />
              </div>
              <Select
                defaultValue={t("addannoun.course")}
                style={{
                  width: 200,
                }}
                onChange={handleChange1}
                options={[
                  {
                    label: `${t("addannoun.course")}`,
                    options: [
                      {
                        label: `${t("addannoun.sum")}`,
                        value: "sum",
                      },
                      {
                        label: `${t("addannoun.usd")}`,
                        value: "dollar",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>

          <div className="upload__wrap">
            <p>{t("addannoun.phone")}:</p>
            <div className="">
              <div className="">
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    type: "regexp",
                    pattern: new RegExp(/\d+/g),
                    message: "Telefon raqam kiriting!",
                  },
                ]}
              >
                <InputNumber
                ref={phone}
                  placeholder="90 123-45-67"
                  maxLength="9"
                  minLength="9"
                  prefix="+998"
                  size="large"
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              </div>
            </div>{" "}
          </div>
          <Button className="upload__button" size="large" loading={loadings[0]} onClick={enterLoading} htmlType="submit">{t("addannoun.send")}</Button>

        
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
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
