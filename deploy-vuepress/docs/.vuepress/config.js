import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "en-US",
  title: "Hello Flux",
  description: "A VuePress site deployed on Flux Network",
  dest: "dist",
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [{ text: "Home", link: "/" }],
    repo: "RunOnFlux/deploy-with-git",
  }),
});
