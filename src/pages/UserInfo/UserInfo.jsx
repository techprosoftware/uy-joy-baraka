import { useState, useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
// import "./UserInfo.scss";
import { Header } from "../../components/Header/Header";
import { BackButton } from "../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";

//* API endpoint
import ProfileService from "../../Api/profile.service";

//* Ant design packs
import { message } from "antd";

//* Utils
import { formatPhoneNumber } from "../../utils/RegEx.utils";

export const UserInfo = () => {

  const { t } = useTranslation();


  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userData, setUserData] = useState([]);
  const [getterSt, getterStSet] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);

  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };

  //* REF VALUES
  const fullnameValue = useRef();
  const phoneValue = useRef();

  //* GET REQUEST | FETCH
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await ProfileService.GetProfile();
        console.log(response);
        setUserData(response.data);
        setIsLoading(false);
        getterStSet(false);
      } catch (error) {
        console.error("Error occurred while fetching user profile", error);
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [getterSt]);

  //* SUBMIT REQUEST WHEN ONLY SUBMIT (useffect overrider)
  const handleSubmit = async (event) => {
    event.preventDefault(); //* Prevent the default form submission behavior

    //* GET the updated data from the fields | FULLNAME
    const fullnameUserData = {
      full_name: fullnameValue.current?.value,
    };

    //* Clears out the field once submited
    fullnameValue.current.value = "";

    //* GET the updated data from the fields | PHONE
    const phoneNumberData = {
      phone: phoneValue.current.value.replace(/\D/g, ""),
    };

    //* Clears out the field once submited
    phoneValue.current.value = "";

    //* EDIT FULLNAME | REQUEST
    const editProfileName = async () => {
      try {
        const edit = await ProfileService.EditFullname(fullnameUserData);
        if (edit) {
          message.success(
            `${t("account.change")}`
          );
        }
        getterStSet(true);
      } catch (error) {
        console.error("Error editing full name", error);
      }
    };
    await editProfileName(); //* Call the function to perform the relevant actions

    //* EDIT PHONE | REQUEST
    const editPhone = async () => {
      try {
        const edit = await ProfileService.EditPhone(phoneNumberData);
        if (edit) {
          message.success(
            `${t("account.change")}`
          );
        }
        getterStSet(true);
      } catch (error) {
        console.error("Error editing phone", error);
      }
    };
    await editPhone();

    //* EDIT AVATAR | REQUEST
    const editAvatar = async () => {
      try {
        if (avatarFile) {
          const formData = new FormData();
          formData.append("avatar", avatarFile);

          const edit = await ProfileService.EditAvatar(formData);
          if (edit) {
            message.success(
              `${t("account.change")}`
            );
          }
          getterStSet(true);
        }
      } catch (error) {
        console.error("Error editing avatar", error);
      }
    };
    await editAvatar();
  };

  //* RegEX implementation
  const handleChange = (e) => {
    //* Gets target value of input
    const inputValue = e.target.value;

    //* Attach input value to formatPhoneNumber
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setAvatarFile(file);
  };

  //* Create a new classname and give it to an input as an attribute
  const inputClassname =
    phoneNumber.length === 14
      ? "user-edit__input classHandler"
      : "user-edit__input";

  return (
    <>
      {contextHolder}
      {/* <Button onClick={success}>Success</Button> */}
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
                <div>
                  <img
                    className="user-current__image"
                    src={`http://Test.uyjoybaraka.uz/${userData.user?.avatar}`}
                    alt="user-current-image"
                    width={149}
                    height={149}
                  />
                  <div>
                    <h3 className="user-current__name">
                      {userData.user?.full_name}
                    </h3>
                    <p className="user-current__number">
                      +{userData.user?.phone.slice(0, 3)}(
                      {userData.user?.phone.slice(3, 5)}){" "}
                      {userData.user?.phone.slice(5, 8)}{" "}
                      {userData.user?.phone.slice(8, 10)}{" "}
                      {userData.user?.phone.slice(10)}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* User edit section */}
          <div className="user-info__inner">
            <form onSubmit={(e) => handleSubmit(e)} className="form">
              <div className="user-edit__wrapper">
                <div className="user-edit__pic">
                  <h3 className="user-edit__title">{t("account.img")}: </h3>
                  {isLoading ? (
                    <Skeleton width={120} height={80} />
                  ) : (
                    <>
                      <label htmlFor="avatarInput">
                        {avatarFile ? (
                          <img
                            className="fileInputIcon"
                            src={URL.createObjectURL(avatarFile)}
                            alt="edit pen"
                            width={24}
                          />
                        ) : (
                          <div className="fileWrapper">
                            <img
                              className="fileInputIcon"
                              src={`http://Test.uyjoybaraka.uz/${userData.user?.avatar}`}
                              alt="edit pen"
                              width={130}
                              height={120}
                            />
                          </div>
                        )}
                      </label>
                      <input
                        id="avatarInput"
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                        style={{ display: "none" }}
                      />
                    </>
                  )}
                </div>
                <div className="user-edit__name">
                  <h3 className="user-edit__title">{t("account.name")}: </h3>
                  {isLoading ? (
                    <Skeleton width={200} height={30} />
                  ) : (
                    <input
                      className="user-edit__input"
                      ref={fullnameValue}
                      type="text"
                      placeholder={userData.user?.full_name}
                      name="name"
                      autoFocus={true}
                    />
                  )}
                </div>
                <div className="user-edit__number">
                  <h3 className="user-edit__title">{t("account.nomer")}: </h3>
                  {isLoading ? (
                    <Skeleton width={220} height={30} />
                  ) : (
                    <input
                      className={inputClassname}
                      type="text"
                      ref={phoneValue}
                      placeholder={userData.user?.phone}
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
                    {t("account.send")}
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
