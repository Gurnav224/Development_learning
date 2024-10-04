/* eslint-disable react/prop-types */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";



function CategoriesSlider({categories}) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    cssEase: "linear",
    useCss:true,
    autoplay:true,
    autoplayspeed:2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
        categories.map((category) => (
        <Link to={`/products/${category.name}`} key={category._id} className="text-decoration-none">

          <div className="card" >
            <img src={category.categoryImgUrl} height={250} className="object-fit-cover card-img" alt="" />
            <div className="card-body">
              <h2 className="text-center">{category.name}</h2>
            </div>
          </div>
        </Link>

        ))
        }
      </Slider>
    </div>
  );
}



export default CategoriesSlider;