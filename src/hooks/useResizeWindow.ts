import React from "react";

export const useResizeWindow = () => {
  const [isSmall, setIsSmall] = React.useState(false);

  React.useEffect(() => {
    function checkSreenSize() {
      setIsSmall(window.innerWidth < 768);
    }
    window.addEventListener('resize', checkSreenSize)
    return () => {
      window.removeEventListener('resize', checkSreenSize)
    }
  })
  
  return {
    isSmall
  }
}