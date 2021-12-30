import './Carousel.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { images } from '../../helpers/CarouselData'


function HeroCarousel() {
    
    const scrollToSection = () => {
        document.getElementById('about-box').scrollIntoView({behavior: 'smooth'})
    }
        
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1200,
        slideToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        fade: true,
    }

  return (
    <Slider {...settings} className="carousel">
        {images.map((image, key) => {
            return (
                <div className="carousel__wrapper" key={key}>
                    <picture className="carousel__image">
                        <source srcSet={image.imageWebp} type="image/webp" />
                        <source srcSet={image.imageJpg} type="image/jpeg" />
                        <img src={image.imageJpg} alt="Hero section - Experiences" />
                    </picture>
                    <div className="carousel__text">
                        <h1 className="carousel__text--title">
                            Life experiences <br />through food & travel  <br /> Beyond the roads & over the seas
                        </h1>
                        <div
                         className="home__btn"
                         onClick={scrollToSection}
                        >
                            Start Here
                        </div>
                    </div>
                </div>
            )
        })}
    </Slider>
  );
}

export default HeroCarousel;
