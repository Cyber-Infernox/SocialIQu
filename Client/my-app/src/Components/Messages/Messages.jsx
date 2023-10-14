import "./Messages.css";

const Messages = ({ own }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          src={PF + "/Profile/DummyProfilePic.jpg"}
          alt=""
          srcset=""
          className="messageImg"
        />
        <p className="messageText">Hello! This is a message</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
};

export default Messages;
