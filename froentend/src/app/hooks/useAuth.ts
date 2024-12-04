import { useState, useEffect } from "react";

interface UseAuthReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export default function useAuth(): UseAuthReturn {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("user");
      setIsAuthenticated(!!token);
      setIsLoading(false);
    }
  }, []);

  return { isAuthenticated, isLoading };
}
