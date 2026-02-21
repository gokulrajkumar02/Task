import type { Metadata } from "next";

export const generateMetadata = async ({ params }: { params: Promise<{ slug?: string[] }> }) => {
  const {slug}  = await params;
  // const slug = "home"
  return {title : slug}
}

const Page = async ({ params }: { params: Promise<{ slug?: string[] }> }) => {
  const { slug } = await params;
  return (
    <div>
      <p>{slug}</p>
    </div>
  );
};

export default Page;
