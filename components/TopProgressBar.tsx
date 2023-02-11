import React, { useState, useEffect } from "react";

function TopProgressbar() {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight =
          document.documentElement.clientHeight || document.body.clientHeight;

        setScrollPercentage((scrollTop / (scrollHeight - clientHeight)) * 100);
        console.log((scrollTop / (scrollHeight - clientHeight)) * 100);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      <div
        style={{
          height: "100px",
          width: `${scrollPercentage}%`,
          backgroundColor: "blue",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 214748364789,
        }}
      />
    </>
  );
}

export default TopProgressbar