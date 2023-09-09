import React from 'react'
import '../style/style.css'
import '../style/responsive.css'
import '../style/animate.css'
import Header from '../header/Header'
import Hero from '../header-hero/Hero'
import Footer from '../footer/Footer'

const EventDetail = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <div class="event-details-wrapper ">
        <div class="container pt-120 position-relative">
            <div class="background-title text-style-one">
                <h2>Event Details</h2>
            </div>
            <div class="row">
                <div class="col-xl-8">
                    <div class="ed-main-wrap">
                        <div class="ed-top">
                            <div class="ed-thumb">
                                <img src="assets/images/event/ed-thumb.png" alt="img"/>
                            </div>
                            <ul class="ed-status">
                                <li><i class="bi bi-calendar2-week"></i> January 21, 2021</li>
                                <li class="active"><i class="bi bi-diagram-3"></i> <span>500</span> Seat</li>
                                <li><i class="bi bi-pin-map"></i>Broadw, New York</li>
                            </ul>
                            <div class="event-info row align-items-center">
                                <div class="col-lg-3 col-md-4">
                                    <div class="single-event-info">
                                        <div class="info-icon"><i class="bi bi-blockquote-left"></i></div>
                                        <div class="info-content">
                                            <h5>Event Type</h5>
                                            <p>Web Development</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <div class="single-event-info">
                                        <div class="info-icon"><i class="bi bi-megaphone"></i></div>
                                        <div class="info-content">
                                            <h5>Speaker</h5>
                                            <p>10 Best Speaker</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <div class="single-event-info">
                                        <div class="info-icon"><i class="bi bi-lightning"></i></div>
                                        <div class="info-content">
                                            <h5>Sponsor</h5>
                                            <p>Event Lab</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <div class="event-rating text-center">
                                        <ul class="d-flex justify-content-center">
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-fill"></i></li>
                                            <li><i class="bi bi-star-half"></i></li>
                                        </ul>
                                        <h6>(500)</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ed-tabs-wrapper">
                            <div class="tabs-pill">
                                <ul class="nav nav-pills justify-content-center" id="pills-tab2" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="pills-details-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-details" type="button" role="tab"
                                            aria-controls="pills-details" aria-selected="true"> <i
                                                class="bi bi-info-circle"></i> <span>Details</span></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-schedule-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-schedule" type="button" role="tab"
                                            aria-controls="pills-schedule" aria-selected="false"><i
                                                class="bi bi-calendar3"></i> <span>Schedule</span></button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-gallary-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-gallary" type="button" role="tab"
                                            aria-controls="pills-gallary" aria-selected="false"><i
                                                class="bi bi-images"></i> <span>Gallery</span></button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content" id="pills-tabContent2">
                                <div class="tab-pane fade show active" id="pills-details" role="tabpanel"
                                    aria-labelledby="pills-details-tab">
                                    <div class="details-tab-content">
                                        <h3 class="ed-title">Media companies need to better one then educate
                                            advertisers. better one then educate.</h3>
                                        <p>Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac placerat
                                            metus tortor eget magna. Donec mattis posuere pharetra. Donec vestibulum
                                            ornare velit ut sollicitudin. Pellentesque in faucibus purus.Nulla nisl
                                            tellus, hendrerit nec dignissim pellentesque, posuere in est. Suspendisse
                                            bibendum vestibulum elit eu placerat. In ut ipsum in odio euismod tincidunt
                                            non lacinia nunc. Donec ligula augue, mattis eu varius ac.</p>
                                        <div class="row ed-overview">
                                            <div class="col-lg-6">
                                                <h5 class="ed-subtitle">Over View</h5>
                                                <ul class="overview-list">
                                                    <li><i class="bi bi-check2"></i> You Got Full Free Certificate.</li>
                                                    <li><i class="bi bi-check2"></i> Unlimited Coffe & Tea When U
                                                        Boring.</li>
                                                    <li><i class="bi bi-check2"></i> Etiam dictum, dui sit amet
                                                        venenatis.</li>
                                                    <li><i class="bi bi-check2"></i> Class aptent taciti sociosqu ad
                                                        litora.</li>
                                                    <li><i class="bi bi-check2"></i> Lunch Suspendisse in commodo feli.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="overview-images d-grid">
                                                    <div class="overview-img1">
                                                        <img src="assets/images/gallary/view1.png" alt="img"
                                                            class="img-fluid"/>
                                                    </div>
                                                    <div class="overview-img2">
                                                        <img src="assets/images/gallary/view2.png" alt="img"
                                                            class="img-fluid"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac placerat
                                            metus tortor eget magna. Donec mattis posuere pharetra. Donec vestibulum
                                            ornare velit ut sollicitudin. Pellentesque in faucibus purus.Nulla nisl
                                            tellus, hendrerit nec dignissim pellentesque.</p>
                                        <div class="speakers-list">
                                            <h5 class="ed-subtitle">Main Speaker</h5>
                                            <div class="row ">
                                                <div class="col-md-6">
                                                    <div class="single-speaker">
                                                        <div class="speaker-image">
                                                            <img src="assets/images/speaker/event-sm1.png" alt="img"/>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>John Loganin</h6>
                                                            <strong>Digital Marketing</strong>
                                                            <ul class="speaker-social-links">
                                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-instagram"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-speaker">
                                                        <div class="speaker-image">
                                                            <img src="assets/images/speaker/event-sm2.png" alt="img"/>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Jackson Levi</h6>
                                                            <strong>CTO</strong>
                                                            <ul class="speaker-social-links">
                                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-instagram"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-speaker">
                                                        <div class="speaker-image">
                                                            <img src="assets/images/speaker/event-sm3.png" alt="img"/>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Victoria Lily</h6>
                                                            <strong>Marketing</strong>
                                                            <ul class="speaker-social-links">
                                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-instagram"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-speaker">
                                                        <div class="speaker-image">
                                                            <img src="assets/images/speaker/event-sm4.png" alt="img"/>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Hannah Emilia</h6>
                                                            <strong>Marketing</strong>
                                                            <ul class="speaker-social-links">
                                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-instagram"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-speaker">
                                                        <div class="speaker-image">
                                                            <img src="assets/images/speaker/event-sm5.png" alt="img"/>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Sebastian Mateo</h6>
                                                            <strong>Founder</strong>
                                                            <ul class="speaker-social-links">
                                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-instagram"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="single-speaker">
                                                        <div class="speaker-image">
                                                            <img src="assets/images/speaker/event-sm6.png" alt="img"/>
                                                        </div>
                                                        <div class="speaker-info">
                                                            <h6>Willow Lucy</h6>
                                                            <strong>Co Founder</strong>
                                                            <ul class="speaker-social-links">
                                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-instagram"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a>
                                                                </li>
                                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comment-section">
                                            <div class="comment-section-header">
                                                <div class=" comment-arrow prev-comment "><a href="#"><i
                                                            class="bi bi-chevron-left"></i> Previous</a></div>
                                                <div class="comment-counter">
                                                    <h5>Comment <span>(20)</span> </h5>
                                                </div>
                                                <div class=" comment-arrow next-comment "><a href="#">Next <i
                                                            class="bi bi-chevron-right"></i></a></div>
                                            </div>
                                            <ul class="comments-list">
                                                <li class="single-comment">
                                                    <div class="commentor-img">
                                                        <img src="assets/images/speaker/commentor-3.png" alt="img"/>
                                                    </div>
                                                    <div class="comment-info">
                                                        <p>Cras semper, massa vel aliquam luctus, eros odio tempor
                                                            turpis, ac bibend
                                                            placerat metus tortor eget magna. Donec mattis posuere
                                                            pharetra. Donec an vestibulum ornare velit ut sollicitudin.
                                                            Pellentesque in faucibus purus.</p>
                                                        <div class="commentor-info">
                                                            <div class="commentor-bio">
                                                                <h6 class="commentor-name">Asher
                                                                    Carter</h6>
                                                                <div class="comment-timing">
                                                                    <span class="comment-date">Decembar 10, 2021</span>
                                                                    <span class="comment-time">12.34 PM</span>
                                                                </div>
                                                            </div>
                                                            <div class="reply-btn">
                                                                <img src="assets/images/icons/reply-icon.png" alt="img"
                                                                    class="reply-icon"/>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="single-comment">
                                                    <div class="commentor-img">
                                                        <img src="assets/images/speaker/commentor-2.png" alt="img"/>
                                                    </div>
                                                    <div class="comment-info">
                                                        <p>Cras semper, massa vel aliquam luctus, eros odio tempor
                                                            turpis, ac bibend
                                                            placerat metus tortor eget magna. Donec mattis posuere
                                                            pharetra. Donec an vestibulum ornare velit ut sollicitudin.
                                                            Pellentesque in faucibus purus.</p>
                                                        <div class="commentor-info">
                                                            <div class="commentor-bio">
                                                                <h6 class="commentor-name">Paisley
                                                                    Natalie</h6>
                                                                <div class="comment-timing">
                                                                    <span class="comment-date">Decembar 10, 2021</span>
                                                                    <span class="comment-time">12.34 PM</span>
                                                                </div>
                                                            </div>
                                                            <div class="reply-btn">
                                                                <img src="assets/images/icons/reply-icon.png" alt="img"
                                                                    class="reply-icon"/>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="single-comment">
                                                    <div class="commentor-img">
                                                        <img src="assets/images/speaker/commentor-1.png" alt="img"/>
                                                    </div>
                                                    <div class="comment-info">
                                                        <p>Cras semper, massa vel aliquam luctus, eros odio tempor
                                                            turpis, ac bibend
                                                            placerat metus tortor eget magna. Donec mattis posuere
                                                            pharetra. Donec an vestibulum ornare velit ut sollicitudin.
                                                            Pellentesque in faucibus purus.</p>
                                                        <div class="commentor-info">
                                                            <div class="commentor-bio">
                                                                <h6 class="commentor-name">Julian
                                                                    Grayson</h6>
                                                                <div class="comment-timing">
                                                                    <span class="comment-date">Decembar 10, 2021</span>
                                                                    <span class="comment-time">12.34 PM</span>
                                                                </div>
                                                            </div>
                                                            <div class="reply-btn">
                                                                <img src="assets/images/icons/reply-icon.png" alt="img"
                                                                    class="reply-icon"/>
                                                                <a href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="comment-form">
                                            <h5 class="ed-subtitle">Leave Your Comment</h5>
                                            <form action="#" id="comment-form">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="primary-input-group">
                                                            <input type="text" id="name" placeholder="Your Full Name"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="primary-input-group">
                                                            <input type="email" id="email" placeholder="Your Email"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="primary-input-group">
                                                            <input type="text" id="subject" placeholder="Subject"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="primary-input-group">
                                                            <textarea name="massege" id="massege" cols="30" rows="7"
                                                                placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="submit-btn">
                                                            <button type="submit" class="primary-submit">Submit
                                                                Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-schedule" role="tabpanel"
                                    aria-labelledby="pills-schedule-tab">
                                    <div class="schedule-tab-content">
                                        <div class="schedule-wrapper">
                                            <div class="event-date">
                                                <h3>30 Sep 2021</h3>
                                            </div>
                                            <div class="single-schedule-card row">
                                                <div class="col-xl-5 col-lg-5 p-0">
                                                    <div class="single-schedule-left">
                                                        <div class="schedule-top">
                                                            <h4>10.00 AM - 11.30 PM</h4>
                                                            <h5>Room No - <span>01</span></h5>
                                                        </div>
                                                        <div class="schedule-bottom">
                                                            <div class="speaker-image">
                                                                <img src="assets/images/speaker/speaker-sm1.png" alt="img"/>
                                                            </div>
                                                            <div class="speaker-info">
                                                                <h4>John Loganin</h4>
                                                                <p>Marketing</p>
                                                                <ul class="speaker-social-links">
                                                                    <li><a href="#"><i
                                                                                class="fab fa-facebook-f"></i></a></li>
                                                                    <li><a href="#"><i class="fab fa-instagram"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="fab fa-linkedin-in"></i></a></li>
                                                                    <li><a href="#"><i class="fab fa-twitter"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-7 col-lg-7 p-0">
                                                    <div class="single-schedule-right">
                                                        <h3 class="schedule-title">
                                                            Nulla nisl tellus hendrerit nec dignissim pellentesqu.
                                                        </h3>
                                                        <p class="schedule-discription">Cras semper, massa vel aliquam
                                                            luctus, eros odio tempor turpis, ac placerat
                                                            metus tortor eget magna.</p>
                                                        <div class="schedule-topics">
                                                            <h5>Topic</h5>
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <ul>
                                                                        <li><i class="bi bi-check"></i> Color</li>
                                                                        <li><i class="bi bi-check"></i> Typhography</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul>
                                                                        <li><i class="bi bi-check"></i> Allingment</li>
                                                                        <li><i class="bi bi-check"></i> Development</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul>
                                                                        <li><i class="bi bi-check"></i> Graphic Design
                                                                        </li>
                                                                        <li><i class="bi bi-check"></i> Web Design</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-schedule-card row wow fadeInRight animated"
                                                data-wow-delay="300ms" data-wow-duration="1500ms">
                                                <div class="col-xl-5 col-lg-5 p-0">
                                                    <div class="single-schedule-left">
                                                        <div class="schedule-top">
                                                            <h4>11.30 AM - 12.30 PM</h4>
                                                            <h5>Room No - <span>02</span></h5>
                                                        </div>
                                                        <div class="schedule-bottom">
                                                            <div class="speaker-image">
                                                                <img src="assets/images/speaker/speaker-sm2.png" alt="img"/>
                                                            </div>
                                                            <div class="speaker-info">
                                                                <h4>Joseph
                                                                    John</h4>
                                                                <p>Management</p>
                                                                <ul class="speaker-social-links">
                                                                    <li><a href="#"><i
                                                                                class="fab fa-facebook-f"></i></a></li>
                                                                    <li><a href="#"><i class="fab fa-instagram"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="fab fa-linkedin-in"></i></a></li>
                                                                    <li><a href="#"><i class="fab fa-twitter"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-7 col-lg-7 p-0">
                                                    <div class="single-schedule-right">
                                                        <h3 class="schedule-title">
                                                            Nulla nisl tellus hendrerit nec dignissim pellentesqu.
                                                        </h3>
                                                        <p class="schedule-discription">Cras semper, massa vel aliquam
                                                            luctus, eros odio tempor turpis, ac placerat
                                                            metus tortor eget magna.</p>
                                                        <div class="schedule-topics">
                                                            <h5>Topic</h5>
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <ul>
                                                                        <li><i class="bi bi-check"></i> Color</li>
                                                                        <li><i class="bi bi-check"></i> Typhography</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul>
                                                                        <li><i class="bi bi-check"></i> Allingment</li>
                                                                        <li><i class="bi bi-check"></i> Development</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul>
                                                                        <li><i class="bi bi-check"></i> Graphic Design
                                                                        </li>
                                                                        <li><i class="bi bi-check"></i> Web Design</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-schedule-card row wow fadeInLeft animated"
                                                data-wow-delay="400ms" data-wow-duration="1500ms">
                                                <div class="col-xl-5 col-lg-5 p-0">
                                                    <div class="single-schedule-left">
                                                        <div class="schedule-top">
                                                            <h4>01.00 AM - 01.30 PM</h4>
                                                            <h5>Room No - <span>05</span></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-7 col-lg-7 p-0">
                                                    <div class="single-schedule-right has-break">
                                                        <h3 class="break-type">Lunch Time</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-schedule-card row fadeInRight animated"
                                                data-wow-delay="500ms" data-wow-duration="1500ms">
                                                <div class="col-xl-5 col-lg-5 p-0">
                                                    <div class="single-schedule-left">
                                                        <div class="schedule-top">
                                                            <h4>02.00 PM - 03.00 PM</h4>
                                                            <h5>Room No - <span>07</span></h5>
                                                        </div>
                                                        <div class="schedule-bottom">
                                                            <div class="speaker-image">
                                                                <img src="assets/images/speaker/speaker-sm3.png" alt="img"/>
                                                            </div>
                                                            <div class="speaker-info">
                                                                <h4>Gianna
                                                                    Abiga</h4>
                                                                <p>Developing</p>
                                                                <ul class="speaker-social-links">
                                                                    <li><a href="#"><i
                                                                                class="fab fa-facebook-f"></i></a></li>
                                                                    <li><a href="#"><i class="fab fa-instagram"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="fab fa-linkedin-in"></i></a></li>
                                                                    <li><a href="#"><i class="fab fa-twitter"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-7 col-lg-7 p-0">
                                                    <div class="single-schedule-right">
                                                        <h3 class="schedule-title">
                                                            Nulla nisl tellus hendrerit nec dignissim pellentesqu.
                                                        </h3>
                                                        <p class="schedule-discription">Cras semper, massa vel aliquam
                                                            luctus, eros odio tempor turpis, ac placerat
                                                            metus tortor eget magna.</p>
                                                        <div class="schedule-topics">
                                                            <h5>Topic</h5>
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <ul>
                                                                        <li><i class="bi bi-check"></i> Color</li>
                                                                        <li><i class="bi bi-check"></i> Typhography</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul>
                                                                        <li><i class="bi bi-check"></i> Allingment</li>
                                                                        <li><i class="bi bi-check"></i> Development</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul>
                                                                        <li><i class="bi bi-check"></i> Graphic Design
                                                                        </li>
                                                                        <li><i class="bi bi-check"></i> Web Design</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-schedule-card row wow fadeInLeft animated"
                                                data-wow-delay="600ms" data-wow-duration="1500ms">
                                                <div class="col-xl-5 col-lg-5 p-0">
                                                    <div class="single-schedule-left">
                                                        <div class="schedule-top">
                                                            <h4>03.00 PM - 04.00 PM</h4>
                                                            <h5>Room No - <span>01</span></h5>
                                                        </div>
                                                        <div class="schedule-bottom">
                                                            <div class="speaker-image">
                                                                <img src="assets/images/speaker/speaker-sm4.png" alt="img"/>
                                                            </div>
                                                            <div class="speaker-info">
                                                                <h4>Michael
                                                                    Etha</h4>
                                                                <p>Marketing</p>
                                                                <ul class="speaker-social-links">
                                                                    <li><a href="#"><i
                                                                                class="fab fa-facebook-f"></i></a></li>
                                                                    <li><a href="#"><i class="fab fa-instagram"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="fab fa-linkedin-in"></i></a></li>
                                                                    <li><a href="#"><i class="fab fa-twitter"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-7 col-lg-7 p-0">
                                                    <div class="single-schedule-right">
                                                        <h3 class="schedule-title">
                                                            Nulla nisl tellus hendrerit nec dignissim pellentesqu.
                                                        </h3>
                                                        <p class="schedule-discription">Cras semper, massa vel aliquam
                                                            luctus, eros odio tempor turpis, ac placerat
                                                            metus tortor eget magna.</p>
                                                        <div class="schedule-topics">
                                                            <h5>Topic</h5>
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <ul>
                                                                        <li><i class="bi bi-check"></i> Color</li>
                                                                        <li><i class="bi bi-check"></i> Typhography</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul>
                                                                        <li><i class="bi bi-check"></i> Allingment</li>
                                                                        <li><i class="bi bi-check"></i> Development</li>
                                                                    </ul>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul>
                                                                        <li><i class="bi bi-check"></i> Graphic Design
                                                                        </li>
                                                                        <li><i class="bi bi-check"></i> Web Design</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ticket-progress-wrap">
                                                <div class="ticket-progressbar"></div>
                                                <h4>Available Seat: <span>390-500</span></h4>
                                                <div class="ticket-book-btn">
                                                    <a href="#" class="primary-btn-fill">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-gallary" role="tabpanel"
                                    aria-labelledby="pills-gallary-tab">
                                    <div class="gallary-tab-content">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="gallary-item">
                                                    <img src="assets/images/gallary/e-gallary1.png" alt="Image Gallery"/>
                                                    <a class="gallary-item-overlay" data-fancybox="gallery"
                                                        data-caption="Caption Here"
                                                        href="assets/images/gallary/e-gallary1.png">
                                                        <i class="bi bi-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="gallary-item">
                                                    <img src="assets/images/gallary/e-gallary-sm1.png"
                                                        alt="Image Gallery"/>
                                                    <a class="gallary-item-overlay" data-fancybox="gallery"
                                                        data-caption="Caption Here"
                                                        href="assets/images/gallary/e-gallary-sm1.png">
                                                        <i class="bi bi-eye"></i>
                                                    </a>
                                                </div>
                                                <div class="gallary-item">
                                                    <img src="assets/images/gallary/e-gallary-sm1.png"
                                                        alt="Image Gallery"/>
                                                    <a class="gallary-item-overlay" data-fancybox="gallery"
                                                        data-caption="Caption Here"
                                                        href="assets/images/gallary/e-gallary-sm2.png">
                                                        <i class="bi bi-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="gallary-item">
                                                    <img src="assets/images/gallary/e-gallary-l1.png"
                                                        alt="Image Gallery"/>
                                                    <a class="gallary-item-overlay" data-fancybox="gallery"
                                                        data-caption="Caption Here"
                                                        href="assets/images/gallary/e-gallary-l1.png">
                                                        <i class="bi bi-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="gallary-item">
                                                    <img src="assets/images/gallary/e-gallary-l2.png"
                                                        alt="Image Gallery"/>
                                                    <a class="gallary-item-overlay" data-fancybox="gallery"
                                                        data-caption="Caption Here"
                                                        href="assets/images/gallary/e-gallary-l2.png">
                                                        <i class="bi bi-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="gallary-item">
                                                    <img src="assets/images/gallary/e-gallary1.png" alt="Image Gallery"/>
                                                    <a class="gallary-item-overlay" data-fancybox="gallery"
                                                        data-caption="Caption Here"
                                                        href="assets/images/gallary/e-gallary1.png">
                                                        <i class="bi bi-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="gallary-item">
                                                    <img src="assets/images/gallary/e-gallary-sm1.png"
                                                        alt="Image Gallery"/>
                                                    <a class="gallary-item-overlay" data-fancybox="gallery"
                                                        data-caption="Caption Here"
                                                        href="assets/images/gallary/e-gallary-sm1.png">
                                                        <i class="bi bi-eye"></i>
                                                    </a>
                                                </div>
                                                <div class="gallary-item">
                                                    <img src="assets/images/gallary/e-gallary-sm1.png"
                                                        alt="Image Gallery"/>
                                                    <a class="gallary-item-overlay" data-fancybox="gallery"
                                                        data-caption="Caption Here"
                                                        href="assets/images/gallary/e-gallary-sm2.png">
                                                        <i class="bi bi-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="gallary-item">
                                                    <img src="assets/images/gallary/e-gallary-l1.png"
                                                        alt="Image Gallery"/>
                                                    <a class="gallary-item-overlay" data-fancybox="gallery"
                                                        data-caption="Caption Here"
                                                        href="assets/images/gallary/e-gallary-l1.png">
                                                        <i class="bi bi-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="gallary-item">
                                                    <img src="assets/images/gallary/e-gallary-l2.png"
                                                        alt="Image Gallery"/>
                                                    <a class="gallary-item-overlay" data-fancybox="gallery"
                                                        data-caption="Caption Here"
                                                        href="assets/images/gallary/e-gallary-l2.png">
                                                        <i class="bi bi-eye"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="event-d-sidebar">
                        <div class="event-book-form">
                            <div class="category-title"><i class="bi bi-bookmark-check"></i>
                                <h4>Book This Event</h4>
                            </div>
                            <form action="#" id="event-book" class="event-book">
                                <div class="primary-input-group">
                                    <input type="text" id="e-name" placeholder="Your Full Name"/>
                                </div>
                                <div class="primary-input-group">
                                    <input type="email" id="e-email" placeholder="Your Email"/>
                                </div>
                                <div class="primary-input-group">
                                    <input type="tel" id="e-tel" placeholder="Phone"/>
                                </div>
                                <div class="primary-input-group">
                                    <select class="primary-select">
                                        <option selected>Select quantity</option>
                                        <option value="1">Quantity 1</option>
                                        <option value="2">Quantity 2</option>
                                        <option value="3">Quantity 3</option>
                                    </select>
                                </div>
                                <div class="primary-input-group">
                                    <input type="text" id="lname" placeholder="Your Full Name"/>
                                </div>
                                <div class="submit-btn">
                                    <button type="submit" class="primary-submit d-block w-100">Submit Now</button>
                                </div>
                            </form>
                        </div>
                        <div class="event-d-sidebar-cards">
                            <div class="category-title"><i class="bi bi-layout-text-sidebar-reverse"></i>
                                <h4>Recent Event</h4>
                            </div>
                            <ul class="event-cards-list">
                                <li class="event-card-sm">
                                    <div class="event-thumb">
                                        <a href="event-details.html">
                                            <img src="assets/images/event/event-thumb-sm1.png" alt="img"/>
                                        </a>
                                    </div>
                                    <div class="event-sm-info">
                                        <h5><a href="event-details.html">Donec risus dui, suscipit iand
                                                tempor lacinia vehicula.</a></h5>
                                        <div class="event-bottom">
                                            <a class="event-date" href="#"><i class="bi bi-calendar2-week"></i> January
                                                21, 2021</a>
                                            <div class="event-deat"><i class="bi bi-diagram-3"></i> <span>500</span>
                                            </div>
                                        </div>
                                        <div class="event-d-btn">
                                            <a href="event-details.html">Book Now</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="event-card-sm">
                                    <div class="event-thumb">
                                        <a href="event-details.html">
                                            <img src="assets/images/event/event-thumb-sm2.png" alt="img"/>
                                        </a>
                                    </div>
                                    <div class="event-sm-info">
                                        <h5><a href="event-details.html">Class aptent taciti sociosqu adness
                                                litora torquent per conubia.</a></h5>
                                        <div class="event-bottom">
                                            <a class="event-date" href="#"><i class="bi bi-calendar2-week"></i> January
                                                21, 2021</a>
                                            <div class="event-deat"><i class="bi bi-diagram-3"></i> <span>500</span>
                                            </div>
                                        </div>
                                        <div class="event-d-btn">
                                            <a href="event-details.html">Book Now</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="event-card-sm">
                                    <div class="event-thumb">
                                        <a href="event-details.html">
                                            <img src="assets/images/event/event-thumb-sm3.png" alt="img"/>
                                        </a>
                                    </div>
                                    <div class="event-sm-info">
                                        <h5><a href="event-details.html">Praesent ut cursus massa, nonfebriq
                                                tristique quam.</a></h5>
                                        <div class="event-bottom">
                                            <a class="event-date" href="#"><i class="bi bi-calendar2-week"></i> January
                                                21, 2021</a>
                                            <div class="event-deat"><i class="bi bi-diagram-3"></i> <span>500</span>
                                            </div>
                                        </div>
                                        <div class="event-d-btn">
                                            <a href="event-details.html">Book Now</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="event-card-sm">
                                    <div class="event-thumb">
                                        <a href="event-details.html">
                                            <img src="assets/images/event/event-thumb-sm4.png" alt="img"/>
                                        </a>
                                    </div>
                                    <div class="event-sm-info">
                                        <h5><a href="event-details.html">Mauris consequat tempor lectusin
                                                nec rutrum metus laoreet et.</a></h5>
                                        <div class="event-bottom">
                                            <a class="event-date" href="#"><i class="bi bi-calendar2-week"></i> January
                                                21, 2021</a>
                                            <div class="event-deat"><i class="bi bi-diagram-3"></i> <span>500</span>
                                            </div>
                                        </div>
                                        <div class="event-d-btn">
                                            <a href="event-details.html">Book Now</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="event-organizer-wrap">
                            <div class="category-title"><i class="bi bi-person-plus"></i>
                                <h4>Event Organized By</h4>
                            </div>
                            <div class="organizer-info">
                                <div class="organizer-image">
                                    <img src="assets/images/event/event-orgainizer.png" alt="img"/>
                                </div>
                                <h4>Matthew
                                    Luke</h4>
                                <h5>Event Lab</h5>
                                <div class="organizer-signature">
                                    <img src="assets/images/event/signature.png" alt="img"/>
                                </div>
                            </div>
                        </div>
                        <div class="event-sidebar-banner">
                            <a href="#">
                                <img src="assets/images/banners/sb-banner.png" alt class="img-fluid"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default EventDetail
