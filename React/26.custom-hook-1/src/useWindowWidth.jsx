import React from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
  return windowWidth
}

export default useWindowWidth;
