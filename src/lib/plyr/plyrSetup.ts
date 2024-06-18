import Plyr from "plyr";

const options = {
  controls: [],
  autoplay: false,
  loop: { active: true },
  clickToPlay: false,
  muted: true,
  fullscreen: { enabled: false },
  loadSprite: false,
};

export function plyrSetup(
  selector: HTMLElement,
  customOptions: {},
): Plyr | null {
  try {
    // CHECK SUPPORT FOR PLYR
    const supported = Plyr.supported("video", "html5");

    if (supported.api && supported.ui) {
      // CREATE NEW INSTANCE
      return new Plyr(selector, { ...options, ...customOptions });
    }
    throw "Plyr not supported";
  } catch (error) {
    return null;
  }
}
