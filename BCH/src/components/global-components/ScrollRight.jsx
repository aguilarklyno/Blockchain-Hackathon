import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

const ScrollRight = ({ children }) => {

  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 500,
        opacity: 0,
        distance: "80px",
        origin: "right",
      });
    }
  },[]);

  return (<section ref={sectionRef}>{children}</section>)
}

export{ ScrollRight }