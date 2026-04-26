import { contentfulClient } from "@/lib/contentful";

export type EventType = {
  id: string;
  title: string;
  date: string;
  venue: string;
  price: number;
  category: string;
  image_url: string;
};

export type ArtistType = {
  id: number;
  name: string;
  image_url: string;
};

export type EventPageData = {
  allEvents: EventType[];
  sliderEvents: EventType[];
  artists: ArtistType[];
};

export async function getEventData(): Promise<EventPageData> {
  const res = await contentfulClient.getEntries({
    content_type: "eventCarousel",
    include: 2,
  });

  const item = res.items[0];
  if (!item) return { allEvents: [], sliderEvents: [], artists: [] };

  const fields = item.fields as any;
  const slides = fields.eventSlide ?? [];

  const allEvents: EventType[] = slides.map((slide: any) => {
    const f = slide.fields;
    return {
      id: f.id,
      title: f.title,
      date: f.date,
      venue: f.venue,
      price: Number(f.price),
      category: f.category,
      image_url: "https:" + f.imageUrl.fields.file.url,
    };
  });

  const artistEntries = fields.Artists ?? fields.artists ?? [];

  const artists: ArtistType[] = artistEntries.map((entry: any, index: number) => {
    const f = entry.fields;
    return {
      id: f.id ?? index,
      name: f.name,
      image_url: f.imageUrl?.fields?.file?.url
        ? "https:" + f.imageUrl.fields.file.url
        : f.imageUrl ?? "",
    };
  });

  return {
    allEvents,
    sliderEvents: allEvents.slice(0, 6),
    artists,
  };
}