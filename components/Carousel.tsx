import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

interface IProps {
  imageUrls: string[];
}

const WrapImage = styled.img`
  width: 100%;
`

const Carousel = ({ imageUrls }: IProps) => {
  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Slider { ...options }>
    {
      imageUrls.map(imageUrl => (<WrapImage src={ imageUrl } />))
    }
    </Slider>
  )
}

export default Carousel