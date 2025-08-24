import Link from "next/link";

export default async function Slug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/articles/${slug}`
  );

  const data = (await res.json()) as {
    title: string;
    content: string;
    slug: string;
    author: string;
    created: string;
  };

  const date = new Date(data.created);
  return (
    <div>
      <h2 className="font-bold mb-2">{data.title}</h2>
      <p className="mb-3">{data.content}</p>
      <div>Author : {data.author}</div>
      <div>Publish at : {date.toLocaleTimeString()}</div>
      <Link href={"/create/" + slug}>Update this article</Link>
    </div>
  );
}
