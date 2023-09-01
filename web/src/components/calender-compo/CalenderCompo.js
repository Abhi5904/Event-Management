import { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './calendercompo.css';
import calendervalue from '../../context/Eventcontext'
// import 'react-calendar/dist/Calendar.css';

function CalendarCompo() {
  const contex =useContext(calendervalue)
  const {getevent} = contex
  const [date, setDate] = useState();
  const [selectDate,setSelectDate] = useState(null)

  useEffect(()=>{
    const fetcheventdata = async()=>{
      const data = await getevent([])
      const eventDate = data.map((event)=>{
        return [event.eventStDate,event._id]
      })
      const stDate =  eventDate.map((event)=>{
        return event[0]
      })
      const startDate = stDate.map((event)=>{
        const stdate = new Date(event)
        return stdate
      })
      setDate(startDate)
      {selectDate && data.filter((event)=>{
        if(new Date(event.eventStDate).toDateString === selectDate.toDateString){
          return true
        }
      })}
    }
    fetcheventdata()
    // eslint-disable-next-line
  },[])
  const eventShow =(date)=>{
    setSelectDate(date)
  }
  console.log(selectDate)
  return (
    <>
    <div className="container-fluid h-100">
      <h1 className='text-center mt-3'>Event Calendar</h1>
      <div className='calendar-container d-flex justify-content-center my-4'>
        <Calendar onChange={setDate} value={date} onClickDay={eventShow}/>
      </div>
      {/* <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p> */}
      </div>
    </>
  );
}

export default CalendarCompo;