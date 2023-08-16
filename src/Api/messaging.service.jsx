import axios from "axios";
const token = localStorage.getItem("token");
// api/chats/760c3df1-67f4-4242-94d3-1ca54f98f018
//* Indicates chat section
const MessagingService = {
  GetMessageById: async (id) => {
    console.log(id);
    const data = await axios.get(`/api/chats/${id}`, {
      headers: {
        authorization: token,
      },
    });

    return data;
  },

  //* GET | Messaging
  GetMessaging: async () => {
    const { data } = await axios.get("/api/chats", {
      headers: {
        authorization: token,
      },
    });
    return data;
  },
  SendMessage: async (body, id) => {
    console.log(id);
    const { data } = await axios.post(`/api/chats/${id}`, body, {
      headers: {
        authorization: token,
      },
    });
    return data;
  },
  PostMessage: async (body, id) => {
    const { data } = await axios.post(`/api/chats/message/${id}`, body, {
      headers: {
        authorization: token,
      },
    });
    

    return data;
  },
  DeleteChat: async (id) => {
    const data = await axios.delete(`/api/chats/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  },
};

export default MessagingService;
