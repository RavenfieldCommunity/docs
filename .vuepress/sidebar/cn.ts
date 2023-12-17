import { sidebar } from "vuepress-theme-hope";

export const cnSidebar = sidebar({
  "/cn/": ["/cn/",
	"/cn/CONTRIBUTING",
	"/cn/RESOURCE"],
  "/cn/in-GAME/": [
	"/cn/in-GAME/QuickStart",
	"/cn/in-GAME/MapEditor"
	],
  "/cn/Components/": "structure",
  "/cn/Tutorials/": ["/cn/Tutorials/",{
    text: "正文",
    children: [
      "/cn/Tutorials/wpn.1",
	    "/cn/Tutorials/vhc.1",
      "/cn/Tutorials/otr.1",
	    "/cn/Tutorials/rvs.1",
      "/cn/Tutorials/rvs.2",
	    "/cn/Tutorials/rvs.3",
	  {
        text: "拓展教程",
        children: [
          "/cn/Tutorials/ext.1",
        ],
      }
    ],
  }]
});
