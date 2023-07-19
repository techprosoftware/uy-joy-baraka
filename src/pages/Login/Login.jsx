import { useRef } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../Api/auth.service";

export const Login = () => {
  const phone = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const users = async (value) => {
    const data = await AuthService.userLogin(value);
    console.log(data);
    if (data.status === 201) {
      localStorage.setItem("token", data.data.token);
      navigate("/");
    }else {
      console.log('error');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = {
      phone: "998" + phone.current.value,
      password: password.current.value,
    };
    users(value);
  };


 

  return (
    <>
      <div className="login__inner ">
        <div className="container">
          <div className="login__wrapper">
            <h3>Kirish</h3>
            <p className="mt-2">
              Saytimizga kirish uchun ismingiz va raqamingizni kiriting
            </p>

            <form autoComplete="off" className="login__form" onSubmit={handleSubmit}>
              <label className="login__label" htmlFor="phone">
                Nomer
              </label>
              <div className="default__phone">
                <span>+998</span>
                <input
              
               maxLength={11}
                  required
                  id="phone"
                  className="phone"
                  type="number"
                  placeholder="__ ___ __ __"
                  ref={phone}
                  
                />
              </div>
              <label className="login__label" htmlFor="pass">
                Parol
              </label>
              <input
                type="password"
                id="pass"
                className="password"
                placeholder="Parol"
                ref={password}
                required
              />

              <button type="submit">Kirish</button>

              <Link to="/register">Ro’yxatdan o’tmaganmisiz?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
