import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
