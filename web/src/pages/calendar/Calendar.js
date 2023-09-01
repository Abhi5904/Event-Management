import React,{useState} from 'react'
import CalendarCompo from '../../components/calender-compo/CalenderCompo'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import HeaderTop from '../../components/top section/HeaderTop'
import './calendar.css'

const Calendar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [arrow, setarrow] = useState(false)
  const [arrowE, setarrowE] = useState(false)
  const [dropdown, setdropdown] = useState(false)

  const handleArrowClick = () => {
    setarrow((prevArrow) => !prevArrow);
  };
  const handleArrowEClick = () => {
    setarrowE((prevArrow) => !prevArrow);
  };
  const handleDropdown = () => {
    // console.log('hello')
    setdropdown((prevShowMenu) => !prevShowMenu);
  }
  const handleSidebarBtnClick = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  return (
    <>
      <div className="offcanvas__overlay"></div>
      <div className="offcanvas__overlay-white"></div>
      <div className="page__full-wrapper">
      <Navbar handleArrowClick={handleArrowClick} showMenu={showMenu} arrow={arrow} arrowE={arrowE} handleArrowEClick={handleArrowEClick} />
      <div className='page__body-wrapper'>
      <Header handleSidebarBtnClick={handleSidebarBtnClick} handleDropdown={handleDropdown} dropdown={dropdown} showMenu={showMenu} />
      <div className="app__slide-wrapper">
      <HeaderTop text={'Event Calender'} style={'invisible'}  />
      <CalendarCompo />
      </div>
      </div>
      </div>
    </>
  )
}

export default Calendar
