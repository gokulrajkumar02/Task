// import { contentfulClient } from "./contentful";

// export type Slide = {
//   id: string;
//   title: string;
//   certificate: string;
//   genres: string;
//   description: string;
//   bg: string;
// };

// export type PageData = {
//   slug: string;
//   title: string;
//   slides: Slide[];
// };

// export async function getPageDataBySlug(
//   slug: string,
// ): Promise<PageData | null> {
//   const res = await contentfulClient.getEntries({
//     content_type: "movieCarousel",
//     "fields.slug": slug,
//     include: 2,
//   });

//   const item = res.items[0];
//   if (!item) return null;

//   const fields = item.fields as any;

//   const assetMap: Record<string, string> = {};

//   if (res.includes?.Asset) {
//     res.includes.Asset.forEach((asset: any) => {
//       const url = asset.fields?.file?.url;
//       if (url) {
//         assetMap[asset.sys.id] = "https:" + url;
//       }
//     });
//   }

//   const slides: Slide[] = (fields.slides ?? []).map((slide: any) => {
//     const f = slide.fields;
//     const assetId = f.movieUrl?.sys?.id ?? "";
//     const bg = assetMap[]

//     return {
//       id: f.movieId,
//       title: f.title,
//       certificate: f.certificate,
//       genres: f.genres,
//       description: f.description,
//       bg,
//     };
//   });

// //   console.log("Slider", slides);

//   return {
//     slug: fields.slug,
//     title: fields.title,
//     slides,
//   };
// }

import { contentfulClient } from "./contentful";

export type Slide = {
  id: string;
  title: string;
  certificate: string;
  genres: string;
  description: string;
  bg: string;
};

export type PageData = {
  slug: string;
  title: string;
  slides: Slide[];
};

export async function getPageDataBySlug(
  slug: string,
): Promise<PageData | null> {

  const res = await contentfulClient.getEntries({
    content_type: "movieCarousel",
    "fields.slug": slug,
  });

  const item = res.items[0];
  if (!item) return null;

  const fields = item.fields as any;

  const slides: Slide[] = await Promise.all(
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
      };
    }),
  );

  return {
    slug: fields.slug,
    title: fields.title,
    slides,
  };
}
