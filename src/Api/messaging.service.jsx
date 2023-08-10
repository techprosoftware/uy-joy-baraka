import axios from "axios";
const token = localStorage.getItem("token");

//* Indicates chat section
const MessagingService = {
  //* GET | Messaging
  GetMessaging: async () => {
    const {data} = await axios.get("/api/chats", {
      headers: {
        Authorization: token,
      },
    });
    return data
  },
  SendMessage : async (body, id) => {
    const {data} = await axios.post(`/api/chats/${id}`, body, {
      headers: {
        Authorization: token,
      }
    })
    return data
  }
};

export default MessagingService;
