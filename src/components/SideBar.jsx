import "./SideBar.scss";
import { Logo, ToggleButton, HomeIcon, MessageIcon, TaskIcon, MemberIcon, SettingsIcon } from "../assets";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="Header">
        <img src={Logo}></img>
        <span style={{ marginLeft: "0.5rem" }}>Project M.</span>
        <button className="ToggleButton">
          <img src={ToggleButton} />
          <img src={ToggleButton} />
        </button>
      </div>
      <div className="Items">
        <div className="Item">
          <img src={HomeIcon} />
          <span style={{marginLeft:'0.938rem'}}>Home</span>
        </div>
        <div className="Item">
          <img src={MessageIcon} />
          <span style={{marginLeft:'0.938rem'}}>Messages</span>
        </div>
        <div className="Item">
          <img src={TaskIcon} />
          <span style={{marginLeft:'0.938rem'}}>Tasks</span>
        </div>
        <div className="Item">
          <img src={MemberIcon} />
          <span style={{marginLeft:'0.938rem'}}>Members</span>
        </div>
        <div className="Item">
          <img src={SettingsIcon} />
          <span style={{marginLeft:'0.938rem'}}>Settings</span>
        </div>
      </div>

      <div className="Projects">
        <div className="ProjectsHeader">
            <span>MY PROJECTS</span>

        </div>
        <div className="ProjectItems">
            <div>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
