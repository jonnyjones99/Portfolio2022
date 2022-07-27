import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

console.log("hello");

gsap.to(".my-work", {
  xPercent: -100,
  x: () => innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".my-work",
    start: "top top",
    end: () => innerWidth * 3,
    scrub: true,
    pin: true,
    invalidateOnRefresh: true,
    anticipatePin: 1,
  },
});
