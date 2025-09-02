"use client";

import Cookies from "js-cookie";

const isProduction = process.env.NODE_ENV === "production";

const COOKIE_NAME = "user-auth-cookie";

export const useAuthCookie = () => {
  const authCookie = Cookies.get(COOKIE_NAME) || null;
  const setAuthCookie = (id: string) => {
    Cookies.set(COOKIE_NAME, id, {
      expires: 7,
      sameSite: "Lax",
      secure: isProduction,
    });
  };
  const clearAuthCookie = () => {
    Cookies.remove(COOKIE_NAME);
  };

  return { authCookie, setAuthCookie, clearAuthCookie };
};
