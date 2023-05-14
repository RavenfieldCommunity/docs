import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, cnNavbar } from "./navbar/index.js";
import { enSidebar, cnSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://ravenfieldcommunity.github.io",
  iconAssets: "iconfont",
  favicon : "/logo3.jpg",
  logo: "/logo3.jpg",
  repo: "ravenfieldcommunity/docs",
  locales: {
    '/': {
      footer: "CC-BY-NC-4.0 Licensed | Copyright © 2023-present RavenfieldCommunity and ALL Player",
    },
    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer: "CC-BY-NC-4.0 Licensed | Copyright © 2023-present RavenfieldCommunity and ALL Player",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
      outlookLocales: {
        themeColor: "#0000ff"
      }
    },
    "/cn/": {
      navbar: cnNavbar,
      sidebar: cnSidebar,
      footer: "CC-BY-NC-4.0 Licensed | Copyright © 2023-present RavenfieldCommunity and ALL Player",
      displayFooter: true,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  plugins:{
    comment: {
      provider: "Giscus",
      repo: "RavenfieldCommunity/comment_for_docs",
      repoId: "R_kgDOJde86g",
      category: "Announcements",
      categoryId: "DIC_kwDOJde86s4CWLdI"
    }
  }
});
