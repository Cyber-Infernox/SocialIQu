import Conversations from "../../Components/Conversations/Conversations";
import Messages from "../../Components/Messages/Messages";
import Navbar from "../../Components/Navbar/Navbar";
import OnlineChat from "../../Components/OnlineChat/OnlineChat";

import "./Messenger.css";

const Messenger = () => {
  return (
    <>
      <Navbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Messages />
              <Messages own={true} />
              <Messages />
              <Messages />
              <Messages own={true} />
              <Messages own={true} />
              <Messages />
              <Messages own={true} />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="Write Something..."
              ></textarea>
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <OnlineChat />
            <OnlineChat />
            <OnlineChat />
            <OnlineChat />
            <OnlineChat />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
