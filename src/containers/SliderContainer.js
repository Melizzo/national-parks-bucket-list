import React from 'react'
import { Link } from 'react-router-dom'
import { toggleBucketNP, toggleVisitedNP } from '../actions'
import { connect } from 'react-redux'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowCircleLeft, FaRegCircle, FaCheckCircle } from 'react-icons/fa'
import { BsBucket, BsBucketFill } from 'react-icons/bs'


const SliderContainer = ({
    id, 
    images, 
    visited, 
    bucket, 
    toggleBucketNP, 
    toggleVisitedNP
}) => {
    
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    
    const sliderItems = images.map(img => {
        return (
          <div>
            <img src={img.url} alt="spot" className="slider-img"/>
          </div>
        )
    })
    
    return (
        <section className='slider-container'>
            <Link to="/explore">
                <FaArrowCircleLeft
                    className="details-back-btn"
                />
            </Link>
            {!visited
                ? <FaRegCircle
                    className="np-slider-check"
                    onClick={() => toggleVisitedNP(id)}
                    />
                : <FaCheckCircle
                    className="np-slider-check"
                    onClick={() => toggleVisitedNP(id)}
                    />
                }
                {!bucket
                ? <BsBucket
                    className="np-slider-bucket"t
                    onClick={() => toggleBucketNP(id)}
                    />
                : <BsBucketFill
                    className="np-slider-bucket"
                    onClick={() => toggleBucketNP(id)}
                    />
              }
            <Slider {...sliderSettings} className='np-slider'>
              {sliderItems}
            </Slider>
        </section>
    )
}

const mapDispatch = (dispatch) => ({
  toggleBucketNP: id => dispatch( toggleBucketNP(id)),
  toggleVisitedNP: id => dispatch( toggleVisitedNP(id))
})

export default connect(null, mapDispatch)(SliderContainer)