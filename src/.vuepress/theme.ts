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
    blog: {
      excerptLength: 0,
      filter: (page) => Boolean(page.filePathRelative) && !page.frontmatter.home,
      article: "/article/",
      category: "/category/",
      tag: "/tag/",
      star: "/star/",
      timeline: "/timeline/",
    },
    components: {
      components: ["Badge", "VPCard"],
    },
    comment: {
      provider: "Giscus",
      repoId: "YOUR_REPO_ID",
      category: "Announcements",
      categoryId: "YOUR_CATEGORY_ID",
    },
    icon: {
      assets: "/assets/icon/all.js"
    }
  },

  logo: "/cherry.png",

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
    name: "Mrtduan",
    avatar: "/cherry.png",
    description: "后端开发",
    intro: "/intro.html",
    medias: {
      // GitHub: "https://github.com/YOUR_GITHUB_USERNAME",
      // Gitee: "https://gitee.com/YOUR_GITEE_USERNAME",
      // Email: "mailto:your-email@example.com",
    },
  },

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  // pure: true, // 启用纯净模式
  darkmode: "switch",

  fullscreen: true,
  
  favicon: "/favicon.ico",

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
