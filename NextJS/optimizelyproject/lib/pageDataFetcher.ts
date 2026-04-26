
import { getMovieData } from "@/ContentfulFetch/getMovieData";
import {getMovieTheatrePageData} from "@/ContentfulFetch/getMovieTheatrePageData";

export const PageDataFetcher: Record<
  string,
  (slug: string) => Promise<any>
> = {
  movie: getMovieData,
  movie_TheatrePage: getMovieTheatrePageData,
  
  movie_SeatLayout: getMovieTheatrePageData,
  movie_PaymentLayout: getMovieTheatrePageData
};