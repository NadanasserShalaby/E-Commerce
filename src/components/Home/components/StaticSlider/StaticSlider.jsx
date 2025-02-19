import React from 'react'
import style from './StaticSlider.module.css'
import Slider from 'react-slick';
import slider1 from "../../../../assets/finalProject assets/images/slider-image-1.jpeg"
import slider2 from "../../../../assets/finalProject assets/images/slider-image-2.jpeg"
import slider3 from "../../../../assets/finalProject assets/images/slider-image-3.jpeg"
import static1 from "../../../../assets/finalProject assets/images/grocery-banner.png"
import static2 from "../../../../assets/finalProject assets/images/grocery-banner-2.jpeg"
export default function StaticSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
    <>
      <div className='main-layout py-20 px-5'>
        <div className='w-9/12'>
          <Slider {...settings}>
          {/* <img src={slider1} className='  h-[600px]' alt="" /> */}
          <img src={slider2} className='  h-[300px]' alt="" />
          <img src={slider3}  className='  h-[300px]' alt="" />

          </Slider>
        </div>
        <div className="w-3/12">
          <img src={static1} className=' h-[150px]' alt="" />
          <img src={static2} className=' h-[150px]' alt="" />
        </div>
      </div>

    </>
  )
}
