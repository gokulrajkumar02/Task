const Page =  async ({ params }: { params: Promise<{ slug: string }> }) => {

  const { slug } = await params
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <iframe
        className="w-[900px] h-[500px]"
        src={`https://www.youtube.com/embed/${slug}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Page;