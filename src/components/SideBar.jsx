import "./SideBar.scss";
import {
  Logo,
  ToggleButton,
  HomeIcon,
  MessageIcon,
  TaskIcon,
  MemberIcon,
  SettingsIcon,
  AddSquare,
} from "../assets";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="Header">
        <div>
        <img src={Logo}></img>
        <span style={{ marginLeft: "0.5rem" }}>Project M.</span>
        </div>
        
        <button className="ToggleButton">
          <img src={ToggleButton} />
          <img src={ToggleButton} />
        </button>
      </div>
      <div className="Items">
        <div className="Item">
          <img src={HomeIcon} />
          <span style={{ marginLeft: "0.938rem" }}>Home</span>
        </div>
        <div className="Item">
          <img src={MessageIcon} />
          <span style={{ marginLeft: "0.938rem" }}>Messages</span>
        </div>
        <div className="Item">
          <img src={TaskIcon} />
          <span style={{ marginLeft: "0.938rem" }}>Tasks</span>
        </div>
        <div className="Item">
          <img src={MemberIcon} />
          <span style={{ marginLeft: "0.938rem" }}>Members</span>
        </div>
        <div className="Item">
          <img src={SettingsIcon} />
          <span style={{ marginLeft: "0.938rem" }}>Settings</span>
        </div>
      </div>

      <div className="Projects">
        <div className="ProjectsHeader">
          <span>MY PROJECTS</span>
          <img src={AddSquare}/>
        </div>
        <div className="ProjectItems">
          <div className="Selected">
            <span style={{color:'#7AC555', fontSize:'4rem', paddingBottom:'2.375rem', paddingLeft:'3px', paddingRight:'0.5rem'}}>.</span>
                Mobile App
          </div>
          <div className="RemainingItems">
          <span style={{color:'#FFA500', fontSize:'4rem', paddingBottom:'2.375rem', paddingLeft:'3px', paddingRight:'0.5rem'}}>.</span>
                Website Redesign
          </div>
          <div className="RemainingItems">
          <span style={{color:'#E4CCFD', fontSize:'4rem', paddingBottom:'2.375rem', paddingLeft:'3px', paddingRight:'0.5rem'}}>.</span>
                Design System
          </div>
          <div className="RemainingItems">
          <span style={{color:'#76A5EA', fontSize:'4rem', paddingBottom:'2.375rem', paddingLeft:'3px', paddingRight:'0.5rem'}}>.</span>
                Wireframes
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SideBar;
