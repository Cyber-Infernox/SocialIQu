import "./Conversations.css";

const Conversations = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="conversation">
      <img
        src={PF + "/Profile/DummyProfilePic.jpg"}
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">Sayon Kar</span>
    </div>
  );
};

export default Conversations;
