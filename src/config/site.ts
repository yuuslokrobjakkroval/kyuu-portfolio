import { USER } from "@/data/user";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://kyuu",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const SOURCE_CODE_GITHUB_URL = "https://github.com/yuuslokrobjakkroval";

export const UTM_PARAMS = {
  utm_source: "kyuu",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
