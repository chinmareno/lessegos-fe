"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type LoginFormInputs = {
  login: string;
  password: string;
};

const SigninPage = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const router = useRouter();
  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login: data.login,
            password: data.password,
          }),
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const user = await res.json();

      if (user.objectId) {
        localStorage.setItem("user-id", user.objectId);

        document.cookie = `user-auth-cookie=${user.objectId}; path=/; max-age=86400; Secure; SameSite=Strict`;
      }

      router.push("/articles");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h2>Log in</h2>
      <div className="flex gap-1 flex-col max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="login">Email</label>
            <input
              id="login"
              placeholder="enter email"
              {...register("login", { required: true })}
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
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
