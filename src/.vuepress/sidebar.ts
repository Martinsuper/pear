import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Java 基础",
      icon: "book",
      prefix: "posts/java/",
      children: "structure",
    },
  ],
});
