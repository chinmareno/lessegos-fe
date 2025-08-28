"use client";

import { redirect } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  author: string;
  title: string;
  content: string;
};

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const dataWithCreated = {
      ...data,
      slug: data.title,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/data/articles`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify(dataWithCreated),
      }
    );
    const result = await res.json();
    redirect("/articles/" + result.objectId);
  };

  return (
    <form className="max-w-2xl flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Enter author"
        className="bg-amber-300"
        {...register("author", { required: true })}
      />
      {errors.author && <span>This field is required</span>}
      <input
        placeholder="Enter title"
        className="bg-amber-300"
        {...register("title", { required: true })}
      />
      {errors.title && <span>This field is required</span>}
      <input
        placeholder="Enter content"
        className="bg-amber-300"
        {...register("content", { required: true })}
      />
      {errors.content && <span>This field is required</span>}

      <button type="submit">submit</button>
    </form>
  );
}
