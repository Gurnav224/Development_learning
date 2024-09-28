import Header from './components/Header'

import './App.css'

import imgUrl from './assets/meetup-banner.jpeg'

import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Import autoplay module
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

function Usage() {
  return (
    <>
        
      <Swiper
        modules={[Autoplay, Pagination]} // Add Autoplay to Swiper modules
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Enable autoplay with a 2.5s delay
        pagination={{ clickable: true }} // Add pagination dots for slide navigation
        loop={true} // Enable looping of slides
      >
        <SwiperSlide>
          <img src={imgUrl} alt="Slide 1" className='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/3321789/pexels-photo-3321789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 2" className='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 3" className='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/8348624/pexels-photo-8348624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 4" className='img' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

function App() {

  return (
    <>
    <Header/>

    <div className='container my-4'>
    <Usage/>


    <div className="text-center  my-4">
      <h2 className='display-5'>All Events</h2>
      <p className='fs-3 fw-light'>Unforgettable Moments, One Event at a Time</p>
      <Link className='btn btn-primary' to={'/events'}>View Events</Link>
    </div>

    </div>

    </>
  )
}

export default App
