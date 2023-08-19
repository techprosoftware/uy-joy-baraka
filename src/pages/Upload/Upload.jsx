/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
// import "./Upload.scss";
import close from "../../../public/assets/images/close.png";
import ImageCompressor from "image-compressor.js";
import { BackButton } from "@components/BackButton/BackButton";
import { Button, Form, Input, InputNumber, Select, Space } from "antd";
import AnnounService from "../../Api/announ.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";

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
];
const cityData = {
  Toshkent: [
    "Toshkent shahri",
    "Bektemir tumani ",
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
    "Qibray tumani",
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
    "Andijon tumani",
    "Asaka tumani",
    "Baliqchi tumani",
    "Bo'z tumani",
    "Buloqboshi tumani",
    "Izboskan tumani",
    "Jalolquduq tumani",
    "Marhamat tumani",
    "Oltinko'l tumani",
    "Paxtaobod tumani",
    "Qo'rg'ontepa tumani",
    "Shahrixon tumani",
    "Ulug'nor tumani",
    "Xo'jaobod tumani",
    "Xonobod shahri",
  ],
  Namangan: [
    "Namangan shahri",
    "Namangan tumani",
    "Chortoq tumani",
    "Chust tumani",
    "Kosonsoy tumani",
    "Mingbuloq tumani",
    "Norin tumani",
    "Pop tumani",
    "To'raqo'rg'on tumani",
    "Uchqo'rg'on tumani",
    "Uychi tumani",
    "Yangiqo'rgon tumani",
  ],
  Fargona: [
    "Farg'ona shahri",
    "Farg'ona tumani",
    "Beshariq tumani",
    "Bog'dod tumani",
    "Buvayda tumani",
    "Dang'ara tumani",
    "Furqat tumani",
    "Marg'ilon shahri",
    "O'zbekiston tumani",
    "Oltiariq tumani",
    "Qo'qon shahri",
    "Qo'shtepa tumani",
    "Quva tumani",
    "Quvasoy shahri",
    "Rishton tumani",
    "So'x tumani",
    "Toshloq tumani",
    "Uchko'prik tumani",
    "Yozyovon tumani",
  ],
  Sirdaryo: [
    "Sirdaryo shari",
    "Boyovut tumani",
    "Guliston shahri",
    "Guliston tumani",
    "Oqoltin tumani",
    "Sardoba tumani",
    "Sayxunobod tumani",
    "Shirin shahri",
    "Sirdaryo tumani",
    "Xovos tumani",
    "Yangiyer shahri",
  ],
  Jizzax: [
    "Jizzax shahri",
    "Jizzax tumani",
    "Arnasoy tumani",
    "Baxmal tumani",
    "Do'stlik tumani",
    "Forish tumani",
    "G'allaorol tumani",
    "Mirzacho'l tumani",
    "Paxtakor tumani",
    "Yangiobod tumani",
    "Zafarobod tumani",
    "Zarband tumani",
    "Zomin tumani",
  ],
  Samarqand: [
    "Samarqand shahri",
    "Samarqand tumani",
    "Bulung'ur tumani",
    "Ishtixon tumani",
    "Jomboy tumani",
    "Kattaqo'rg'on shahri",
    "Kattaqo'rg'on tumani",
    "Narpay tumani",
    "Nurobod tumani",
    "Oqdaryo tumani",
    "Past darg'om tumani",
    "Paxtachi tumani",
    "Poyariq tumani",
    "Qo'shrabot tumani",
    "Toyloq tumani",
    "Urgut tumani",
  ],
  Qashqadaryo: [
    "Qarshi shahri",
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
    "Qarshi tumani",
    "Shahrisabz shahri",
    "Yakkabog' tumani",
  ],
  Surxondaryo: [
    "Termiz shahri",
    "Angor tumani",
    "Bandixon tumani",
    "Boysun tumani",
    "Denov tumani",
    "Jarqo'rg'on tumani",
    "Muzrobot tumani",
    "Oltinsoy tumani",
    "Qiziriq tumani",
    "Qumqo'rg'on tumani",
    "Sariosiyo tumani",
    "Sherobod tumani",
    "Sho'rchi tumani",
    "Termiz tumani",
    "Uzun tumani",
  ],
  Navoiy: [
    "Navoiy shahri",
    "Karmana tumani",
    "Konimex tumani",
    "Navbahor tumani",
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
    "Kogon shahri",
    "Kogon tumani",
    "Olot tumani",
    "Peshku tumani",
    "Qorako'l tumani",
    "Qorovulbozor tumani",
    "Romitan tumani",
    "Shofirkon tumani",
    "Vobkent tumani",
  ],
  Xorazm: [
    "Bog'ot tumani",
    "Gurlan tumani",
    "Qo'shko'pir tumani",
    "Shovot tumani",
    "Urganch shahri",
    "Urganch tumani",
    "Xazorasp tumani",
    "Xiva tumani",
    "Xonqa tumani",
    "Yangiariq tumani",
    "Yangibozor tumani",
  ],
  Qoraqalpogiston: [
    "Amudaryo tumani",
    "Beruniy tumani",
    "Chimboy tumani",
    "Ellikqala tumani",
    "Kegeyli tumani",
    "Mo'ynoq tumani",
    "Nukus shahri",
    "Nukus tumani",
    "Qonliko'l tumani",
    "Qorauzaq tumani",
    "Qung'irot tumani",
    "Shumanay tumani",
    "Taxiatosh shahri",
    "Taxtako'pir tumani",
    "To'rtko'l tumani",
    "Xo'jayli tumani",
  ],
};
export const Upload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [type, setType] = useState();
  const [price_type, setPrice_type] = useState();

  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState();
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
    setCity(value);
    console.log(value);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
    setDistrict(value);
    console.log(value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setType(value);
  };

  const handleChange1 = (value) => {
    setPrice_type(value);
  };

  const [urls, setUrls] = useState();
  const normFile = (e) => {
    if (Array.isArray(e)) {
      console.log(e);
      return e;
    }
    console.log(e?.fileList);
    return e?.fileList;
  };

  // console.log(normFile());
  const handleImageChange = async (evt) => {
    const maxAllowedImages = 4;
    const maxTotalSize = 6 * 1024 * 1024; // 4 MB in bytes
    const files = Array.from(evt.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length > maxAllowedImages) {
      toast.error(
        `${t("addannoun.max")} ${maxAllowedImages} ${t("addannoun.imgSize")}`
      );
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
        toast.error(`${t("addannoun.errorSize")}`);
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
      toast.success(`${t("addannoun.success")}`);
    } else {
      toast.error(`${t("addannoun.error")}`);
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
    enterLoading(0);
    e.preventDefault();
    const formData = new FormData();
    // console.log(fullPhone);
    const fullPhone = "998" + phone.current.value;

    console.log(phone.current.value);
    if (
      phone.current.value == undefined ||
      fullPhone == undefined ||
      title.current.value == undefined ||
      address.current.value == undefined ||
      description.current.value == undefined ||
      price.current.value == undefined ||
      city == undefined ||
      price_type == undefined ||
      type == undefined ||
      district == undefined
    ) {
      toast.error(`${t("addannoun.error")}`);
    } else {
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
    }

    // console.log(formData);
  };
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="upload__inner">
      <div className="container">
        <BackButton />
        <h2 className="upload__title">{t("addannoun.annountitle")}</h2>

        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          autoComplete="off"
          className="upload__form"
        >
          <div className="d-flex flex-wrap gap-3 justify-content-center img__wrapper">
            {urls?.map((image, index) => (
              <div className="position-relative" key={index}>
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
          {/* <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item> */}
          <div className="upload__wrap">
            <p>{t("addannoun.selectcity")}:</p>

            <Form.Item
              name="city"
              rules={[
                {
                  required: true,
                  message: `* ${t("addannoun.selectcity")}`,
                },
              ]}
            >
              <Select
                size="large"
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
            </Form.Item>

            <Form.Item name="district"
              rules={[
                {
                  required: true,
                  message: `* ${t("addannoun.selectdistrict")}`,
                },
              ]}>
              <Select
                size="large"
                placeholder={t("addannoun.selectdistrict")}
                style={{
                  width: 120,
                }}
                // value={secondCity}
                onChange={onSecondCityChange}
                options={cities?.map((city) => ({
                  label: city,
                  value: city,
                }))}
              />
            </Form.Item>
          </div>

          <div className="upload__wrap">
            <p>{t("addannoun.address")}:</p>
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: `* ${t("addannoun.address")}`,
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Masalan: Chilonzor metorining yonida"
              />
            </Form.Item>
            {/* <input
              className="address__input mb-2"
              type="text"
              ref={address}
              placeholder="Chilonzor metorining yonida"
            /> */}
            <Form.Item name="type" rules={[
                {
                  required: true,
                  message: `* ${t("addannoun.type")}`,
                },
              ]}>
              <Select
                size="large"
                placeholder={t("addannoun.type")}
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
            </Form.Item>
          </div>

          <div className="upload__wrap">
            <p>{t("addannoun.title")}</p>
            <Form.Item name="title" rules={[
                {
                  required: true,
                  message: `* ${t("addannoun.title")}`,
                },
              ]}>
              <TextArea placeholder="Masalan: Faqat oilaga beriladi" rows={4} />
            </Form.Item>
            {/* <textarea
              ref={title}
              className="upload__title__area"
              placeholder="Faqat oilaga beriladi"
              rows="5"
            ></textarea> */}
          </div>

          <div className="upload__wrap">
            <p>{t("addannoun.desc")}</p>
            <Form.Item name="desc" rules={[
                {
                  required: true,
                  message: `* ${t("addannoun.desc")}`,
                },
              ]}>
              <TextArea rows={4} />
            </Form.Item>
            {/* <textarea
              ref={description}
              className="upload__title__area"
              placeholder="Uy yaxshi hamma sharoiti bor"
              rows="6"
            ></textarea> */}
          </div>

          <div className="upload__wrap ">
            <p>{t("addannoun.price")}</p>
            <div className="upload__price">
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
                  placeholder="2 000 000"
                  size="large"
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              {/* <input
                  required
                  ref={price}
                  id="phone"
                  className="price__input"
                  type="number"
                  placeholder="2 000 000"
                /> */}
              <Form.Item name="course" rules={[
                {
                  required: true,
                  message: `* ${t("addannoun.course")}`,
                },
              ]}>
                <Select
                  size="large"
                  placeholder={t("addannoun.course")}
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
              </Form.Item>
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
          <Button
            className="upload__button"
            size="large"
            loading={loadings[0]}
            onClick={enterLoading}
            htmlType="submit"
          >
            {t("addannoun.send")}
          </Button>
        </Form>
      </div>
    </div>
  );
};
