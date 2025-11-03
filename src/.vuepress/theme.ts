import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
// import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://martinsuper.github.io",

  author: {
    name: "Mrtduan",
    url: "https://younote.top",
  },

  plugins: {
    blog: true,
    components: {
      components: ["Badge", "VPCard"],
    },
    icon: {
      assets: "/assets/icon/all.js"
    }
  },

  logo: "cherry.png",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  // sidebar,

  // 页脚
  footer: "路虽远 行则将至 事虽难 做则必成",
  displayFooter: true,
  // 博客相关
  blog: {
    description: "后端开发",
    intro: "/intro.html",
    medias: {
      // VuePressThemeHope: {
      //   icon: '/logo.svg',
      //   link: "https://theme-hope.vuejs.press/zh/get-started/",
      // },
      // ThemeHopeConfig: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press/zh/guide/intro/intro.html",
      // },
      // fontawesome: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://fontawesome.com/search?o=r&m=free",
      // },
      
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  markdown: {
    hint: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    codeTabs: true,
    tabs: true,
    tasklist: true,
    component: true,
    vPre: true,
    include: true,
    align: true,
    attrs: true,
    mark: true,
    spoiler: true,
    sup: true,
    sub: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    plantuml: true,
    demo: true,
    markmap: true
  },
});
