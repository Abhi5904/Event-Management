import { useState } from "react";
import EventContext from "./Eventcontext";
import jwtEncode from 'jwt-encode'
import { showAlert } from "../components/alert/Alert";
const JWT_SECRET = 'Abhiisgoodb@oy'


const Eventstate = (props) => {
  const host = "http://localhost:5000"
  const categoryInitial = []
  const sponserInitial = []
  const eventInitial = []

  const [users, setUsers] = useState()
  const [categorys, setCategorys] = useState(categoryInitial)
  const [sponseres, setSponseres] = useState(sponserInitial)
  const [events, setEvents] = useState(eventInitial)

  //user

  const getuser = async () => {
    const response = await fetch(`${host}/api/user/getuser`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const json = await response.json()
    if (json.success) {
      setUsers(json.user)
      return json.user
    } else {
      alert('error!!please login')
    }
  }

  const updateuser = async (id, fname, lname, email, country, contactno, gender, detail, image) => {
    const response = await fetch(`${host}/api/user/updateuser/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      },
      body: JSON.stringify({ fname, lname, email, country, contactno, gender, detail })
    })
    const json = response.json()
    console.log(json)
    let newuser = JSON.parse(JSON.stringify(users))
    for (let index = 0; index < newuser.length; index++) {
      const element = newuser[index];
      if (element._id === id) {
        element.firstname = fname
        element.lastname = lname
        element.email = email
        element.country = country
        element.contactno = contactno
        element.gender = gender
        element.detail = detail
        break
      }
    }
    setUsers(newuser)
  }

  // upload user image 

  const userImage = async (id, image) => {
    const response = await fetch(`http://localhost:5000/api/user/uploadimage/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': "application/json",
        "jwtData": localStorage.getItem('token'),
      },
      body: JSON.stringify({
        base64: image
      })
    })
    const json = response.json()
    console.log(json)
  }

  // category
  const getcategory = async () => {
    const response = await fetch(`${host}/api/event/category/fetchcategory`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      }
    })
    const json = await response.json()
    const catgjwtArray = []
    if (json.success) {
      json.category.forEach(category => {
        const jwt = jwtEncode(category._id, JWT_SECRET)
        catgjwtArray.push(jwt);
      })
      const catgjwtArrayString = JSON.stringify(catgjwtArray);
      localStorage.setItem('categoryData', catgjwtArrayString);
      setCategorys(json.category)
      // console.log(categorys)
      return json.category
    }
    else {
      alert('Invalid Credentials')
    }

  }

  // Add a category
  const addcategory = async (categoryname, categorydescription) => {
    const response = await fetch(`${host}/api/event/category/addcategory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      },
      body: JSON.stringify({ categoryname, categorydescription })
    });
    const json = await response.json();
    if (json.success) {
      const category = json.category
      setCategorys(categorys.concat(category))
      // setCategorys([category, ...categorys]);
      showAlert('success', 'Category Added Successfully!')
      return json
    }
    else {
      showAlert('error', 'some error occured!')
    }
  }

  // update category
  const editcategory = async (id, categoryname, categorydescription) => {
    const response = await fetch(`${host}/api/event/category/updatecategory/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token'),
      },
      body: JSON.stringify({ categoryname, categorydescription })
    });
    const json = response.json();
    console.log(json)
    let newCategory = JSON.parse(JSON.stringify(categorys))
    for (let index = 0; index < newCategory.length; index++) {
      const element = newCategory[index];
      if (element._id === id) {
        element.categoryname = categoryname
        element.categorydescription = categorydescription
        break
      }
    }
    setCategorys(newCategory)
  }

  // Delete a category
  const deletecategory = async (id) => {
    const response = await fetch(`${host}/api/event/category/deletecategory/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      },
    });
    const json = response.json();
    console.log(json)
    const newCategory = categorys.filter((category) => { return category._id !== id })
    setCategorys(newCategory)
  }

  // Sponser

  // Fetch a sponser
  const getsponser = async () => {
    const response = await fetch(`${host}/api/event/sponser/fetchsponser`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'jwtData': localStorage.getItem('token')
      }
    })
    const json = await response.json()

    const spnjwtArray = []
    if (json.success) {
      json.sponser.forEach(sponser => {
        const jwt = jwtEncode(sponser._id, JWT_SECRET)
        spnjwtArray.push(jwt);
      })
      const spnjwtArrayString = JSON.stringify(spnjwtArray);
      localStorage.setItem('sponserData', spnjwtArrayString);
      setSponseres(json.sponser)
      return json.sponser
    }
    else {
      showAlert('error', 'Invalid Credentials')
    }
  }

  // Add a Sponser

  const addsponser = async (sponserName, sponserDetail, sponserLogo) => {
    const response = await fetch(`${host}/api/event/sponser/addsponser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      },
      body: JSON.stringify({ sponserDetail, sponserLogo, sponserName })
    });
    const json = await response.json();
    if (json.success) {

      const sponser = json.sponserData
      setSponseres(sponseres.concat(sponser))
      showAlert('success', 'sponser added successfully')
    }
    else {
      showAlert('error', 'sponser not added successfully')
    }
  }
  // Edit a Sponser

  const editsponser = async (id, sponserName, sponserLogo, sponserDetail) => {
    const response = await fetch(`${host}/api/event/sponser/updatesponser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      },
      body: JSON.stringify({ sponserName, sponserDetail, sponserLogo })
    });
    const json = response.json();
    console.log(json)
    let newSponser = JSON.parse(JSON.stringify(sponseres))
    for (let index = 0; index < newSponser.length; index++) {
      const element = newSponser[index];
      if (element._id === id) {
        element.sponserLogo = sponserLogo
        element.sponserName = sponserName
        element.sponserDetail = sponserDetail
        break
      }
    }
    setSponseres(newSponser)
  }

  // Delete a Sponser

  const deletesponser = async (id) => {
    const response = await fetch(`${host}/api/event/sponser/deletesponser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "jwtData": localStorage.getItem('token')
      },
    });
    const json = response.json();
    console.log(json)
    const newSponser = sponseres.filter((sponser) => { return sponser._id !== id })
    setSponseres(newSponser)
  }

  // Event

  // Fetch a Event

  const getevent = async () => {
    const response = await fetch(`${host}/api/event/fetchevent`, {
      method: "GET",
      headers: {
        'Content-type': "application/json",
        "jwtData": localStorage.getItem('token'),
        // 'categoryid': localStorage.getItem('categoryData'),
        // 'sponserid': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcG9uc2VyIjp7ImlkIjoiNjRkMzhjZGUxMjI1N2M4ZWJhMzdjZWVjIn0sImlhdCI6MTY5MTU4NTc1OH0.whO-1BkD5aQng5xY8VhJHF_mEWIIHv-kH2puq66VVck'
      }
    })
    const json = await response.json()
    // console.log('getevent', json)
    if (json.success) {
      setEvents(json.event)
      return json.event
    }
    else {
      showAlert('error', 'event not fetch successfully')
    }
  }

  // Add a Event

  const addevent = async (name, detail, location, stdate, endate, contact, image, noticket, price) => {

    const requestBody = {
      eventName: name,
      eventDescription: detail,
      eventLocation: location,
      eventStDate: stdate,
      eventEndDate: endate,
      contact: contact,
      image: image,
      noOfTicket: noticket,
      totalPrice: price,
    };
    // console.log(data)
    // console.log(decodedDataArray)
    const response = await fetch(`${host}/api/event/addevent`, {
      method: "POST",
      headers: {
        'Content-type': "application/json",
        "jwtData": localStorage.getItem('token'),
        'categoryid': localStorage.getItem('categoryid'),
        'sponserid': localStorage.getItem('sponserid')
      },
      body: JSON.stringify(requestBody)
    })

    const json = await response.json()
    console.log(json)
    if (json.success) {
      const event = json.saveEvent
      console.log(event)
      setEvents(events.concat(json.saveEvent))
      // setEvents([event, ...events])
      showAlert('success', 'event added successfully')
    }
    else {
      showAlert('error', 'event not added successfully')
    }
  }


  // Edit a Event

  const editevent = async (id, name, detail, location, stdate, endate, contact, image, noticket, price, category, sponser) => {
    const requestBody = {
      id: id,
      eventName: name,
      eventDescription: detail,
      eventLocation: location,
      eventStDate: stdate,
      eventEndDate: endate,
      contact: contact,
      image: image,
      noOfTicket: noticket,
      totalPrice: price,
      // category: category,
      // sponser: sponser,
    }
    const response = await fetch(`${host}/api/event/updateevent/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': "application/json",
        "jwtData": localStorage.getItem('token'),
        'categoryid': localStorage.getItem('categoryid'),
        'sponserid': localStorage.getItem('sponserid')
      },
      body: JSON.stringify(requestBody)
    })
    const json = response.json()
    console.log("json", json)

    let newEvent = JSON.parse(JSON.stringify(events))
    for (let index = 0; index < newEvent.length; index++) {
      const element = newEvent[index];
      if (element._id === id) {
        element.name = name
        element.detail = detail
        element.location = location
        element.stdate = stdate
        element.endate = endate
        element.image = image
        element.noticket = noticket
        element.price = price
        element.category = category
        element.sponser = sponser
        break
      }
    }
    setEvents(newEvent)


  }

  // Delete a Event

  const deletevent = async (id) => {
    const response = await fetch(`${host}/api/event/deleteevent/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': "application/json",
        "jwtData": localStorage.getItem('token'),
        // 'categoryid': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYXRlZ29yeSI6eyJpZCI6IjY0ZDM4YzE2MTIyNTdjOGViYTM3Y2VkYSJ9LCJpYXQiOjE2OTE1ODU1NTh9.ilemED5fWpLD2Jx1-josKAbJzsnE58tVE2beTOIoyO4",
        // 'sponserid': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzcG9uc2VyIjp7ImlkIjoiNjRkMzhjZGUxMjI1N2M4ZWJhMzdjZWVjIn0sImlhdCI6MTY5MTU4NTc1OH0.whO-1BkD5aQng5xY8VhJHF_mEWIIHv-kH2puq66VVck'
      }
    })
    const json = response.json()
    console.log(json)
    const newEvent = events.filter((event) => { return event._id !== id })
    // console.log(events._id)
    setEvents(newEvent)
  }

  // upload event image

  const eventImage = async (id, image) => {
    const response = await fetch(`${host}/api/event/uploadeventimage/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': "application/json",
        "jwtData": localStorage.getItem('token'),
      },
      body: JSON.stringify({
        base64: image
      })
    })
    const json = response.json()
    console.log(json)
  }

  return (
    <EventContext.Provider value={{ users, getuser, updateuser, userImage, categorys, getcategory, addcategory, editcategory, deletecategory, sponseres, getsponser, addsponser, editsponser, deletesponser, events, getevent, addevent, editevent, deletevent, eventImage }}>
      {props.children}
    </EventContext.Provider>
  )
}

export default Eventstate