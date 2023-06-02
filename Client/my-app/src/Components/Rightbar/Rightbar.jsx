import "./Rightbar.css";

import img from "../../Assets/Home/Navbar/logo.png";

import { UsersData } from "../../dummyData";

import CakeIcon from "@mui/icons-material/Cake";
import Online from "../Online/Online";

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
          {UsersData.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
