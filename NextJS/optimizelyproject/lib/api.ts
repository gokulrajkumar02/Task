import { contentfulClient } from "./contentful";

export const getDistrictData = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "districtData",
  });

  console.log(response.items);
  

  return response.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.event_title,
    description: item.fields.dining,
    timing:item.fields.timing
  }));
};