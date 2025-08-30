export const handleLogout = async () => {
  document.cookie = `user-auth-cookie=; path=/; max-age=0; Secure; SameSite=Lax`;
};
