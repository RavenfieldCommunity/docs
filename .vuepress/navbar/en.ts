import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
    {
        text: "Home",
        link: "/en/"
    },
    //{
    //  text: " Game Introduction",
    //  link: "/en/in-GAME/"
    //},
    {
        text: "Component Reference",
        link: "/en/Components/"
    },
	{
        text: "Community Project",
        children: [
          {
            text: "RS IDEA",
            link: "/en/Projects/rsidea"
          }
        ]
    },
    //{
    //  text: "Tutorials",
    //  link: "/en/Tutorials/"
    //},
    //{
    //  text: "CONTRIBUTING",
    //  link: "/en/CONTRIBUTING"
    //},
    {
      text: "External link",
      children: [
        {
          text: "Game official website",
          link: "https://www.ravenfieldgame.com/"
          },
          {
            text: "Unity documents",
            link: "https://docs.unity3d.com/cn/2020.3/Manual/"
          },
          {
            text: "Game official Discord",
            link: "https://discord.gg/ravenfield"
          },
          {
            text: "Official Ravenscrpit documents",
            link: "http://ravenfieldgame.com/ravenscript/"
          },
          {
            text: "Game Steam workshop",
            link: "https://steamcommunity.com/app/636480/workshop/"
          },
          {
            text: "Multiplayer support",
            link: "https://github.com/iliadsh/RavenM"
          }
        ]
    }
]);
