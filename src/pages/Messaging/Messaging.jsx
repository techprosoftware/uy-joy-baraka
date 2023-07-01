import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@components/Header/Header";
import axios from "axios";
import "./Messaging.scss";
// Icons
import TrashIcon from "../../../public/assets/images/messaging-delete-icon.svg";
import arrow from "../../../public/assets/images/left-arrow.svg";

export const Messaging = () => {
  // Mock database
  const mockData = [
    {
      id: 1,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "John Doe",
      ad: "Chilonzorda 12-kvartil 10-xonalik kvartira ijaraga studentlarga beriladi",
      message:
        "Aka biz 15 kishimiz, realniy turamiz, honada kir mashina bormi?",
    },
    {
      id: 2,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Jane Smith",
      ad: "Chilonzorda 12-kvartil 10-xonalik kvartira ijaraga studentlarga beriladi",
      message:
        "Aka biz 15 kishimiz, realniy turamiz, honada kir mashina bormi?",
    },
    {
      id: 3,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Alice Johnson",
      ad: "Chilonzorda 12-kvartil 10-xonalik kvartira ijaraga studentlarga beriladi",
      message:
        "Aka biz 15 kishimiz, realniy turamiz, honada kir mashina bormi?",
    },
    {
      id: 4,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Alice Johnson father",
      ad: "Chilonzorda 12-kvartil 10-xonalik kvartira ijaraga studentlarga beriladi",
      message:
        "Aka biz 15 kishimiz, realniy turamiz, honada kir mashina bormi?",
    },
    {
      id: 5,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Alice Johnson mother",
      ad: "Chilonzorda 12-kvartil 10-xonalik kvartira ijaraga studentlarga beriladi",
      message:
        "Aka biz 15 kishimiz, realniy turamiz, honada kir mashina bormi?",
    },
    {
      id: 6,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Alice Johnson daughter",
      ad: "Chilonzorda 12-kvartil 10-xonalik kvartira ijaraga studentlarga beriladi",
      message:
        "Aka biz 15 kishimiz, realniy turamiz, honada kir mashina bormi?",
    },
    {
      id: 7,
      src: "../../../public/assets/images/messaging-user-icon.svg",
      name: "Alice Johnson uncle",
      ad: "Chilonzorda 12-kvartil 10-xonalik kvartira ijaraga studentlarga beriladi",
      message:
        "Aka biz 15 kishimiz, realniy turamiz, honada kir mashina bormi?",
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const [chats, setChats] = useState(mockData);
  const [activeChatId, setActiveChatId] = useState(null);

  // Back button handling
  const navigate = useNavigate();

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

  return (
    <>
      {/* Header component */}
      <Header />
      {/* Users bar */}
      <div className="users-bar">
        <div className="container">
          <div className="bar-wrapper">
            <div>
              <button onClick={() => navigate(-1)} className="arrow__btn">
                <img src={arrow} alt="" /> Orqaga
              </button>
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
                          {info.ad.substr(0, 61)}....
                        </p>
                        <p className="chat-user__message">
                          {/* Now, it cuts texts based on user message */}
                          {info.message.substr(0, 58)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat section */}
            <div>
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
                          {info.ad.substr(0, 61)}....
                        </p>
                        <p className="chat-user__message">
                          {/* Now, it cuts texts based on user message */}
                          {info.message.substr(0, 58)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer component */}
      {/* <Footer /> */}
    </>
  );
};
