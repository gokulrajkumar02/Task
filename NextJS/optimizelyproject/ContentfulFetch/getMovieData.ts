import { contentfulClient } from "@/lib/contentful";

export type Slide = {
  id: string;
  title: string;
  certificate: string;
  genres: string;
  description: string;
  bg: string;
  image_url: string;
};

export type PageData = {
  slides: Slide[];
  movies: Slide[];
};

export async function getMovieData(
  slug: string = "movie",
): Promise<PageData | null> {

  const res = await contentfulClient.getEntries({
    content_type: "movieCarousel",
    "fields.slug": slug,
  });

  const item = res.items[0];
  if (!item) return null;

  const fields = item.fields as any;

  const allMovies: Slide[] = await Promise.all(
    (fields.slides ?? []).map(async (slide: any) => {
      const f = slide.fields;
      const assetId = f.movieUrl?.sys?.id;

      let bg = "";
      if (assetId) {
        const asset = await contentfulClient.getAsset(assetId);
        bg = "https:" + asset.fields.file?.url;
      }

      return {
        id: f.movieId,
        title: f.title,
        certificate: f.certificate,
        genres: f.genres,
        description: f.description,
        bg,
        image_url: "https:" + f.imageUrl?.fields?.file?.url
      };
    }),
  );

  return {
    
    slides : allMovies.slice(0,6),
    movies : allMovies
  
  };
}
