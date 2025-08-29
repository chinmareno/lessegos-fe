export type ArticleType = {
  title: string;
  content: string;
  slug: string;
  author: string;
  created: string;
  objectId: string;
  ownerId: string;
};

export const fetchArticles = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/articles`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const articles = (await res.json()) as ArticleType[];

  const reversedOrderData = articles.sort(
    (a, b) => Number(b.created) - Number(a.created)
  );
  return reversedOrderData;
};
