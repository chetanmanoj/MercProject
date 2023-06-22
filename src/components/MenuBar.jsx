import "./MenuBar.scss";
import {
  SearchIcon,
  CalendarIcon,
  MenuMessageicon,
  Notification,
  Anima,
  ArrowDown,
} from "../assets";

const MenuBar = () => {
  return (
    <div className="MenuBar">
        <div style={{display:'flex', flexDirection:'row' }}>
      <div className="SearchBar">
        <img
          src={SearchIcon}
          style={{
            color: "#787486",
            marginLeft: "0.735rem",
            marginRight: "0.735rem",
          }}
        />
        <span>Search for anything...</span>
      </div>
      {/* <div style={{just:'center'}}> */}
      <div className="MenuItems">
        <img src={CalendarIcon}/>
        <img src={MenuMessageicon}/>
        <img src={Notification}/>
      </div>
      <div className="Account">
        <div className="NamePlace">
          <span style={{color:'#0D062D'}}>Anima Agrawal</span>
          <span style={{color:'#787486'}}>U.P, India</span>
        </div>
        <div>
            <img src={Anima} className="ProImage"/>
        </div>
        <img src={ArrowDown} className="ArrowDown"/>
      </div>
      {/* </div> */}
      </div>
    </div>
  );
};

export default MenuBar;
