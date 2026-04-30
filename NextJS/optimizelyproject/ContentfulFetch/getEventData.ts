import { contentfulClient } from "@/lib/contentful";
import { categoryType } from "@/DB/District";

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

export type OfferType = {
  id: string;
  label: string;
  description: string;
  discount: number;
};

export type EventPageData = {
  allEvents: EventType[];
  sliderEvents: EventType[];
  artists: ArtistType[];
  eventCategories: categoryType[];
  offerDetails: OfferType[];
  offerTitle:string
};

export async function getEventData(): Promise<EventPageData> {
  const res = await contentfulClient.getEntries({
    content_type: "eventCarousel",
    include: 2,
  });

  const item = res.items[0];
  if (!item)
    return {
      allEvents: [],
      sliderEvents: [],
      artists: [],
      eventCategories: [],
      offerDetails: [],
      offerTitle:""
    };

  console.log("Event Full data", item);

  const fields = item.fields as any;
  const slides = fields.eventSlide ?? [];

  const allEvents: EventType[] = slides.map((slide: any) => {
    const fields = slide.fields;
    return {
      id: fields.id,
      title: fields.title,
      date: fields.date,
      venue: fields.venue,
      price: Number(fields.price),
      category: fields.category,
      image_url: "https:" + fields.imageUrl.fields.file.url,
    };
  });

  const artistEntries = fields.Artists ?? fields.artists ?? [];

  const artists: ArtistType[] = artistEntries.map(
    (entry: any, index: number) => {
      const f = entry.fields;
      return {
        id: f.id ?? index,
        name: f.name,
        image_url: f.imageUrl?.fields?.file?.url
          ? "https:" + f.imageUrl.fields.file.url
          : (f.imageUrl ?? ""),
      };
    },
  );
  const categoryEntries = fields.eventCategory;

  const eventCategories = categoryEntries.map((entry: any, index: number) => {
    const f = entry.fields;

    const imageUrl = f.imageUrl?.fields?.file?.url
      ? "https:" + f.imageUrl.fields.file.url
      : null;

    return {
      id: f.id ?? index,
      title: f.title,
      image_url: imageUrl,
    };
  });

  const offers = fields.offerDetails;

  const offerDetails = offers.map((entry: any) => {

    const fields = entry.fields;

    return {
      id: fields.id,
      label: fields.label,
      description: fields.description,
       discount: Number(fields.discount),
    };
  });

  return {
    offerTitle : fields.offerDetailsTitle,
    allEvents,
    sliderEvents: allEvents.slice(0, 6),
    artists,
    eventCategories,
    offerDetails,
  };
}
