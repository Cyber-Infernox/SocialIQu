import "./OnlineChat.css";

const OnlineChat = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="onlineChat">
      <div className="onlineChatFriend">
        <div className="onlineChatImgContainer">
          <img
            src={PF + "/Profile/DummyProfilePic.jpg"}
            alt=""
            srcset=""
            className="onlineChatImg"
          />
          <div className="onlineChatBadge"></div>
        </div>
        <span className="onlineChatName">Sayon Kar</span>
      </div>
    </div>
  );
};

export default OnlineChat;
