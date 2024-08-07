import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, cnNavbar } from "./navbar/index.js";
import { enSidebar, cnSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://ravenfieldcommunity.github.io",
  logo: "/Logo.png",
  favicon: "/favicon.ico",
  repo: "ravenfieldcommunity/docs",
  pure: true,
  contributors: false,
  pageInfo: ["Category", "Tag"],
  locales: {
    //'/': {
    //  footer: "<p>CC-BY-NC-4.0 Licensed | Copyright © 2023-PRESENT RavenfieldCommunity</p><p>Anonymous analysis of website data using Google Analytics</p>",
    //  navbarLocales: {
    //    langName: 'Hi~'
    //  }
    //},
    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer: "<p>CC-BY-NC-4.0 Licensed | Copyright © 2023-PRESENT RavenfieldCommunity</p><p>Use Google Analytics and Umami Cloud for anonymous website analysis</p>",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
      outlookLocales: {
        themeColor: "#0000ff"
      },
      routeLocales: {
        notFoundMsg: ["Or this page doesn't support this language now, plz try to switch to \"简体中文\" language."]
      }
    },
    "/cn/": {
      navbar: cnNavbar,
      sidebar: cnSidebar,
      footer: "<p>基于CC-BY-NC-4.0许可 | 版权所有 © 2023-PRESENT RavenfieldCommunity</p><p>使用Google Analytics与Umami Cloud匿名分析网站数据</p>",
      displayFooter: true,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页", 
      }
    },
  },
  plugins:{
    comment: {
      provider: "Giscus",
      repo: "RavenfieldCommunity/comment_for_docs",
      repoId: "R_kgDOJde86g",
      category: "Announcements",
      categoryId: "DIC_kwDOJde86s4CWLdI"
    },
    readingTime: false,
    pwa: {
      themeColor: '#6d6d6d',
      cacheHTML: true,
      appendBase: true,
      favicon: "/favicon.ico",
      showInstall: true,
      manifest: {
	    name: "Ravenfield Community Docs",
	    description: "Ravenfield Community Docs for modding, projects and quick-start with game.",
	    short_name: "Ravenfield Docs",
        icons: [{
          src: "/favicon.ico",
          sizes: "1024x1024",
          type: "image/png"
        }]
      },
    },
    mdEnhance: {
      mermaid: true,
	    align: true,
	    card: true,
    },
	components: {
        components: [
          "BiliBili",
          "VPCard"
        ]
      },
  seo: {
    autoDescription: false
  }
  }
});
