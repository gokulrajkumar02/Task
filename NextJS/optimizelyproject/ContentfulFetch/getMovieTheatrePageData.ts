import { contentfulClient } from "@/lib/contentful";

const resolveImageUrl = async (field: any): Promise<string> => {
  if (!field) return "";

  if (field?.fields?.file?.url) {
    return "https:" + field.fields.file.url;
  }

  if (field?.sys?.id) {
    try {
      const asset = await contentfulClient.getAsset(field.sys.id);
      const url = (asset.fields.file as any)?.url;
      return url ? "https:" + url : "";
    } catch {
      return "";
    }
  }

  return "";
};

export const getMovieTheatrePageData = async (id: string) => {
  if (!id) return null;

  const res = await contentfulClient.getEntries({
    content_type: "movieSlide",
    "fields.movieId": id,
    include: 2,
  });

  const item = res.items[0];
  if (!item) return null;

  const f = item.fields as any;

  const [bg, image_url] = await Promise.all([
    resolveImageUrl(f.movieBg ?? f.movie_bg),
    resolveImageUrl(f.imageUrl ?? f.image_url),
  ]);

  const theatres = await Promise.all(
    (f.theatres || []).map(async (ref: any) => {
      const t = ref.fields;
      const image_url = await resolveImageUrl(t.image ?? t.imageUrl ?? t.image_url);

      return {
        id: Number(t.theatreId),
        title: t.title,         
        location: t.location,
        distance: t.distance,
        cancellable: t.cancellable,
        image_url,              
        alt: t.title,
        shows: t.shows || [],
      };
    })
  );

  return {
    id: f.movieId,
    title: f.title,
    certificate: f.certificate,
    genres: f.genres,
    description: f.description,
    bg,
    image_url,
    theatres,
  };
};