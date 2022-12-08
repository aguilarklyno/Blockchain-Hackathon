import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

const Scroll03 = ({ children }) => {

  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 1400,
        opacity: 0,
        distance: "40px",
      });
    }
  },[]);

  return (<section ref={sectionRef}>{children}</section>)
}

export{ Scroll03 }