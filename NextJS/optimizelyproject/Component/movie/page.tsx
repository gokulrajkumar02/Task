"use client";
import { useRouter } from "next/navigation";
import MovieCarousel from "@/Component/EmblaCarousel/MovieCarousel";
import { Slide } from "@/ContentfulFetch/getMovieData";
import { useEffect, useState } from "react";
import { PageDataFetcher } from "@/lib/pageDataFetcher";

export type PageData = {
  slides: Slide[];
  movies: Slide[];
};

type MoviePagePropType = {
  pageKey: string;
};

const MoviePage = ({ pageKey }: MoviePagePropType) => {
  const router = useRouter();

  const [Data, setData] = useState<PageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchFunction = PageDataFetcher[pageKey];
      if (!fetchFunction) return;
      const response = await fetchFunction(pageKey);
      setData(response);
    };

    fetchData();
  }, [pageKey]);

  const handleBookMovie = (id: string) => {
    localStorage.setItem("SelectItemId", id.toString());
    router.push("/movie/TheatrePage");
  };
  return (
    <div className="w-full h-full">
      <MovieCarousel
        SliderData={Data?.slides ?? []}
        variant="movie"
        navigateTo={"/movie/TheatrePage"}
      />
      <div className="mt-5 w-full flex flex-col items-center">
        <div className="w-[90%] md:w-[80%]">
          <h1 className="text-[25px] font-semibold">Only in theatres</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 my-5">
            {Data?.movies.map((items) => {
              return (
                <div
                  key={items.id}
                  className="bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col hover:cursor-pointer"
                  onClick={() => handleBookMovie(items.id)}
                >
                  <div className="">
                    <img src={items.image_url} alt={items.title} />
                  </div>
                  <div className="mt-2 flex flex-col gap-1 p-2 text-center">
                    <h1 className="text-[20px] font-semibold">{items.title}</h1>
                    <div className="">
                      <span>{items.certificate}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
