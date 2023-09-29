import React, { useContext, useEffect, useState } from 'react'
import '../style/style.css'
import '../style/responsive.css'
import '../style/animate.css'
import Header from '../header/Header'
import Hero from '../header-hero/Hero'
import Footer from '../footer/Footer'
import eventContext from '../../context/Eventcontext'
import { useParams } from 'react-router-dom'
import moment from 'moment'

const EventDetail = () => {
    const context = useContext(eventContext)
    const { userfetchevent, userfetchcategory, userfetchsponser, getuser } = context
    const [event, setEvent] = useState()
    const [category, setCategory] = useState()
    const [sponser, setSponser] = useState()
    const [user, setUser] = useState()
    const { eventId } = useParams()
    useEffect(() => {
        const fetcheventdata = async () => {
            const eventdata = await userfetchevent();
            const matchedEvent = eventdata.find((eve) => eve._id === eventId);
            if (matchedEvent) {
                setEvent(matchedEvent);
            }
        };
        fetcheventdata()
    }, [eventId])
    useEffect(() => {
        if (event) {
            const fetchuserdata = async () => {
                const userdata = await getuser();
                const matchedUser = userdata.find((userid) => userid._id === event.user);
                if (matchedUser) {
                    setUser(matchedUser);
                }
            }
            fetchuserdata()
        }
    }, [event])
    useEffect(()=>{
        if(event){
            const fetchcategory = async()=>{
                const categorydata = await userfetchcategory()
                const matchedCategory = categorydata.find((categoryid)=>categoryid._id ===  event.category)
                if(matchedCategory){
                    setCategory(matchedCategory)
                }
            }
            fetchcategory()
        }
    },[event])
    useEffect(()=>{
        if(event){
            const fetchsponser = async()=>{
                const sponserdata = await userfetchsponser()
                const matchedSponser = sponserdata.find((sponserid)=>sponserid._id ===  event.sponser)
                if(matchedSponser){
                    setSponser(matchedSponser)
                }
            }
            fetchsponser()
        }
    },[event])
    return (
        <>
            <Header logo={'https://demo.egenslab.com/html/eventlab/assets/images/logo-v2.png'} />
            <Hero name={'Event Details'} />
            <div className="event-details-wrapper ">
                <div className="container pt-5 position-relative">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="ed-main-wrap">
                                <div className="ed-top">
                                    <div className="ed-thumb">
                                        <img src={event && event.image} alt="img" />
                                    </div>
                                    <ul className="ed-status">
                                        <li><i className="bi bi-calendar2-week"></i>  {event && moment(event.eventStDate).format('MMMM Do YYYY')}</li>
                                        <li className="active"><i className="bi bi-diagram-3"></i> <span>{event && event.noOfTicket}</span> Seat</li>
                                        <li><i class="bi bi-geo"></i> {event && event.eventLocation}</li>
                                    </ul>
                                    <div className="event-info row align-items-center justify-content-between">
                                        <div className="col-lg-3 col-md-4">
                                            <div className="single-event-info">
                                                <div className="info-icon"><i className="bi bi-blockquote-left"></i></div>
                                                <div className="info-content">
                                                    <h5>Event Type</h5>
                                                    <p>{category && category.categoryname}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4">
                                            <div className="single-event-info">
                                                <div className="info-icon"><i className="bi bi-lightning"></i></div>
                                                <div className="info-content">
                                                    <h5>Sponsor</h5>
                                                    <p>{sponser && sponser.sponserName}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4">
                                            <div className="event-rating text-center">
                                                <ul className="d-flex justify-content-center">
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-half"></i></li>
                                                </ul>
                                                <h6>(500)</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ed-tabs-wrapper mt-3">
                                    <div className="tab-content" id="pills-tabContent2">
                                        <div className="tab-pane fade show active" id="pills-details" role="tabpanel"
                                            aria-labelledby="pills-details-tab">
                                            <div className="details-tab-content">
                                                <h3 className="ed-title">Media companies need to better one then educate
                                                    advertisers. better one then educate.</h3>
                                                <p>Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac placerat
                                                    metus tortor eget magna. Donec mattis posuere pharetra. Donec vestibulum
                                                    ornare velit ut sollicitudin. Pellentesque in faucibus purus.Nulla nisl
                                                    tellus, hendrerit nec dignissim pellentesque, posuere in est. Suspendisse
                                                    bibendum vestibulum elit eu placerat. In ut ipsum in odio euismod tincidunt
                                                    non lacinia nunc. Donec ligula augue, mattis eu varius ac.</p>
                                                <div className="row ed-overview">
                                                    <div className="col-lg-6">
                                                        <h5 className="ed-subtitle">Over View</h5>
                                                        <ul className="overview-list">
                                                            <li><i className="bi bi-check2"></i> You Got Full Free Certificate.</li>
                                                            <li><i className="bi bi-check2"></i> Unlimited Coffe & Tea When U
                                                                Boring.</li>
                                                            <li><i className="bi bi-check2"></i> Etiam dictum, dui sit amet
                                                                venenatis.</li>
                                                            <li><i className="bi bi-check2"></i> Class aptent taciti sociosqu ad
                                                                litora.</li>
                                                            <li><i className="bi bi-check2"></i> Lunch Suspendisse in commodo feli.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="overview-images d-grid">
                                                            <div className="overview-img1">
                                                                <img src="https://demo.egenslab.com/html/eventlab/assets/images/gallary/view1.png" alt="img"
                                                                    className="img-fluid" />
                                                            </div>
                                                            <div className="overview-img2">
                                                                <img src="https://demo.egenslab.com/html/eventlab/assets/images/gallary/view2.png" alt="img"
                                                                    className="img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac placerat
                                                    metus tortor eget magna. Donec mattis posuere pharetra. Donec vestibulum
                                                    ornare velit ut sollicitudin. Pellentesque in faucibus purus.Nulla nisl
                                                    tellus, hendrerit nec dignissim pellentesque.</p>
                                                <div className="comment-form">
                                                    <h5 className="ed-subtitle">Leave Your Comment</h5>
                                                    <form action="#" id="comment-form">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="primary-input-group">
                                                                    <input type="text" id="name" placeholder="Your Full Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="primary-input-group">
                                                                    <input type="email" id="email" placeholder="Your Email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="primary-input-group">
                                                                    <input type="text" id="subject" placeholder="Subject" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="primary-input-group">
                                                                    <textarea name="massege" id="massege" cols="30" rows="7"
                                                                        placeholder="Message"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="submit-btn">
                                                                    <button type="submit" className="primary-submit">Submit Now</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="event-d-sidebar">
                                <div className="event-book-form">
                                    <div className="category-title"><i className="bi bi-bookmark-check"></i>
                                        <h4>Book This Event</h4>
                                    </div>
                                    <form action="#" id="event-book" className="event-book">
                                        <div className="primary-input-group">
                                            <input type="text" id="e-name" placeholder="Your Full Name" />
                                        </div>
                                        <div className="primary-input-group">
                                            <input type="email" id="e-email" placeholder="Your Email" />
                                        </div>
                                        <div className="primary-input-group">
                                            <input type="tel" id="e-tel" placeholder="Phone" />
                                        </div>
                                        <div className="primary-input-group">
                                            <select className="primary-select">
                                                <option selected disabled hidden>Select quantity</option>
                                                <option value="1">Quantity 1</option>
                                                <option value="2">Quantity 2</option>
                                                <option value="3">Quantity 3</option>
                                            </select>
                                        </div>
                                        <div className="primary-input-group">
                                            <input type="text" id="lname" placeholder="Your Full Name" />
                                        </div>
                                        <div className="submit-btn">
                                            <button type="submit" className="primary-submit d-block w-100">Submit Now</button>
                                        </div>
                                    </form>
                                </div>
                                {/* <div className="event-d-sidebar-cards">
                            <div className="category-title"><i className="bi bi-layout-text-sidebar-reverse"></i>
                                <h4>Recent Event</h4>
                            </div>
                            <ul className="event-cards-list">
                                <li className="event-card-sm">
                                    <div className="event-thumb">
                                        <a href="event-details.html">
                                            <img src="https://demo.egenslab.com/html/eventlab/assets/images/event/event-thumb-sm1.png" alt="img"/>
                                        </a>
                                    </div>
                                    <div className="event-sm-info">
                                        <h5><a href="event-details.html">Donec risus dui, suscipit iand
                                                tempor lacinia vehicula.</a></h5>
                                        <div className="event-bottom">
                                            <a className="event-date" href="."><i className="bi bi-calendar2-week"></i> January
                                                21, 2021</a>
                                            <div className="event-deat"><i className="bi bi-diagram-3"></i> <span>500</span>
                                            </div>
                                        </div>
                                        <div className="event-d-btn">
                                            <a href="/eventdetail">Book Now</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div> */}
                                <div className="event-organizer-wrap">
                                    <div className="category-title"><i className="bi bi-person-plus"></i>
                                        <h4>Event Organized By</h4>
                                    </div>
                                    <div className="organizer-info">
                                        <div className="organizer-image">
                                            <img src={user && user.image} alt="img" />
                                        </div>
                                        <h4>{user && user.fname } {user && user.lname}</h4>
                                        <h6 className='mt-2'><i class="bi bi-person-lines-fill"></i> {user && user.contactno}</h6>
                                        <h6 className='mt-2'><i class="bi bi-envelope"></i> {user && user.email}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EventDetail
