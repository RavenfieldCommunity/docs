import { navbar } from "vuepress-theme-hope";

export const cnNavbar = navbar([
  {
    text: "首页",
    link: "/cn/"
  },
  {
    text: "游戏入门",
    link: "/cn/in-GAME/"
  },
  {
        text: "组件文档",
        link: "/cn/Components/"
  },
  {
    text: "社区项目",
    children: [
      {
        text: "RS IDEA",
        link: "/cn/Project/rsidea"
      }
    ]
  },
  {
    text: "教程",
    link: "/cn/Tutorials/"
  },
  {
    text: "贡献指南",
    link: "/cn/CONTRIBUTING"
  },
  {
    text: "站外链接",
    children: [
      {
        text: "游戏官网",
        link: "https://www.ravenfieldgame.com/"
      },
	  {
        text: "Unity文档",
        link: "https://docs.unity3d.com/cn/2020.3/Manual/"
      },
      {
        text: "游戏官方Discord",
        link: "https://discord.gg/ravenfield"
      },
      {
        text: "官方Ravenscrpit文档",
        link: "http://ravenfieldgame.com/ravenscript/"
      },
      {
        text: "游戏Steam创意工坊",
        link: "https://steamcommunity.com/app/636480/workshop/"
      },
      {
        text: "多人游戏支持（国际版）",
        link: "https://github.com/iliadsh/RavenM"
      }
    ]
  }
]);
