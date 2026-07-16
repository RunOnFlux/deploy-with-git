import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Hello Flux",
  description: "A VitePress site deployed on Flux Network",
  outDir: "../dist",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    socialLinks: [
      { icon: "github", link: "https://github.com/RunOnFlux/deploy-with-git" },
    ],
  },
});
