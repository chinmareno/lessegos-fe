import { axiosInstance } from "./axios";

export type ArticleType = {
  title: string;
  content: string;
  author: string;
  created: string;
  id: string;
  ownerId: string;
};

export const fetchArticles = async () => {
  try {
    const res = await axiosInstance.get("/article");
    const articles = res.data as ArticleType[];
    const reversedOrderData = articles.sort(
      (a, b) => Number(b.created) - Number(a.created)
    );
    return reversedOrderData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
