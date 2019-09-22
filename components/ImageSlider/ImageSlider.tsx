import React from 'react';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const ImageSlider = () => {
    return (
        <Slider {...settings}>
            <div>
                <img alt='' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
            </div>
            <div>
                <img alt='' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
            </div>
            <div>
                <img alt='' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
            </div>
        </Slider>
    )
}

export default ImageSlider
