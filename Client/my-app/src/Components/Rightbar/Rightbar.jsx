import "./Rightbar.css";

import img from "../../Assets/Home/Navbar/logo.png";

import CakeIcon from "@mui/icons-material/Cake";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <CakeIcon className="birthdayImg" />
          <span className="birthdayText">
            <b>Virat Kohli</b> and 3 others have their birthday today
          </span>
        </div>
        <img src={img} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rihtbarProfileImgContainer">
              <img src={img} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lionel Messi</span>
          </li>
          <li className="rightbarFriend">
            <div className="rihtbarProfileImgContainer">
              <img src={img} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lionel Messi</span>
          </li>
          <li className="rightbarFriend">
            <div className="rihtbarProfileImgContainer">
              <img src={img} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lionel Messi</span>
          </li>
          <li className="rightbarFriend">
            <div className="rihtbarProfileImgContainer">
              <img src={img} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lionel Messi</span>
          </li>
          <li className="rightbarFriend">
            <div className="rihtbarProfileImgContainer">
              <img src={img} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lionel Messi</span>
          </li>
          <li className="rightbarFriend">
            <div className="rihtbarProfileImgContainer">
              <img src={img} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lionel Messi</span>
          </li>
          <li className="rightbarFriend">
            <div className="rihtbarProfileImgContainer">
              <img src={img} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lionel Messi</span>
          </li>
          <li className="rightbarFriend">
            <div className="rihtbarProfileImgContainer">
              <img src={img} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lionel Messi</span>
          </li>
          <li className="rightbarFriend">
            <div className="rihtbarProfileImgContainer">
              <img src={img} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lionel Messi</span>
          </li>
          <li className="rightbarFriend">
            <div className="rihtbarProfileImgContainer">
              <img src={img} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lionel Messi</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
