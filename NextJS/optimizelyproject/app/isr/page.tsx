

async function getParagraph() {
  const res = await fetch(`http://localhost:3000/api/get-para`, {
    next: { revalidate: 10 },
  });
  return res.json();
}

export default async function Page() {
  const { currentPara } = await getParagraph();
  return (
    <div>
      <p>{currentPara}</p>
    </div>
  );
}
