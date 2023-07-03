import { navbar } from "vuepress-theme-hope";

export const cnNavbar = navbar([
  {
    text: "首页",
    link: "/cn/"
  },
  {
        text: "组件文档",
        link: "/cn/Components/"
  },
  {
    text: "教程",
    link: "/cn/Tutorials/"
  },
  {
    text: "站外链接",
    children: [
      {
        text: "游戏官网",
        link: "https://www.ravenfieldgame.com/"
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
