import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "路遥知Martin",
  description: "技术博客，记录技术成长",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
