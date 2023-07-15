import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { BackButton } from "../../components/BackButton/BackButton";
import "./UserInfo.scss";
import userPic from "../../../public/assets/images/user-info_pic.svg";
import UserChecked from "../../../public/assets/images/user-edit__checked.svg";
// import axios from "axios";

export const UserInfo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

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

  return (
    <>
      <Header />
      <div className="user-info">
        <div className="container">
          <div className="backButton">
            <BackButton />
          </div>
          <div className="user-current">
            {isLoading ? (
              <div className="user-current__skeleton">
                <Skeleton circle={true} height={80} width={80} />
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
                <span className="user-current__ID">ID: 4024</span>
              </>
            )}
          </div>
          {/* User edit section */}
          <div className="user-info__inner">
            <form className="form">
              <div className="user-edit__wrapper">
                <div className="user-edit__pic">
                  {selectedImage && (
                    <div className="selected-image__wrapper">
                      <h5 className="selected__title">
                        <img src={UserChecked} alt="user selected image" />{" "}
                        Tanlangan
                      </h5>
                      <img
                        className="selected-image"
                        src={selectedImage}
                        alt="Selected"
                      />
                    </div>
                  )}
                  <h3 className="user-edit__title">Rasm: </h3>
                  {isLoading ? (
                    <Skeleton width={120} height={20} />
                  ) : (
                    <input
                      className="user-edit__file"
                      type="file"
                      name="file"
                      onChange={handleImageChange}
                    />
                  )}
                </div>
                <div className="user-edit__name">
                  <h3 className="user-edit__title">Ism: </h3>
                  {isLoading ? (
                    <Skeleton width={200} height={20} />
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
                    <Skeleton width={220} height={20} />
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
      <Footer />
    </>
  );
};
