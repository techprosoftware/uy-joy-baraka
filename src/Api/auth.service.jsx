import axios from "./api";

const AuthService = {
  userRegister: async (body) => {
    const data = await axios.post("/api/users/signup", body);
    return data;
  },

  userLogin: async (body) => {
    const data = await axios
      .post("/api/users/login", body)
      .catch((err) => console.log(err));
    return data;
  },

  SendCode: async (body) => {
    const data = await axios
      .post("/api/users/send-code", {
         phone: body 
      })
      .catch((err) => console.log(err));
    return data;
  },
};

export default AuthService;
