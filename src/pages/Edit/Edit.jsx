// import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../Api/auth.service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Input, InputNumber, Button } from "antd";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { setPhoneId } from "../../redux/phoneId/phoneIdAction";
import { useDispatch } from "react-redux";

export const Edit = () => {
  const { t } = useTranslation();

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

  const phone = useRef();
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const onFinish = async (values) => {
    enterLoading(0);

    console.log(values.phone);

    const data = await AuthService.VerifyPhone({
      phone: "998" + values.phone,
    });
    console.log(data?.data);
    if (data?.data?.exists == true) {
      const userPhone = await AuthService.SendCode({
        phone: "998" + values.phone,
      });
      dispatch(setPhoneId(userPhone?.data?.codeValidationId));
      navigate("/edit-sms");
    } else {
      toast.warning(`${t("passwordsms.errphone")}`);
    }

    var phoneNumber = "998" + values.phone;

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
      <div className="login__inner ">
        <div className="container">
          <div className="login__wrapper">
            <h3>{t("passwordsms.title")}</h3>
            <p className="mt-2">
              {t("passwordsms.desc")}           </p>

            <Form
              form={form}
              initialValues={{ remember: true }}
              onFinish={onFinish}
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
                    message: `${t("login.requiredPhone")}`,
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

              <Button
                className="form__button"
                size="large"
                loading={loadings[0]}
                onClick={enterLoading}
                htmlType="submit"
              >
                {t("passwordsms.send")}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
