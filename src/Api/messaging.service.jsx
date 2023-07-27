import axios from "axios";
const token = localStorage.getItem("token");

//* Indicates chat section
const MessagingService = {
  //* GET | Messaging
  GetMessaging: async () => {
    await axios.get("/api/chats", {
      headers: {
        Authorization: token,
      },
    });
  },
};

export default MessagingService;
