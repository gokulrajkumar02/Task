"use client";
import Carousel from "./Carousel";
 type MovieCarouselProp = {
  SliderData : any[],
  variant : string,
  gridSelectIndex ?:number
  navigateTo?:string,
 }

const MovieCarousel = ({ SliderData , variant, gridSelectIndex , navigateTo }: MovieCarouselProp) => {

  return (
    <Carousel
      slides={SliderData}
      options={{ loop: true, align: "center", duration: 40, slidesToScroll: 1 }}
      variant={variant}
      gridSelectIndex={gridSelectIndex}
      navigateTo={navigateTo}
    />
  );
};
export default MovieCarousel;
