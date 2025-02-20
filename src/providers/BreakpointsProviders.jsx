import React, { useState, useEffect, useContext, createContext } from "react";

// Define a context for breakpoints
const BreakpointContext = createContext();

const BreakpointsProvider = ({ children }) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("xs");

  // Custom hook to use media queries
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
      return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
  };

  const up = (key) => {
    switch (key) {
      case "sm":
        return useMediaQuery("(min-width: 640px)");
      case "md":
        return useMediaQuery("(min-width: 768px)");
      case "lg":
        return useMediaQuery("(min-width: 1024px)");
      case "xl":
        return useMediaQuery("(min-width: 1280px)");
      case "2xl":
        return useMediaQuery("(min-width: 1536px)");
      default:
        return false;
    }
  };

  const down = (key) => {
    switch (key) {
      case "sm":
        return useMediaQuery("(max-width: 639px)");
      case "md":
        return useMediaQuery("(max-width: 767px)");
      case "lg":
        return useMediaQuery("(max-width: 1023px)");
      case "xl":
        return useMediaQuery("(max-width: 1279px)");
      case "2xl":
        return useMediaQuery("(max-width: 1535px)");
      default:
        return false;
    }
  };

  const only = (key) => {
    switch (key) {
      case "sm":
        return useMediaQuery("(min-width: 640px) and (max-width: 767px)");
      case "md":
        return useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
      case "lg":
        return useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
      case "xl":
        return useMediaQuery("(min-width: 1280px) and (max-width: 1535px)");
      default:
        return false;
    }
  };

  const between = (start, end) => {
    const startQuery = getBreakpointValue(start);
    const endQuery = getBreakpointValue(end);
    return useMediaQuery(
      `(min-width: ${startQuery}px) and (max-width: ${endQuery}px)`
    );
  };

  const getBreakpointValue = (key) => {
    switch (key) {
      case "sm":
        return 640;
      case "md":
        return 768;
      case "lg":
        return 1024;
      case "xl":
        return 1280;
      case "2xl":
        return 1536;
      default:
        return key;
    }
  };

  const isXs = between(0, 639);
  const isSm = between(640, 767);
  const isMd = between(768, 1023);
  const isLg = between(1024, 1279);
  const isXl = between(1280, 1535);
  const is2Xl = up("2xl");

  useEffect(() => {
    if (isXs) {
      setCurrentBreakpoint("xs");
    } else if (isSm) {
      setCurrentBreakpoint("sm");
    } else if (isMd) {
      setCurrentBreakpoint("md");
    } else if (isLg) {
      setCurrentBreakpoint("lg");
    } else if (isXl) {
      setCurrentBreakpoint("xl");
    } else if (is2Xl) {
      setCurrentBreakpoint("2xl");
    }
  }, [isXs, isSm, isMd, isLg, isXl, is2Xl]);

  return (
    <BreakpointContext.Provider
      value={{ currentBreakpoint, up, down, only, between }}
    >
      {children}
    </BreakpointContext.Provider>
  );
};

export const useBreakpoints = () => useContext(BreakpointContext);

export default BreakpointsProvider;
