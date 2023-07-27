import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@components/Header/Header";
import axios from "axios";
import "./Messaging.scss";
// Icons
import TrashIcon from "../../../public/assets/images/messaging-delete-icon.svg";
import { BackButton } from "../../components/BackButton/BackButton";
import ChatsendIcon from "../../../public/assets/images/chatbar-send-icon.svg";
import SelectedChatImg from "../../../public/assets/images/chat-icon-home-chilonzor.webp";
import arrow from "../../../public/assets/images/left-arrow.svg";

//* Socket connection
import { Socket, io } from "socket.io-client";

export const Messaging = () => {
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
  ];
  const [isActive, setIsActive] = useState(false);
  const [isBarActive, setIsBarActive] = useState();
  const [chats, setChats] = useState(mockData);
  const [activeChatId, setActiveChatId] = useState(null);

  //* Handle button active state change
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  const handleBarActive = () => {
    setIsBarActive(!isBarActive);
  };

  //* Handle chat bar active
  const handleChatBarActive = (id) => {
    setActiveChatId((prevActiveChatId) => {
      if (prevActiveChatId === id) {
        return null; //* Deactivate the chat item if it's already active
      } else {
        return id; //* Activate the clicked chat item
      }
    });
  };

  useEffect(() => {}, [activeChatId]);

  const selectedChat = chats.find((chat) => chat.id === activeChatId);

  return (
    <>
      {/* Header component */}
      <Header />
      {/* Users bar */}
      <div className="users-bar">
        <div className="container">
          <div className="backButton">
            <button onClick="" className="customBack">
              <img src={arrow} alt="arrow button" /> Orqaga
            </button>
          </div>
          <div className="bar-wrapper">
            <div
              className={`wrapper-sections ${
                isBarActive ? "isBarActive" : "d-block"
              }`}
            >
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
                  <button className="trash-icon">
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
                      onClick={() => {
                        handleChatBarActive(info.id);
                        handleBarActive();
                      }}
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
                          {info.message.substr(0, 57)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Chat section */}
            <div
              className={`chatbar-head ${isBarActive ? "d-block" : "d-block"}`}
            >
              {selectedChat && (
                <div className="chatbar-section">
                  <div className="chatbar-layoutButtons">
                    {/* Layout buttons */}
                    <div className="user-selected">
                      <div className="user-inner">
                        <img src={selectedChat.src} alt="selected user image" />
                        <span className="user-name__selected">
                          {selectedChat.name}
                        </span>
                      </div>
                      <div className="trash-inner">
                        <button>
                          <img src={TrashIcon} alt="trash icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-chat">
                    <div className="delete-bars">
                      {selectedChat && (
                        <div
                          className={`selected-chat ${
                            selectedChat.id === activeChatId ? "chatActive" : ""
                          }`}
                        >
                          <img src={SelectedChatImg} alt="selected chat" />
                          <div>
                            <span className="selected-ad">
                              {selectedChat.ad}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Chats */}
                    <div className="chats-container__bar">
                      <div className="chat-wrapper__bar">
                        <span className="chatbar-date">
                          {selectedChat.chat_started}
                        </span>
                      </div>
                    </div>
                    {/* Chat messaged mock */}
                    <div style={{ width: "200px", marginTop: "50px" }}>
                      <span className="client-ms">{selectedChat.message}</span>
                      <span className="self-ms">{selectedChat.message}</span>
                    </div>
                    {/* Chat messaged mock */}
                    <input
                      type="text"
                      className="chatbar-input"
                      placeholder="Sms yozish"
                      aria-label="Enter your message(Habaringizni kiriting)"
                    />
                    <button type="submit" className="chatbar-button">
                      <img
                        className="chatbar-send__icon"
                        src={ChatsendIcon}
                        alt="chat-send icon"
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer component */}
      {/* <Footer /> */}
    </>
  );
};
