import { useClerk, useAuth as useClerkAuth } from "@clerk/nextjs";

export function useAuth() {
  const { isLoaded, userId, isSignedIn } = useClerkAuth();
  const { signOut, redirectToSignIn } = useClerk();

  return {
    isLoading: !isLoaded,
    isAuthenticated: isSignedIn,
    userId: userId,
    signOut,
    redirectToSignIn,
  };
}
