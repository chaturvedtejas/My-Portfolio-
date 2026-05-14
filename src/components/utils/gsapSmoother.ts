import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export const smoother = {
  current: null as ScrollSmoother | null,
};
