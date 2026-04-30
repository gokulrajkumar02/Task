import { contentfulClient } from "@/lib/contentful";

export const getDiningData = async () => {
  const res = await contentfulClient.getEntries({
    content_type: "diningPage",
  });

  const item = res.items[0];
  if (!item) return null;

  const fields: any = item.fields;
  const diningData = fields.diningData;

  return {
    heroTitle: diningData.heroTitle,
    districtSpecialTitle: diningData.districtSpecialTitle,
    offerTitle : diningData.offerTitle,
    signatureFeatures: diningData.signatureFeatures,
    offers: diningData.offers,
  };
};
