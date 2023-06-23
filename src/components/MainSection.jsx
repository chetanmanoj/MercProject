import "./MainSection.scss";
import {
  EditButton,
  AddSquare,
  Filter,
  ArrowDown,
  MiniCalendar,
  ProfileUser,
  Img2,
    Img3,
    Img4,
    Img5,
    AddSquare2,
} from "../assets";

const MainSection = () => {
  return (
    <div className="MainSection">
      <div className="row1">
        <div className="LHS1">
          <span className="Title">Mobile App</span>
          <img src={EditButton} />
        </div>
        <div className="RHS1">
          <img src={AddSquare} />
          <span>Invite</span>
          <div>
          <img src={Img2}/>
          <img src={Img3}/>
          <img src={Img4}/>
          <img src={Img5}/>
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="LHS2">
          <div className="DropDown">
            <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <img src={Filter} />
              <span>Filter</span>
            </div>
            <img src={ArrowDown} />
          </div>
          <div className="DropDown">
            <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <img src={MiniCalendar} />
              <span>Today</span>
            </div>
            <img src={ArrowDown} />
          </div>
        </div>

        <div className="RHS2">
            <div className="ShareButton">
                <img src={ProfileUser}/>
                <span>Share</span>
            </div>
        </div>
        
      </div>

      <div className="row3">
        {/* first column */}
            <div className="col1">
                <div className="colHeader">
                    <div style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
                    <span style={{color:'#5030E5'}}>&#x2022; </span>
                    <span style={{color:'#0D062D', marginLeft:'0.5rem', marginRight:'0.6rem'}}> To Do</span>
                    
                    <span className="Count">4</span>
                    </div>
                    <div>
                    <img src={AddSquare2}/>
                    </div>
                </div>
            </div>
            {/* second column */}
            <div className="col2">
                <div className="colHeader2">
                    <div style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
                    <span style={{color:'#FFA500'}}>&#x2022; </span>
                    <span style={{color:'#0D062D', marginLeft:'0.5rem', marginRight:'0.6rem'}}> On Progress</span>
                    
                    <span className="Count2">4</span>
                    </div>
                    <div>
                    {/* <img src={AddSquare2}/> */}
                    </div>
                </div>
            </div>
            {/* third column */}
            <div className="col3">
                <div className="colHeader3">
                    <div style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
                    <span style={{color:'#76A5EA'}}>&#x2022; </span>
                    <span style={{color:'#0D062D', marginLeft:'0.5rem', marginRight:'0.6rem'}}> Done</span>
                    
                    <span className="Count3">4</span>
                    </div>
                    <div>
                    {/* <img src={AddSquare2}/> */}
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default MainSection;
