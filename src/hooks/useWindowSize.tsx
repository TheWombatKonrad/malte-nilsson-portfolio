import { useEffect, useState } from "react";

function useWindowSize() {
  let startingWindowSize: number[] = [];

  if (typeof window !== "undefined") {
    startingWindowSize = [window.innerWidth, window.innerHeight];
  }

  const [windowSize, setWindowSize] = useState<number[]>(startingWindowSize);

  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return windowSize;
}

export default useWindowSize;
