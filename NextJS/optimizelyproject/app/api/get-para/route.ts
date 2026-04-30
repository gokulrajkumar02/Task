export async function GET() {
  const paragraphs = [
    "Paragraph 1 ",
    "Paragraph 2 ",
    "Paragraph 3 ",
    "Paragraph 4 ",
    "Paragraph 5 ",
  ];

  const index = Math.floor(Math.random() * paragraphs.length);
  const currentPara = paragraphs[index];

  return Response.json({ currentPara });
}