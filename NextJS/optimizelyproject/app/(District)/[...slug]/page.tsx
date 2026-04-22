import { PageComponent } from "@/Helper/PageComponet";
import { getPageDataBySlug } from "@/lib/getPageBySlug";
import { notFound } from "next/navigation";

type DistrictPagePropType = {
  params: { slug: string[] };
};

export const CAROUSEL_PAGES = ["activities", "movie", "event"];

const DistrictPage = async ({ params }: DistrictPagePropType) => {
  const { slug } = await params;

  const pageKey = slug[slug.length - 1]
  const SelectedPageComponent  = PageComponent[pageKey];

  if (!SelectedPageComponent ) return notFound();
  
  const carouselData = CAROUSEL_PAGES.includes(pageKey)
    ? await getPageDataBySlug(pageKey)
    : null;

  return (
    <div>
      {CAROUSEL_PAGES.includes(pageKey) ? ( 
        <SelectedPageComponent  slideData={carouselData?.slides} />
      ) : (
        <SelectedPageComponent  />
      )}
    </div>
  );
};

export default DistrictPage;
