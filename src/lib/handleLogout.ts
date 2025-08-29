export const handleLogout = async () => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.cookie = `user-auth-cookie=; path=/; max-age=0; Secure; SameSite=Strict`;
  } catch (err) {
    console.error("Logout failed:", err);
  }
};
