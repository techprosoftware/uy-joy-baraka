import axios from "axios";
const token = localStorage.getItem("token") || "";

//* Indicates chat section
const MessagingService = {
  //* GET | Messaging
  GetMessaging: async () => {
    const {data} = await axios.get("/api/chats", {
      headers: {
        authorization: token,
      },
    });
    return data
  },
  SendMessage : async (body, id) => {
    const {data} = await axios.post(`/api/chats/${id}`, body, {
      headers: {
        authorization: token,
      }
    })
    return data
  },
  PostMessage : async (body, id) => {
    const {data} = await axios.post(`/api/chats/message/${id}`, body, {
      headers: {
        authorization: token,
      }
    })

    return data
  },

};

export default MessagingService;
