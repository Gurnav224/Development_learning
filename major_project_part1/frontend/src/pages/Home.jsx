/* eslint-disable react/prop-types */
import Header from "../components/Header";
import { useEffect, useState } from "react";
import api from "../api/api";
// Import Swiper React components
import { Virtual, Navigation, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";


const Slider = ({ categories }) => {

  return (
    <Swiper
      modules={[ Virtual, Navigation, Pagination ]}
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}

    >

      {
        categories.map((category) => (
          <SwiperSlide key={category._id}>
            <Link className="text-decoration-none border-none" to={`/api/${category.name}`}>
              <div className="card">
                <div className="card-header">
                  <h2 className="text-center">{category.name}</h2>
                </div>
                <img src={category.categoryImgUrl} className="card-img  object-fit-cover" height={250} alt="..." />

              </div>
            </Link>

          </SwiperSlide>

        ))
      }

    </Swiper>
  );
};


const Home = () => {

  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await api.getFeaturedCategory();
        setCategories(categories?.data?.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);





  return (
    <>
      <Header />
      <div className="container my-4">


        <Slider categories={categories} />

      </div>
    </>
  );
};

export default Home;
