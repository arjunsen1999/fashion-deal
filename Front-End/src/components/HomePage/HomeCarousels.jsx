import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import LineCards from '../ProductCards/LineCards'
import Slider from "react-slick";


export default function HomeCarousels() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        pauseOnHover: true,
        initialSlide: 0,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 2000,
        cssEase: "ease-in",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 744,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 532,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
     <Box w="100%" mb="50px" mr="30px">
            <Heading as="h1" fontSize={"28px"} mb="20px">
              Heading
            </Heading>

            <Box
            
            >
              <Slider {...settings}>
                <LineCards rating={4.2} numReviews={34}/>
                <LineCards rating={4.2} numReviews={34}/>
                <LineCards rating={4.2} numReviews={34}/>
                <LineCards rating={4.2} numReviews={34}/>
                <LineCards rating={4.2} numReviews={34}/>
                <LineCards rating={4.2} numReviews={34}/>
                <LineCards rating={4.2} numReviews={34}/>
              </Slider>
            </Box>
          </Box>
    </>
  )
}
