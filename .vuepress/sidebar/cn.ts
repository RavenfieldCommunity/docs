import { sidebar } from "vuepress-theme-hope";

export const cnSidebar = sidebar({
  "/cn/": ["/cn/","/cn/NOTICE","/cn/CONTRIBUTING","/cn/OSMod","/cn/RESOURCE"],
  "/cn/Components/": "structure",
  "/cn/Tutorials/": ["/cn/Tutorials/",{
    text: "正文",
    children: [
      "/cn/Tutorials/wpn.1",
	  "/cn/Tutorials/vhc.1",
      "/cn/Tutorials/rvs.2",
	  "/cn/Tutorials/rvs.3"
    ],
  }]
});
