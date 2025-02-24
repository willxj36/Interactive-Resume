import { useCallback, useRef, useState, useEffect } from "react";

/**
 * simple throttle hook that should work anywhere in frontend for any function not requiring a return
 * @param cb function to be called/throttled
 * @param delayMs delay in milliseconds
 * @returns useCallback to use in place of cb directly
 */
export const useThrottle = (cb: () => void, delayMs: number) => {
  // using useRef helps avoid issues where throttling is skipped after quiet rerenders
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(() => {
    if (!timeoutRef.current) {
      cb();
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = undefined;
      }, delayMs);
    }
  }, [cb, delayMs]);
};

/**
 * Detects small screen for conditional responsive logic
 * @returns boolean; whether screen is less than 768px wide indicating likely a
 * phone screen
 */
export const useIsSmallScreen = (): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
};
