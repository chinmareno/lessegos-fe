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
import { useAuthCookie } from "@/lib/useAuthCookie";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type SignupFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupPage = () => {
  const { register, handleSubmit } = useForm<SignupFormInputs>();
  const router = useRouter();
  const { setAuthCookie } = useAuthCookie();

  const onSubmit = async (data: SignupFormInputs) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const registerRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        }
      );
      if (!registerRes.ok) {
        if (registerRes.status === 409) {
          return toast.error("User with this email already exists.");
        }
        console.error("Registration failed:", registerRes.statusText);
        return toast.error("Registration failed. Try again.");
      }

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
        }
      );

      if (!res.ok) {
        throw new Error("Login after registration failed", {
          cause: res.statusText,
        });
      }

      const user = await res.json();

      if (user.objectId) {
        setAuthCookie(user.objectId);
      } else {
        throw new Error("Login after registration failed: No user ID returned");
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
          <CardTitle>Create a new account</CardTitle>
          <CardDescription>Enter your details below to sign up</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="enter email"
                type="email"
                {...register("email", { required: true })}
                required
                className="w-full max-w-sm min-w-[240px]"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="enter password"
                {...register("password", { required: true })}
                required
                className="w-full max-w-sm min-w-[240px]"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="re-enter password"
                {...register("confirmPassword", { required: true })}
                required
                className="w-full max-w-sm min-w-[240px]"
              />
            </div>

            <Button type="submit" className="cursor-pointer w-full">
              Sign Up
            </Button>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/signin" className="underline underline-offset-4">
                Log in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
