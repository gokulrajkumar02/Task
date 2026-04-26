import { contentfulClient } from "@/lib/contentful";

export const getDiningData = async () => {
  const res = await contentfulClient.getEntries({
    content_type: "diningPage",
  });

  const item = res.items[0];
  if (!item) return null;

  return item.fields.data;
};