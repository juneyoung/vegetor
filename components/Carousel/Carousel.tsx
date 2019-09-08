import React from "react"
import Slider from "react-slick"

import { IProps } from './Carousel.spec'
import { WrapImage } from './Carousel.style'

const Carousel = ({ imageUrls }: IProps) => {
  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Slider {...options}>
      {
        imageUrls.map((imageUrl) => ( <WrapImage src={imageUrl} /> ))
      }
    </Slider>
  )
}

export default Carousel
