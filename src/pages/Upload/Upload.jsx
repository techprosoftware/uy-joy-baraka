/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Upload.scss";
import { Link } from "react-router-dom";
import plus from "../../../public/assets/images/plus-upload.svg";
import close from "../../../public/assets/images/close.png";
import ImageCompressor from "image-compressor.js";
import { BackButton } from "@components/BackButton/BackButton";
import { Select, Space } from "antd";
const provinceData = [
  "Toshkent",
  "Andijon",
  "Buxoro",
  "Farg'ona",
  "Jizzax",
  "Xorazm",
  "Namangan",
  "Navoiy",
  "Qashqadaryo",
  "Qoraqalpog'iston",
  "Samarqand",
  "Sirdaryo",
  "Surxondaryo",
  "ToshkentVil",
];
const cityData = {
  Toshkent: [
    "Bektemir tumani",
    "Chilonzor tumani",
    "Mirzo Ulug'bek tumani",
    "Mirobod tumani",
    "Olmazor tumani",
    "Sergeli tumani",
    "Shayxontohur tumani",
    "Uchtepa tumani",
    "Yakkasaroy tumani",
    "Yashnobod tumani",
    "Yunusobod tumani",
    "Akmal-Abad tumani",
    "Bekabad tumani",
    "Bo'ka tumani",
    "Bo'stonliq tumani",
    "Bo'zsu tumani",
    "Chinoz tumani",
    "Ohangaron tumani",
    "Oqqo'rg'on tumani",
    "Parkent tumani",
    "Piskent tumani",
    "Quyi Chirchiq tumani",
    "O'rta Chirchiq tumani",
    "Soh tumani",
    "Yangiyo'l tumani",
    "Yuqori Chirchiq tumani",
    "Zangiota tumani",
  ],
  Andijon: [
    "Andijon shahri",
    "Asaka tumani",
    "Baliqchi tumani",
    "Boz suv tumani",
    "Bulungur tumani",
    "Izboskan tumani",
    "Jalaquduq tumani",
    "Markhamat tumani",
    "Oltinko'l tumani",
    "Paxtaobod tumani",
    "Shahrixon tumani",
    "Ulugnor tumani",
    "Xo'jaobod tumani",
    "Xonobod tumani",
    "Qorasuv tumani",
  ],
  Namangan: [
    "Chortoq tumani",
    "Chust tumani",
    "Kasansay tumani",
    "Mingbuloq tumani",
    "Namangan shahri",
    "Norin tumani",
    "Pop tumani",
    "To'rakurgon tumani",
    "Uchqo'rg'on tumani",
    "Uychi tumani",
    "Yangiqo'rg'on tumani",
    "Yangiobod tumani",
  ],
  Fargona: [
    "Bog'dod tumani",
    "Beshariq tumani",
    "Dangara tumani",
    "Farg'ona shahri",
    "Farg'ona tumani",
    "Furqat tumani",
    "Quva tumani",
    "Qo'shtepa tumani",
    "Rishton tumani",
    "So'x tumani",
    "Toshloq tumani",
    "Uchko'prik tumani",
    "Yozyovon tumani",
  ],
  Sirdaryo: [
    "Akaltyn tumani",
    "Bayavut tumani",
    "Boyovut tumani",
    "Guliston shahri",
    "Guliston tumani",
    "Mirzaobod tumani",
    "Ohangaron tumani",
    "Oqoltin tumani",
    "Sardoba tumani",
    "Shirin shahri",
    "Sirdaryo tumani",
    "Xovos tumani",
  ],
  Jizzax: [
    "Arnasoy tumani",
    "Baxmal tumani",
    "Do'stlik tumani",
    "Forish tumani",
    "G'allaorol tumani",
    "Gagarin tumani",
    "Paxtakor tumani",
    "Sharof Rashidov tumani",
    "Yangiobod tumani",
    "Zafarobod tumani",
    "Zarbdor tumani",
    "Zomin tumani",
  ],
  Samarqand: [
    "Bulung'ur tumani",
    "Ishtixon tumani",
    "Jomboy tumani",
    "Kattakurgon tumani",
    "Kibray tumani",
    "Narpay tumani",
    "Nurobod tumani",
    "Oqdaryo tumani",
    "Pastdarg'om tumani",
    "Payariq tumani",
    "Samarqand shahri",
    "Toyloq tumani",
    "Urgut tumani",
    "Xo'jaobod tumani",
  ],
  Qashqadaryo: [
    "Chiroqchi tumani",
    "Dehqonobod tumani",
    "G'uzor tumani",
    "Kasbi tumani",
    "Kitob tumani",
    "Koson tumani",
    "Mirishkor tumani",
    "Muborak tumani",
    "Nishon tumani",
    "Qamashi tumani",
    "Qarshi shahri",
    "Qarshi tumani",
    "Shakhrisabz tumani",
    "Yakkabog' tumani",
    "Yarimobod tumani",
    "Zomin tumani",
  ],
  Surxondaryo: [
    "Angor tumani",
    "Boysun tumani",
    "Denov tumani",
    "Jarqo'rg'on tumani",
    "Qiziriq tumani",
    "Qumqo'rg'on tumani",
    "Sherobod tumani",
    "Sho'rchi tumani",
    "Muzrabot tumani",
    "Termiz shahri",
    "Termiz tumani",
    "Uzun tumani",
    "Sariosiyo tumani",
  ],
  Navoiy: [
    "Karmana tumani",
    "Khatirchi tumani",
    "Konimex tumani",
    "Navbahor tumani",
    "Navoiy shahri",
    "Navoiy tumani",
    "Nurota tumani",
    "Qiziltepa tumani",
    "Tomdi tumani",
    "Uchquduq tumani",
    "Xatirchi tumani",
    "Zarafshon shahri",
  ],
  Buxoro: [
    "Buxoro shahri",
    "Buxoro tumani",
    "G'ijduvon tumani",
    "Jondor tumani",
    "Kogon tumani",
    "Qorako'l tumani",
    "Qorovulbozor tumani",
    "Peshku tumani",
    "Romitan tumani",
    "Shofirkon tumani",
    "Vobkent tumani",
    "Yangiobod tumani",
  ],
  Xorazm: [
    "Bog'ot tumani",
    "Gurlan tumani",
    "Hazorasp tumani",
    "Khiva shahri",
    "Shovot tumani",
    "Urganch shahri",
    "Urganch tumani",
    "Xonqa tumani",
    "Xorazm tumani",
    "Yangibozor tumani",
  ],
  Qoraqalpogiston: [
    "Amudaryo tumani",
    "Beruniy tumani",
    "Chimboy tumani",
    "Ellikqal'a tumani",
    "Kegeyli tumani",
    "Mo'ynoq tumani",
    "Nukus shahri",
    "Nukus tumani",
    "Qanliko'l tumani",
    "Qo'ng'irot tumani",
    "Qorao'zak tumani",
    "Shumanay tumani",
    "Taxtako'pir tumani",
    "To'rtko'l tumani",
    "Xo'jayli tumani",
  ],
};
export const Upload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

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

    Promise.all(imagePromises)
      .then((results) => {
        setSelectedImages([...selectedImages, ...results]);
      })
      .catch((error) => {
        console.error("Error reading images:", error);
      });
  };

  const removeImage = (index) => {
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
        <BackButton />
        <h2 className="upload__title">E’lon joylash</h2>

        <form className="upload__form">
          <div className="row img__wrapper">
            {selectedImages.map((image, index) => (
              <div
                className="position-relative col-6 col-sm-6 col-md-6 mb-3"
                key={index}
              >
                <img
                  className="img-fluid rounded-2 img__item"
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
                visibility="hidden"
              />
            </label>
          </div>

          <div className="upload__wrap">
            <p>Shaharni tanlang:</p>
            <Space wrap>
              <Select
                defaultValue={provinceData[0]}
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
            {/* <select className="upload__region">
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
            </select> */}
          </div>

          <div className="upload__wrap">
            <p>Manzil:</p>
            <input
              className="address__input mb-2"
              type="text"
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
                      value: "ijara",
                    },
                    {
                      label: "Sotuv",
                      value: "sotuv",
                    },
                  ],
                },
              ]}
            />
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
              <Select
                defaultValue="Valyuta"
                style={{
                  width: 200,
                }}
                onChange={handleChange}
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
