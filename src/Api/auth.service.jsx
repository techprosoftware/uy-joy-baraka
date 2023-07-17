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
      .post("/api/users/send-code", body)
      .catch((err) => console.log(err));
    return data;
  },

  VerifyCode: async (phoneCode, phoneId) => {
    try {
      const data = await axios.post("/api/users/validate-code", phoneCode, {
        headers: {
          "code-validation-id": `${phoneId}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  },
};

export default AuthService;
