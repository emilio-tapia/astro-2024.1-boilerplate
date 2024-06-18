import { LocalStorageManager } from "@/utils/local/LocalStorageManager";
import { gsap } from "gsap";
import { plyrSetup } from "@/lib/plyr/plyrSetup";
import { NavigatorAPIManager } from "@/utils/network/NavigatorManager";
import type { PlyrComtelec } from "@/utils/types";
import { showToast } from "@/lib/butterup/butterupSetup";
import { ResolutionManager } from "@/utils/media/resolution";
import { CustomDownlinkManager } from "@/utils/network/DownlinkManager";

export class PlyrManager extends HTMLElement {
  player: PlyrComtelec | null;
  loader: HTMLElement;
  path: string | null;
  network: { value: number; date: Date; from: string } | null;
  constructor() {
    super();
    this.path = null;
    this.player = null;
    this.loader = document.getElementById(`loader_${this.id}`)!;
    this.network = LocalStorageManager.getFromLocal({ prop: "downlink" });
    if (!this.network) CustomDownlinkManager.getInstance();
    this.checkNetworkBeforeSetup();
  }

  checkNetworkBeforeSetup() {
    setTimeout(() => {
      if (!LocalStorageManager.getFromLocal({ prop: "downlink" })) {
        this.checkNetworkBeforeSetup();
      } else {
        this.network = LocalStorageManager.getFromLocal({ prop: "downlink" });
        if (this.network!.value && this.network!.from === "api")
          this.setupNormal();
        if (this.network!.from === "manager") {
          if (this.network!.value > 2) {
            this.setupNormal();
          } else {
            this.setupPosterPlyr();
          }
        }
      }
    }, 0);
  }

  async setupNormal() {
    try {
      this.createPlyr();
      if (!this.player) throw "Plyr not created";
      if (this.network!.from === "api") this.handleSourceByNetwork();
      if (this.network!.from === "manager") this.handleSourceByRTT();
      if (!this.path) throw "Plyr path not found";
      this.setSource();
      //   if (!this.player!.source) throw "Plyr source not found";
      showToast("success", `${this.path}`);
      this.player!.autoplay = true;
      await this.errorEvents();
      this.playWhenReady();
      this.fadeWhenPlaying();
      showToast("success", "Playing video");
    } catch (error) {
      showToast("error", `${error}`);
      this.player!.poster = `${this.dataset.poster}.webp`;
      this.fadeWhenReady();
      console.error(error);
    }
  }

  async setupPosterPlyr() {
    try {
      this.createPlyr();
      if (!this.player) throw "Plyr not created";
      this.player!.poster = `${this.dataset.poster}.webp`;
      this.fadeWhenReady();
    } catch (error) {
      console.error(error);
    }
  }

  // async setupPosterNative() {
  //   try {
  //     this.createPlyr();
  //     if (!this.player) throw "Plyr not created";
  //     this.player!.poster = `${this.dataset.poster}.webp`;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  createPlyr() {
    this.player = plyrSetup(this.querySelector("video")!, {});
  }

  handleSourceByNetwork() {
    // SETUP SOURCE BY NETWORK
    const networkType = NavigatorAPIManager.getConnectionProps().effectiveType;
    if (networkType) {
      this.getPathByResolution(networkType);
    }
  }

  handleSourceByRTT() {
    // SETUP SOURCE BY NETWORK
    const rtt = this.network!.value;
    if (rtt) {
      this.getPathByRtt(rtt);
    }
  }

  async setSource() {
    this.player!.source = {
      type: "video",
      title: "Title",
      sources: [
        {
          src: `/video/${this.path}.webm`,
          type: "video/webm",
        },
        {
          src: `/video/${this.path}.mp4`,
          type: "video/mp4",
        },
      ],
    };
  }

  getPathByResolution(networkType: string) {
    const resolution = ResolutionManager.getFromNetworkType(networkType);
    this.path = `${this.dataset.path}_h264_${resolution}`;
  }

  getPathByRtt(rtt: number) {
    const resolution = ResolutionManager.getFromDownlinkManager(rtt);
    this.path = `${this.dataset.path}_h264_${resolution}`;
  }

  playWhenReady() {
    this.player!.once("ready", () => {
      this.player!.play();
    });
  }

  fadeWhenReady() {
    this.player!.once("ready", () => {
      gsap.effects.fadeIn(this);
    });
  }

  fadeWhenPlaying() {
    this.player!.once("playing", () => {
      gsap.effects.fadeOut(this.loader);
      gsap.effects.fadeIn(this, {
        duration: 0.5,
      });
    });
  }

  async errorEvents() {
    try {
      this.player!.on("stalled", (event) => {
        throw "Plyr stalled";
      });
      this.player!.on("error", (event) => {
        throw "Plyr error";
      });
    } catch (error) {
      showToast("error", `${error}`);
    }
  }
}
