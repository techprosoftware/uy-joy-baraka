import axios from "./api";

const AuthService = {
  userRegister: async (body) => {
    try {
      const data = await axios.post("/api/users/signup", body);
      return data;
    } catch (error) {
    return error
    }
  },

  userLogin: async (body) => {
    const data = await axios
      .post("/api/users/login", body)
      .catch((err) => console.log(err));
    return data;
  },

  SendCode: async (body) => {
    console.log('send', body);
    try {
      const data = await axios
      .post("/api/users/send-code", body)
      .catch((err) => console.log(err));
    return data;
    } catch (error) {
      console.log(error);
    }
  },

  VerifyCode: async (phoneCode, phoneId) => {
    console.log(phoneCode);
    console.log(phoneId);
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
