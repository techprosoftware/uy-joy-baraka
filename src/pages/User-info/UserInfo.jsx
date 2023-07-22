import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { BackButton } from "../../components/BackButton/BackButton";
import "./UserInfo.scss";
import userPic from "../../../public/assets/images/user-info_pic.svg";
import UploadIcon from "../../../public/assets/images/user-info_upload.png";
// Ant design packs
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
// import axios from "axios";

export const UserInfo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    // Simulating loading data from an API
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  // useEffect(() => {
  //   //* GET REQUEST
  //   axios
  //     .get("/api/users/profile")
  //     .then((response) => {
  //       const data = response.data;
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   //* PATCH REQUEST
  //   axios
  //     .patch("/api/users/edit-phone")
  //     .then((response) => {
  //       const data = response.data;
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  const handleChange = (e) => {
    // Gets target value of input
    const inputValue = e.target.value;

    // Attach input value to formatPhoneNumber
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
  };

  const formatPhoneNumber = (phoneNumber) => {
    const cleanedNumber = phoneNumber.replace(/\D/g, "");
    let formattedNumber = cleanedNumber.slice(0, 22);
    if (formattedNumber.charAt(0) === "+") {
      formattedNumber = "+" + formattedNumber.slice(1);
    } else {
      formattedNumber = "+" + formattedNumber;
    }
    if (formattedNumber.length > 3) {
      if (formattedNumber.length <= 6) {
        formattedNumber = formattedNumber.replace(
          /^(\+\d{3})(\d{1,2})$/,
          "$1($2)"
        );
      } else if (formattedNumber.length <= 8) {
        formattedNumber = formattedNumber.replace(
          /^(\+\d{3})(\d{2})(\d{1,2})$/,
          "$1($2) $3"
        );
      } else if (formattedNumber.length <= 10) {
        formattedNumber = formattedNumber.replace(
          /^(\+\d{3})(\d{2})(\d{2})(\d{1,2})$/,
          "$1($2) $3 $4"
        );
      } else {
        formattedNumber = formattedNumber.replace(
          /^(\+\d{3})(\d{2})(\d{2})(\d{2})(\d{1,2})$/,
          "$1($2) $3 $4 $5"
        );
      }
    }
    return formattedNumber;
  };

  // Create a new classname and give it to an input as an atribute
  const inputClassname =
    phoneNumber.length === 13
      ? "user-edit__input classHandler"
      : "user-edit__input";

  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://preview.keenthemes.com/good/assets/media/avatars/300-1.jpg",
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <>
      <div className="user-info">
        <div className="container">
          <div className="backButton">
            <BackButton />
          </div>
          <div className="user-current">
            {isLoading ? (
              <div className="user-current__skeleton">
                <Skeleton circle={true} height={100} width={100} />
                <Skeleton
                  width={120}
                  height={20}
                  style={{ marginTop: "10px" }}
                />
                <Skeleton width={80} height={16} style={{ marginTop: "5px" }} />
                <Skeleton width={60} height={12} style={{ marginTop: "5px" }} />
              </div>
            ) : (
              <>
                <img
                  className="user-current__image"
                  src={userPic}
                  alt="user-current-image"
                />
                <h3 className="user-current__name">Akbar Ahmadjonov</h3>
                <p className="user-current__number">+99890 509 83 13</p>
              </>
            )}
          </div>
          {/* User edit section */}
          <div className="user-info__inner">
            <form className="form">
              <div className="user-edit__wrapper">
                <div className="user-edit__pic">
                  <h3 className="user-edit__title">Rasm: </h3>
                  {isLoading ? (
                    <Skeleton width={120} height={80} />
                  ) : (
                    <ImgCrop rotationSlider>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                      >
                        {fileList.length < 1 && (
                          <div>
                            <img
                              className="fileInputIcon"
                              src={UploadIcon}
                              alt="edit pen"
                              width={24}
                            />
                            <span>Rasm yuklang</span>
                          </div>
                        )}
                      </Upload>
                    </ImgCrop>
                  )}
                </div>
                <div className="user-edit__name">
                  <h3 className="user-edit__title">Ism: </h3>
                  {isLoading ? (
                    <Skeleton width={200} height={30} />
                  ) : (
                    <input
                      className="user-edit__input"
                      type="text"
                      placeholder="Akbar"
                      name="name"
                    />
                  )}
                </div>
                <div className="user-edit__number">
                  <h3 className="user-edit__title">Raqam: </h3>
                  {isLoading ? (
                    <Skeleton width={220} height={30} />
                  ) : (
                    <input
                      className={inputClassname}
                      type="text"
                      placeholder="+99890 509 83 13"
                      name="number"
                      maxLength={20}
                      value={phoneNumber}
                      onChange={handleChange}
                    />
                  )}
                </div>
              </div>
              <div className="button-wrapper">
                {isLoading ? (
                  <Skeleton width={120} height={35} />
                ) : (
                  <button className="user-edit__submit" type="submit">
                    Saqlash
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
