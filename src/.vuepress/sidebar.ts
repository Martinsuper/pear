import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Java 基础",
      icon: "book",
      prefix: "posts/Java/",
      children: "structure",
    },
    {
      text: "其他",
      icon: "book",
      prefix: "posts/其他/",
      children: [
        {
          text: "面试",
          icon: "book",
          prefix: "posts/java/",
          children: "structure",
        }
      ],
    },
  ],
});
