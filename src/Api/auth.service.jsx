import axios from "./api";

const AuthService = {
  userRegister: async (body) => {
    try {
      const data = await axios.post("/api/users/signup", body);
      return data;
    } catch (error) {
      return error;
    }
  },

  userLogin: async (body) => {
    const data = await axios
      .post("/api/users/login", body)
      .catch((err) => console.log(err));
    return data;
  },

  SendCode: async (body) => {
    try {
      console.log('code',body);
      const data = await axios
        .post("/api/users/send-code", body)
        .catch((err) => console.log(err));
      // console.log(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  VerifyPhone: async (body) => {
    try {
      const data = await axios
        .post("/api/users/check-phone", body)
        .catch((err) => console.log(err));
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },

  VerifyCode: async (phoneCode, phoneId) => {
    try {
      const data = await axios.post("/api/users/validate-code", phoneCode, {
        headers: {
          "code-validation-id": `${phoneId}`,
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default AuthService;
