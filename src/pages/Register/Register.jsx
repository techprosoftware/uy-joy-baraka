/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AuthService from "../../Api/auth.service";
import { useDispatch } from "react-redux";
import { setPhoneId } from "../../redux/phoneId/phoneIdAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Input, InputNumber, Button } from "antd";
import { useTranslation } from "react-i18next";

export const Register = () => {

  const { t } = useTranslation();


  const phone = useRef();

  const navigate = useNavigate();


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

  const dispatch = useDispatch();


  const [form] = Form.useForm();
  const onFinish = async (values) => {
    enterLoading(0)
    const value = {
      name: values.username,
      phone: "998" + values.phone,
      password: values.password,
    };

    const data = await AuthService.userRegister(value);
    console.log(data);
    if (data?.status === 201) {
      const userPhone = await AuthService.SendCode({
        phone: "998" + values.phone,
      });
      dispatch(setPhoneId(userPhone?.data?.codeValidationId));
      alert(userPhone?.data?.code);
      navigate("/sms");
    } else if (data?.response?.status === 401) {
      toast.warning(`${t("register.errorPhone")}`);
    } else if (data?.response?.status === 400) {
      toast.error(`${t("register.error")}`);
    }


    var phoneNumber = value.phone;

    function formatPhoneNumber(phoneNumber) {
      phoneNumber = phoneNumber.replace(/\D/g, "");

      var formattedNumber = phoneNumber.replace(
        /(\d{5})(\d{3})(\d{2})(\d{2})/,
        "+$1...$3 $4"
      );

      return formattedNumber;
    }

    var formattedPhoneNumber = formatPhoneNumber(phoneNumber);
    window.localStorage.setItem("phone", formattedPhoneNumber);
  };

  return (
    <>
      <div className="register__inner ">
        <div className="container">
          <div className="register__wrapper">
            <h3>{t("register.title")}</h3>
            <p className="mt-2">
            {t("register.desc")}            </p>

            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
                prefix: "86",
              }}
              style={{
                maxWidth: 600,
              }}
              scrollToFirstError
              autoComplete="off"
              className="register__form"
            >
              <label className="register__label" htmlFor="name">
                {t("register.name")}
              </label>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: `${t("register.requiredName")}`,
                  },
                ]}
              >
                <Input size="large" placeholder={t("register.requiredName")} />
              </Form.Item>

              <label className="register__label" htmlFor="number">
              {t("register.phone")}
              </label>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    type: "regexp",
                    pattern: new RegExp(/\d+/g),
                    message: `${t("register.requiredPhone")}`,
                  },
                ]}
              >
                <InputNumber
                  placeholder="90 123-45-67"
                  maxLength="9"
                  minLength="9"
                  prefix="+998"
                  size="large"
                  style={{
                    width: "100%",
                  }}

                  ref={phone}
                />
              </Form.Item>
              <label className="register__label" htmlFor="password">
                {t("register.password")}
              </label>

              <Form.Item
                name="password"
                
                rules={[
                  {
                    required: true,
                    message: `${t("register.requierdPassword")}`,
                  },
                ]}
                hasFeedback
              >
                <Input.Password minLength="4" placeholder="********" size="large" />
              </Form.Item>
              <label className="register__label" htmlFor="pass2">
              {t("register.requierdPassword2")}
              </label>

              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: `${t("register.requierdPassword2")}`,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(`${t("register.requierdPassword2")}`)
                      );
                    },
                  }),
                ]}
              >
                <Input.Password minLength="4" placeholder="********" size="large" />
              </Form.Item>

              <Button size="large" loading={loadings[0]} onClick={enterLoading} htmlType="submit">{t("register.title")}</Button>

              <Link to="/login">{t("register.isLogin")}</Link>
            </Form>
          </div>
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
    </>
  );
};
