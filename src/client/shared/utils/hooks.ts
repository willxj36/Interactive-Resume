import { useCallback, useRef } from "react";

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
