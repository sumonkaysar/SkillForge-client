"use client";

import { Typewriter } from "react-simple-typewriter";

export default function BannerTypewriter() {
  return (
    <Typewriter
      words={["Full Stack Developer", "MERN Specialist", "Tech Enthusiast"]}
      loop
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={40}
      delaySpeed={1500}
    />
  );
}
