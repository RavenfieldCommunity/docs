import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, cnNavbar } from "./navbar/index.js";
import { enSidebar, cnSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://ravenfieldcommunity.github.io",
  manifest: {
    icons: [
      {
        src: "/favicon.ico",
        sizes: "192x192",
        type: "image/png"
      }
    ]
  },
  iconAssets: "iconfont",
  favicon: "/favicon.ico",
  logo: "/Logo.png",
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
      footer: "<p>CC-BY-NC-4.0 Licensed | Copyright © 2023-PRESENT RavenfieldCommunity</p><p>Anonymous analysis of website data using Google Analytics</p>",
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
      footer: "<p>基于CC-BY-NC-4.0许可 | 版权所有 © 2023-PRESENT RavenfieldCommunity</p><p>使用Google Analytics匿名分析网站数据</p>",
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
    },
    readingTime: false,
    pwa: {
      themeColor: '#6d6d6d',
      cacheHTML: true
    },
    mdEnhance: {
      mermaid: true,
	  align: true,
	  card: true,
    },
	sitemap: false,
	seo: {
	  autoDescription: false
	}
  }
});
