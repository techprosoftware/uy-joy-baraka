/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./smsPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthService from "../../Api/auth.service";
import { Button, Form,  InputNumber } from "antd";

export const SmsPage = () => {
  const phone = window.localStorage.getItem("phone");

  const navigate = useNavigate();

  const [time, setTime] = useState(59);

  const phoneId = useSelector((item) => item.phoneId.phoneId);

  const phoneIdFunc = async (code) => {
    const phoneCode = { code: code };
    const data = await AuthService.VerifyCode(phoneCode, phoneId);
    if (data?.data?.ok == true) {
      console.log("access");
      localStorage.setItem("token", data?.data?.token);
      navigate("/");
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const [form] = Form.useForm();
  const onFinish = async (values) => {
    enterLoading(0);

    phoneIdFunc(values.code);
    console.log(values.code);
  };

  return (
    <>
      <div className="sms__inner ">
        <div className="container">
          <div className="sms__wrapper">
            <h3>Kodni kiriting</h3>
            <p className="mt-2">
              Quyidagi telefon raqamga kod yuborildi {phone ? phone : ""}
            </p>

            <Form
              form={form}
              name="sms"
              onFinish={onFinish}
              scrollToFirstError
              autoComplete="off"
              className="sms__form"
            >
              <label className="sms__label" htmlFor="phone">
                Nomer
              </label>
              <Form.Item
                name="code"
                rules={[
                  {
                    required: true,
                    type: "regexp",
                    pattern: new RegExp(/\d+/g),
                    message: "sms kodni kiriting!",
                  },
                ]}
              >
                <InputNumber
                  placeholder="0 0 0 0 0"
                  maxLength="9"
                  minLength="9"
                  size="large"
                  suffix={`${time}s`}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              <Button
                className="sms__button"
                size="large"
                loading={loadings[0]}
                onClick={enterLoading}
                htmlType="submit"
              >
                Ro'yxatdan o'tish
              </Button>
              <div className="sms__forward">
                <Link to="/register">Telefon raqamni almashtirish?</Link>
                <Link to="/login">Ro’yxatdan o’tganmisiz?</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
