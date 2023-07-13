
import { useRef } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../Api/auth.service";

export const Login = () => {
  const phone = useRef();
  const password = useRef();
const navigate = useNavigate()
  const users = async (value) => {
    const data = await AuthService.userLogin(value);
    if (data.status === 201) {
      console.log(data.data.token);
      localStorage.setItem('token', data.data.token)
      navigate('/')
    } 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = {
      phone: phone.current.value,
      password: password.current.value,
    };
console.log(value);
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

            <form className="login__form" onSubmit={handleSubmit}>
              <input
                required
                type="number"
                placeholder="Telefon raqamingiz"
                ref={phone}
              />

              <input type="password" placeholder="Parol" ref={password} required />

              <button type="submit">Kirish</button>

              <Link to="/register">Ro’yxatdan o’tmaganmisiz?</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
