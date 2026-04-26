// ContentfulFetch/getSeatLayoutData.ts
import { contentfulClient } from "@/lib/contentful";

const resolveImageUrl = async (field: any): Promise<string> => {
  if (!field) return "";
  if (field?.fields?.file?.url) return "https:" + field.fields.file.url;
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

export const getSeatLayoutData = async (theatreId: number) => {
  if (!theatreId) return null;

  // Query the "theatres" content type directly using the correct field name
  const res = await contentfulClient.getEntries({
    content_type: "theatres",          // ✅ correct content type from your screenshot
    "fields.theatreId": String(theatreId), // theatreId IS a field on "theatres"
    include: 2,
  });

  const item = res.items[0];
  if (!item) return null;

  const t = item.fields as any;

  const image_url = await resolveImageUrl(t.image);

  return {
    id: Number(t.theatreId),
    title: t.title,
    location: t.location,
    distance: t.distance,
    cancellable: t.cancellable,
    image_url,
    shows: t.shows || [],
    seatLayout: t.seatLayout || [],
  };
};