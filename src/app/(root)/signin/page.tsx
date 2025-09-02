"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthCookie } from "@/lib/useAuthCookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type LoginFormInputs = {
  login: string;
  password: string;
};

const Signin = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const router = useRouter();
  const { setAuthCookie } = useAuthCookie();

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
        }
      );
      if (res.status === 401) {
        return toast.error("Invalid credentials. Please try again.");
      }

      const user = await res.json();

      if (user.objectId) {
        setAuthCookie(user.objectId);
      } else {
        throw new Error("Login failed: No user ID returned");
      }
      router.refresh();
    } catch (err) {
      console.error(err);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-6 m-4 items-center">
      <Card className="w-full max-w-md min-w-[280px]">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="login"
                placeholder="enter email"
                {...register("login", { required: true })}
                type="email"
                className="w-full max-w-sm min-w-[240px]"
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="enter password"
                {...register("password", { required: true })}
                required
                className="w-full max-w-sm min-w-[240px]"
              />
            </div>
            <Button type="submit" className="cursor-pointer w-full">
              Login
            </Button>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signin;
