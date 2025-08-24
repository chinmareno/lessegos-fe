"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Signup = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const router = useRouter();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        credentials: "include",
      });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login: data.email,
            password: data.password,
          }),
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error("SIgnup failed");
      }

      const user = await res.json();

      console.log("User Signed in:", user);

      if (user.objectId) {
        localStorage.setItem("user-id", user.objectId);

        document.cookie = `user-auth-cookie=${user.objectId}; path=/; max-age=86400; Secure; SameSite=Strict`;
      }

      router.push("/articles");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <h2>Create an account</h2>
      <div className="flex gap-1 flex-col max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="enter email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="enter password"
              {...register("password", { required: true })}
            />
          </div>

          <button
            className="bg-amber-400 hover:cursor-pointer mt-3.5"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
