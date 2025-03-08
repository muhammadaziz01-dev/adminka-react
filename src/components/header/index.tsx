import Logo from "../../assets/icons/logo.svg";
import SeachIcon from "../../assets/icons/search.svg";
import NatificationInon from "../../assets/icons/notification.svg"
import "./style.scss";

function Index() {
  return (
    <>
      <header className="header">
         <div className="header--left">
           <img src={Logo} alt="logo" className="header--left-logo" />
           <h1 className="header--left-title">Tour List</h1>
         </div>
         <div className="header--right">
             <div className="header--right--searchWrap">
                <input className="header--right--searchWrap-input" type="search" />
                <img className="header--right--searchWrap-icon" src={SeachIcon} alt="search" />
             </div>
             <img className="header--right-natif " src={NatificationInon} alt="natification icon" />
             <p className="header--right-day">Sun 10 Nov 1:10 PM</p>
         </div>
      </header>
    </>
  )
}

export default Index