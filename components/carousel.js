import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel'
import { ChevronLeft, ChevronRight } from 'react-feather'

const Carousel = ({images}) => {
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={images.length}
        infinite
      >
        <Slider>
          {images.map((item, index) => (
            <Slide key={item.id} index={index}>
              <Image style={{objectFit: 'cover'}} src={item.url} />
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="carousel-btn back-btn">
          <ChevronLeft size={50} />
        </ButtonBack>
        <ButtonNext className="carousel-btn next-btn">
          <ChevronRight size={50} />
        </ButtonNext>
        <DotGroup />
      </CarouselProvider>
    </>
  )
}

export default Carousel
