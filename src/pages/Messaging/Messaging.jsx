import { useState, useEffect } from "react";
import axios from "axios";
import "./Messaging.scss";
// Icons
import TrashIcon from "../../../public/assets/images/messaging-delete-icon.svg";
import { BackButton } from "../../components/BackButton/BackButton";
import ChatsendIcon from "../../../public/assets/images/chatbar-send-icon.svg";

export const Messaging = () => {
  // Mock database
  const mockData = [
    {
      id: 1,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Umid",
      ad: "Beruniyda 1-xonalik kvartira ijaraga studentlarga beriladi",
      message:
        "Aka biz 15 kishimiz, realniy turamiz, honada kir mashina bormi?",
      chat_started: "01.08.2022",
    },
    {
      id: 2,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Qosim Abdusattorov",
      ad: "Yakkasaroyda 5-xonalik kvartira ijaraga studentlarga beriladi",
      message: "aka tel raqam tashlang?",
      chat_started: "22.08.2021",
    },
    {
      id: 3,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Nozima",
      ad: "Sergelida 2-xonalik kvartira ijaraga studentlarga beriladi",
      message: "Opa bugun o'tsak bo'ladimi",
      chat_started: "3.02.2023",
    },
    {
      id: 4,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Blatnoy",
      ad: "Chilonzor metro oldi 1-xonalik kvartira ijaraga studentlarga beriladi",
      message: "Uyni arzonroq qilib bering",
      chat_started: "01.01.2020",
    },
    {
      id: 5,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Alice Johnson onasi",
      ad: "Chilonzorda 12-kvartil 10-xonalik kvartira ijaraga studentlarga beriladi",
      message: "Rahmat javobingiz uchun",
      chat_started: "12.08.2019",
    },
    {
      id: 6,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Alice Johnson daughter",
      ad: "Chilonzorda 12-kvartil 10-xonalik kvartira ijaraga studentlarga beriladi",
      message: "hop)",
      chat_started: "11.05.2022",
    },
    {
      id: 7,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Alice Johnson uncle",
      ad: "Chilonzorda 12-kvartil 10-xonalik kvartira ijaraga studentlarga beriladi",
      message:
        "Aka biz 15 kishimiz, realniy turamiz, honada kir mashina bormi?",
      chat_started: "1.12.2022",
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const [chats, setChats] = useState(mockData);
  const [activeChatId, setActiveChatId] = useState(null);

  // Handle button active state change
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  // Handle deleting all chats
  const handleDeleteAllChats = () => {
    axios
      .delete("/api/chats")
      .then((response) => {
        console.log("All chats were deleted successfully", response);
        setChats([]);
      })
      .catch((error) => {
        console.error("Error deleting all chats", error);
      });
  };

  // Handle chat bar active
  const handleChatBarActive = (id) => {
    setActiveChatId((prevActiveChatId) => {
      if (prevActiveChatId === id) {
        return null; // Deactivate the chat item if it's already active
      } else {
        return id; // Activate the clicked chat item
      }
    });
  };

  // Handle deleting chat
  const handleRemoveChat = (id) => {
    axios
      .delete(`/api/chats/${id}`)
      .then((response) => {
        console.log("Chat deleted successfully", response);
        setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting chat:", error);
      });
  };

  useEffect(() => {}, [activeChatId]);

  const selectedChat = chats.find((chat) => chat.id === activeChatId);

  return (
    <>
      {/* Header component */}
      {/* Users bar */}
      <div className="users-bar">
        <div className="container">
          <div className="backButton">
            <BackButton />
          </div>
          <div className="bar-wrapper">
            <div className="wrapper-sections">
              <div className="layoutButtons">
                {/* Layout buttons */}
                <button
                  className={`layout-buttons__btn ${
                    isActive ? "layout-buttons__btn" : "active"
                  }`}
                  onClick={handleButtonClick}
                >
                  Sotaman
                </button>
                <button
                  className={`layout-buttons__btn ${
                    isActive ? "active" : "layout-buttons__btn"
                  }`}
                  onClick={handleButtonClick}
                >
                  Sotib olaman
                </button>
              </div>
              {/* Delete messaging */}
              <div className="bg-chat">
                <div className="delete-bar">
                  <button onClick={handleDeleteAllChats} className="trash-icon">
                    <img src={TrashIcon} alt="trash icon" />
                    <span className="trash-span">Delete</span>
                  </button>
                </div>
                {/* Chats */}
                {chats.map((info) => (
                  <div key={info.id} className="chats-container">
                    <div
                      className={`chat-wrapper ${
                        info.id === activeChatId ? "chatActive" : ""
                      }`}
                      onClick={() => handleChatBarActive(info.id)}
                    >
                      <div className="chat-inner">
                        <img src={info.src} alt="user image" />
                      </div>
                      <div className="chat-inner chat-inner__info">
                        <div className="chat-deleting">
                          <span className="chat-user__name">{info.name}</span>
                          <button onClick={() => handleRemoveChat(info.id)}>
                            <img src={TrashIcon} alt="delete chat icon" />
                          </button>
                        </div>
                        <p className="chat-user__ad">
                          {info.ad.substr(0, 45)}....
                        </p>
                        <p className="chat-user__message">
                          {/* Now, it cuts texts based on user message */}
                          {info.message.substr(0, 80)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Chat section */}
          </div>
        </div>
      </div>

      {/* Footer component */}
      {/* <Footer /> */}
    </>
  );
};

//  {
//    selectedChat && (
//      <div className="chatbar-section">
//        <div className="chatbar-layoutButtons">
//          {/* Layout buttons */}
//          <div className="user-selected">
//            <div className="user-inner">
//              <img src={selectedChat.src} alt="selected user image" />
//              <span className="user-name__selected">{selectedChat.name}</span>
//            </div>
//            <div className="trash-inner">
//              <button>
//                <img src={TrashIcon} alt="trash icon" />
//              </button>
//            </div>
//          </div>
//        </div>
//        <div className="bg-chat">
//          <div className="delete-bars">
//            {selectedChat && (
//              <div
//                className={`selected-chat ${
//                  selectedChat.id === activeChatId ? "chatActive" : ""
//                }`}
//              >
//                <img src={SelectedChatImg} alt="selected chat" />
//                <div>
//                  <span className="selected-ad">{selectedChat.ad}</span>
//                </div>
//              </div>
//            )}
//          </div>
//          {/* Chats */}
//          <div className="chats-container__bar">
//            <div className="chat-wrapper__bar">
//              <span className="chatbar-date">{selectedChat.chat_started}</span>
//            </div>
//          </div>
//          {/* Chat messaged mock */}
//          <div style={{ width: "200px", marginTop: "50px" }}>
//            <span
//              style={{
//                backgroundColor: "#80C5A8",
//                marginBottom: "20px",
//                display: "inline-block",
//              }}
//            >
//              {selectedChat.message}
//            </span>
//            <span
//              style={{
//                backgroundColor: "#80A8C5",
//                marginBottom: "20px",
//                display: "inline-block",
//              }}
//            >
//              {selectedChat.message}
//            </span>
//          </div>
//          {/* Chat messaged mock */}
//          <input
//            type="text"
//            className="chatbar-input"
//            placeholder="Sms yozish"
//            aria-label="Enter your message(Habaringizni kiriting)"
//          />
//          <button type="submit" className="chatbar-button">
//            <img
//              className="chatbar-send__icon"
//              src={ChatsendIcon}
//              alt="chat-send icon"
//            />
//          </button>
//        </div>
//      </div>
//    );
//  }
