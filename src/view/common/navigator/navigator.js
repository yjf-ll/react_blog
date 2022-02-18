import author from '../../../assets/images/user.jpg'
import {BookOutlined, FireOutlined, HomeOutlined, UserOutlined} from "@ant-design/icons";
import './navigator.css'
import {NavLink} from 'react-router-dom'
import {useLocation} from "react-router-dom";

function Navigator() {
  const {pathname} = useLocation();
  const flag = (pathname === '/home' || pathname === '');
  const linkColor = flag ? '#999' : '#ccc';
  const activeLinkColor = flag ? 'white' : 'black';
  const authorColor = flag ? 'white' : 'black';
  const iconStyle = {fontSize: '18px'}

  return (
    <div className={"navigator"}>
      <div className={"navigator_author"}>
        <img className={"navigator_author_logo"} src={author} alt=""/>
        <div
          className={"navigator_author_title"}
          style={{color: authorColor}}
        >
          Soul
        </div>
      </div>
      <div className={"navigator_links"}>
        <NavLink
          to={"/home"}
          style={({isActive}) => {
            return {
              color: isActive ? activeLinkColor : linkColor
            };
          }}
        >
          <div className={"navigator_links_item"}>
            <HomeOutlined style={iconStyle}/>
            <div className={"navigator_links_item_title"}>Home</div>
          </div>
        </NavLink>
        <NavLink
          to={"/notes"}
          style={({isActive}) => {
            return {
              color: isActive ? activeLinkColor : linkColor
            };
          }}
        >
          <div className={"navigator_links_item"}>
            <BookOutlined style={iconStyle}/>
            <div className={"navigator_links_item_title"}>Notes</div>
          </div>
        </NavLink>
        <NavLink
          to={"/project"}
          style={({isActive}) => {
            return {
              color: isActive ? activeLinkColor : linkColor
            };
          }}
        >
          <div className={"navigator_links_item"}>
            <FireOutlined style={iconStyle}/>
            <div className={"navigator_links_item_title"}>Project</div>
          </div>
        </NavLink>
        <NavLink
          to={"/about"}
          style={({isActive}) => {
            return {
              color: isActive ? activeLinkColor : linkColor
            };
          }}
        >
          <div className={"navigator_links_item"}>
            <UserOutlined style={iconStyle}/>
            <div className={"navigator_links_item_title"}>About</div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigator