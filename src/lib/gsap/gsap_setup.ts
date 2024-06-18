export * from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(ScrollTrigger, Flip);

gsap.registerEffect({
  name: "fadeIn",
  defaults: { duration: 2 }, //defaults get applied to the "config" object passed to the effect below
  effect: (targets, config) => {
    return gsap.to(targets, { duration: config.duration, opacity: 1 });
  },
});
gsap.registerEffect({
  name: "fadeOut",
  defaults: { duration: 2 }, //defaults get applied to the "config" object passed to the effect below
  effect: (targets, config) => {
    return gsap.to(targets, { duration: config.duration, opacity: 0 });
  },
});
