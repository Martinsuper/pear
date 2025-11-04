import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "路遥知马力",
  description: "技术博客，记录技术成长",

  theme,

  markdown: {
  },

  bundler: viteBundler({
    viteOptions: {
      css: {
        preprocessorOptions: {
          scss: {
            charset: false
          }
        }
      }
    }
  })

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
