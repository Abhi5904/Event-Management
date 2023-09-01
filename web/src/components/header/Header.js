import React, { useContext, useState,useEffect } from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import { Globe, Search,LogOut,User } from 'lucide-react'
import userdata from '../../context/Eventcontext'
import jwtDecode from 'jwt-decode'
import { showAlert } from '../alert/Alert'
const Header = ({ handleSidebarBtnClick }) => {
    const [dropdown, setdropdown] = useState(false)
    const handleDropdown = () => {
        console.log('hello')
        setdropdown((prevShowMenu) => !prevShowMenu);
    }
    const [dropdownl, setdropdownl] = useState(false)
    const handleDropdownl = () => {
        console.log('hello')
        setdropdownl((prevShowMenu) => !prevShowMenu);
    }

    const context = useContext(userdata)
    const {getuser} = context
    const [user, setUser] = useState()
    useEffect(() => {
        const fetchuserdata = async () => {
          try {
            const userdata = await getuser();
            const usertoken = localStorage.getItem('token')
            const userid = jwtDecode(usertoken)
            const currentUser = userdata.find(element => element._id === userid.user.id);
            if (currentUser) {
              setUser(currentUser);
            }
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
        };
        fetchuserdata()
      }, [])

      const handleLogOut = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('categoryData')
        localStorage.removeItem('sponserData')
        localStorage.removeItem('categoryid')
        localStorage.removeItem('sponserid')
        localStorage.removeItem('eventdetail')
        showAlert('success','Logout')
      }
    return (
        <>
            <div className='app__header__area shadow'>
                <div className="app__header-inner">
                    <div className="app__header-left">
                        <a id="sidebar__active" className="app__header-toggle" onClick={handleSidebarBtnClick}>
                            <div className="bar-icon-2">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        <div className="app__herader-input p-relative">
                            <input type="search" placeholder="Search Here . . ." />
                            <button>
                                <span><Search absoluteStrokeWidth size={30} color='#858585' /></span>
                            </button>
                        </div>
                    </div>
                    <div className="app__header-right">
                        <div className="app__header-action">
                            <ul>
                                <li>
                                    <div className="nav-item p-relative">
                                        <a id="langdropdown" className="langdropdown" onClick={handleDropdownl}>
                                            <span><Globe absoluteStrokeWidth  /></span>
                                            <span className="language-text">English</span>
                                        <div className={`shadow lang__dropdown ${dropdownl?'d-block':'d-none'}`}>
                                            <ul className='m-0 px-2'>
                                                <li>
                                                    <a className="lang__item" href="#">
                                                        <div className="lang__icon">
                                                        </div>
                                                        <div className="lang__country">
                                                            <span>English</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="lang__item" href="#">
                                                        <div className="lang__icon">
                                                        </div>
                                                        <div className="lang__country">
                                                            <span>لعربية</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="lang__item" href="#">
                                                        <div className="lang__icon">
                                                        </div>
                                                        <div className="lang__country">
                                                            <span>简体中文</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="lang__item" href="#">
                                                        <div className="lang__icon">
                                                        </div>
                                                        <div className="lang__country">
                                                            <span>Deutsch</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="lang__item" href="#">
                                                        <div className="lang__icon">

                                                        </div>
                                                        <div className="lang__country">
                                                            <span>Français</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        </a>
                                    </div>
                                </li>
                                {/* <li>
                                    <div className="nav-item p-relative">
                                        <a id="notifydropdown" onClick={handleDropdown}>
                                            <div className="notification__icon">
                                                <Mail absoluteStrokeWidth />
                                            </div>
                                        </a>
                                        <div className="notification__dropdown">
                                            <div className="notification__card card__scroll">
                                                <div className="notification__header">
                                                    <div className="notification__inner">
                                                        <h5>Notifications</h5>
                                                        <span>(10)</span>
                                                    </div>
                                                </div>
                                                <div className="notification__item">
                                                    <div className="notification__thumb">
                                                        <a href="profile.html"><img src="assets/img/meta/chatbox/01.png" alt="image not found" /></a>
                                                    </div>
                                                    <div className="notification__content">
                                                        <p>Mark your calendar for BITPA
                                                            Conference Dhaka Meet up 2023</p>
                                                        <div className="notification__time">
                                                            <span>2h ago</span>
                                                            <span className="status">Graphic Design</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification__item">
                                                    <div className="notification__thumb">
                                                        <a href="profile.html"><img src="assets/img/meta/chatbox/02.png" alt="image not found" /></a>
                                                    </div>
                                                    <div className="notification__content">
                                                        <p>Get ready for today’s Business Conference Tokyo Meet up - 2023!</p>
                                                        <div className="notification__time">
                                                            <span>2h ago</span>
                                                            <span className="status">Graphic Design</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification__item">
                                                    <div className="notification__thumb">
                                                        <a href="profile.html"><img src="assets/img/meta/chatbox/03.png" alt="image not found" /></a>
                                                    </div>
                                                    <div className="notification__content">
                                                        <p>You don’t want to miss Digital Innovation Meet up!</p>
                                                        <div className="notification__time">
                                                            <span>2h ago</span>
                                                            <span className="status">Graphic Design</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification__item">
                                                    <div className="notification__thumb">
                                                        <a href="profile.html"><img src="assets/img/meta/chatbox/04.png" alt="image not found" /></a>
                                                    </div>
                                                    <div className="notification__content">
                                                        <p>Digital Innovation Meet up Canada - 2023 starts in 5 minutes!</p>
                                                        <div className="notification__time">
                                                            <span>2h ago</span>
                                                            <span className="status">Graphic Design</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification__item">
                                                    <div className="notification__thumb">
                                                        <a href="profile.html"><img src="assets/img/meta/chatbox/05.png" alt="image not found" /></a>
                                                    </div>
                                                    <div className="notification__content">
                                                        <p>Mark your calendar for BITPA
                                                            Conference Dhaka Meet up 2023</p>
                                                        <div className="notification__time">
                                                            <span>2h ago</span>
                                                            <span className="status">Graphic Design</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification__item">
                                                    <div className="notification__thumb">
                                                        <a href="profile.html"><img src="assets/img/meta/chatbox/06.png" alt="image not found" /></a>
                                                    </div>
                                                    <div className="notification__content">
                                                        <p>You don’t want to miss Digital Innovation Meet up!</p>
                                                        <div className="notification__time">
                                                            <span>2h ago</span>
                                                            <span className="status">Graphic Design</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification__item">
                                                    <div className="notification__thumb">
                                                        <a href="profile.html"><img src="assets/img/meta/chatbox/07.png" alt="image not found" /></a>
                                                    </div>
                                                    <div className="notification__content">
                                                        <p>Digital Innovation Meet up Canada - 2023 starts in 5 minutes!</p>
                                                        <div className="notification__time">
                                                            <span>2h ago</span>
                                                            <span className="status">Graphic Design</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="notification__item">
                                                    <div className="notification__thumb">
                                                        <a href="profile.html"><img src="assets/img/meta/chatbox/08.png" alt="image not found" /></a>
                                                    </div>
                                                    <div className="notification__content">
                                                        <p>Meet the speakers at Cyber Security Conference Meet up Japan!</p>
                                                        <div className="notification__time">
                                                            <span>2h ago</span>
                                                            <span className="status">Graphic Design</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                        <div className="nav-item p-relative">
                            <a id="userportfolio" onClick={handleDropdown}>
                                <div className="user__portfolio group">
                                    <div className="user__portfolio-thumb">
                                       {user && user.image ?<img src={user.image} alt="image not found" /> :<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" alt="imge not found" />}
                                    </div>
                                    <div className="user__content">
                                        <span>{user && user.fname} {user && user.lname}</span>
                                    </div>
                                </div>
                                <div className={`shadow user__dropdown ${dropdown?'d-block':'d-none'}`} >
                                    <ul className='m-0 p-0'>
                                        <li className='d-flex '>
                                            <User className='me-2'/>
                                            <Link to="/profile">

                                                Profile</Link>
                                        </li>
                                        <li className='d-flex'>
                                        <LogOut className='me-2' />
                                            <Link to="/login" onClick={handleLogOut}>
                                                Logout</Link>
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${dropdown ? 'body__overlay lang-enable notifydropdown-enable user-enable' : 'body__overlay'}`}></div>
        </>
    )
}

export default Header
