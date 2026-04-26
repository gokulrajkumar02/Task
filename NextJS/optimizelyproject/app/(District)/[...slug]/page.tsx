import { PageComponent } from "@/Helper/PageComponet";
import { PageDataFetcher } from "@/lib/pageDataFetcher";

import { notFound } from "next/navigation";
// export const CAROUSEL_PAGES = ["activities", "movie", "event"];

type DistrictPagePropType = {
  params: { slug: string[] };
};

const DistrictPage = async ({ params }: DistrictPagePropType) => {
  const { slug } = await params;

  const pageKey = slug.join('_')
  const SelectedPageComponent = PageComponent[pageKey];

  if (!SelectedPageComponent) return notFound();



  return (
    <div>
      <SelectedPageComponent pageKey={pageKey} />

    </div>
  );
};

export default DistrictPage;