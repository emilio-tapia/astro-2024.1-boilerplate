import { mq1024, mq640 } from "@/utils/client/accessibilty";

export class ResolutionManager {
  static getFromNetworkType(type: string) {
    // RETURN IF CONNECTION IS TOO SLOW
    if (type === "slow-2g") return null;

    const resolutionOptions = {
      high_hd: 1080,
      low_hd: 720,
      md: 540,
      sd: 480,
    };

    const isTablet = mq1024().matches;
    const isMobile = mq640().matches;
    if (!isTablet) {
      if (type === "4g") return resolutionOptions.high_hd;
      if (type === "3g") return resolutionOptions.low_hd;
      if (type === "2g") return resolutionOptions.sd;
    }
    // TABLET
    if (isTablet && !isMobile) {
      if (type === "4g") return resolutionOptions.high_hd;
      if (type === "3g") return resolutionOptions.low_hd;
      if (type === "2g") return resolutionOptions.sd;
    }
    if (isMobile) {
      if (type === "4g") return resolutionOptions.low_hd;
      if (type === "3g") return resolutionOptions.sd;
      if (type === "2g") return resolutionOptions.sd;
    }

    return null;
  }

  static getFromDownlinkManager(rtt: number) {
    if (rtt < 2) return null;

    const resolutionOptions = {
      high_hd: 1080,
      low_hd: 720,
      md: 540,
      sd: 480,
    };

    const isTablet = mq1024().matches;
    const isMobile = mq640().matches;
    if (!isTablet) {
      if (rtt > 100) return resolutionOptions.high_hd;
      if (rtt > 10) return resolutionOptions.low_hd;
      if (rtt > 2) return resolutionOptions.sd;
    }
    // TABLET
    if (isTablet && !isMobile) {
      if (rtt > 100) return resolutionOptions.high_hd;
      if (rtt > 10) return resolutionOptions.low_hd;
      if (rtt > 2) return resolutionOptions.sd;
    }
    if (isMobile) {
      if (rtt > 50) return resolutionOptions.low_hd;
      if (rtt > 2) return resolutionOptions.sd;
    }

    return null;
  }
}
