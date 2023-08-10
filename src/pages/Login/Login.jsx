import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../Api/auth.service";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Input, InputNumber, Button } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Login = () => {

  const { t } = useTranslation();


  const navigate = useNavigate();
  const users = async (value) => {
    const data = await AuthService.userLogin(value);
    if (data?.status === 201) {
      localStorage.setItem("token", data.data.token);
      toast.success("Tizimga muvaffaqqiyatli kirdingiz");
      navigate("/");
    } else {
      toast.error(`${t("login.error")}`);
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

  const onFinish = (values) => {
    enterLoading(0)

    const value = {
      phone: "998" + values.phone,
      password: values.password,
    };
    users(value);
    console.log(value);

    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="login__inner ">
        <div className="container">
          <div className="login__wrapper">
            <h3>{t("login.title")}</h3>
            <p className="mt-2">
            {t("login.desc")}
            </p>

            <Form
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="login__form"
            >
              <label className="login__label" htmlFor="phone">
              {t("login.phone")}
              </label>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    type: "regexp",
                    pattern: new RegExp(/\d+/g),
                    message:  `${t("login.requiredPhone")}`,
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
                />
              </Form.Item>
              <label className="login__label" htmlFor="pass">
              {t("login.password")}
              </label>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: `${t("login.requierdPassword")}`,
                  },
                ]}
              >
                <Input.Password placeholder="********" size="large" />
              </Form.Item>

              <Button className="form__button" size="large" loading={loadings[0]} onClick={enterLoading} htmlType="submit">{t("login.title")}</Button>


              <Link to="/register">{t("login.isRegister")}</Link>
            </Form>
          </div>
        </div>
    
      </div>
    </>
  );
};
