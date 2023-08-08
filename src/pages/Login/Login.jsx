import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../Api/auth.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Input, InputNumber, Button } from "antd";
import { useState } from "react";
export const Login = () => {
  const navigate = useNavigate();
  const users = async (value) => {
    const data = await AuthService.userLogin(value);
    if (data?.status === 201) {
      localStorage.setItem("token", data.data.token);
      toast.success("Tizimga muvaffaqqiyatli kirdingiz");
      navigate("/");
    } else {
      toast.error("Raqam yoki parol xato");
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
            <h3>Kirish</h3>
            <p className="mt-2">
              Saytimizga kirish uchun raqam va parolingizni kiriting
            </p>

            <Form
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="login__form"
            >
              <label className="login__label" htmlFor="phone">
                Nomer
              </label>
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
                Parol
              </label>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Parol kiriting!",
                  },
                ]}
              >
                <Input.Password placeholder="********" size="large" />
              </Form.Item>

              <Button className="form__button" size="large" loading={loadings[0]} onClick={enterLoading} htmlType="submit">Kirish</Button>


              <Link to="/register">Ro’yxatdan o’tmaganmisiz?</Link>
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
