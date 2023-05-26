import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "vuepress-plugin-redirect";

export default defineUserConfig({
  base: "/docs/",
  locales: {
    '/': {
            // 不要改变'/'内lang的值，保证为'en-US',否则编译会报错！！
            lang: 'en-US', 
            title: 'Ravenfield Modding Documents',
            description: 'Ravenfield Community Modding Documents'
    },
    '/cn/': {
            lang: 'zh-CN',
            title: 'Ravenfield社区客制化文档',
            description: 'Ravenfield社区客制化文档'
    },
    '/en/': {
            lang: 'zh-TW', 
            title: 'Ravenfield Modding Documents',
            description: 'Ravenfield Community MODDING Documents'
    }
  },
  theme,
  plugins: [
    searchProPlugin({
      indexContent: true
    }),
    redirectPlugin({
        autoLocale: true
    })
  ]
});
