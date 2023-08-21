/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// import "./Register.scss";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AuthService from "../../Api/auth.service";
import { useDispatch } from "react-redux";
import { setPhoneId } from "../../redux/phoneId/phoneIdAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Input, InputNumber, Button } from "antd";
import { useTranslation } from "react-i18next";
import ProfileService from "../../Api/profile.service";

export const EditPassword = () => {
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


  const [form] = Form.useForm();
  const onFinish = async (values) => {
    enterLoading(0);
    console.log(values.password);
    const data = await ProfileService.EditPassword({
      password: values.password,
    });

    console.log(data);
    if(data.data.ok == true) {
      navigate('/login')
    }
  };

  return (
    <>
      <div className="register__inner ">
        <div className="container">
          <div className="register__wrapper">
            <h3 className="mb-3">{t("password.newpass")}</h3>
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
              <label className="register__label" htmlFor="password">
              {t("password.newpass")}
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
                <Input.Password
                  minLength="4"
                  placeholder="********"
                  size="large"
                />
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
                <Input.Password
                  minLength="4"
                  placeholder="********"
                  size="large"
                />
              </Form.Item>

              <Button
                size="large"
                loading={loadings[0]}
                onClick={enterLoading}
                htmlType="submit"
              >
{t("password.verify")}              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
