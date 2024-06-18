// USES
// 1. Disable Logo Carousel in Product Section Landing Page
export function prefersReducedMotion() {
  // Check if the user has a preference for reduced motion
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Set up a media query for a window width greater than 1024 pixels
// USES
// 1. Switch Menu Desktop / Mobile
// 2. Setup video hero quality
export function mq1024() {
  return window.matchMedia("(max-width: 1024px)");
}

// 1. Setup video hero quality
export function mq640() {
  return window.matchMedia("(max-width: 640px)");
}
