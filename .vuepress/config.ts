import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "@vuepress/plugin-redirect";
import { viteBundler } from "@vuepress/bundler-vite";
import { analyticsPlugin } from '@starzkg/vuepress-plugin-analytics';
import { clarityAnalyticsPlugin } from '@starzkg/vuepress-plugin-clarity-analytics'

export default defineUserConfig({
  base: "/docs/",
  locales: {
    //'/': {
    //        // 不要改变'/'内lang的值，保证为'en-US',否则编译会报错！！
    //        lang: 'zh-CN', 
    //        title: 'Ravenfield Modding Documents',
    //        description: 'Ravenfield Community Modding Documents'
    //},
    '/cn/': {
            lang: 'zh-CN',
            title: 'Ravenfield社区客制化文档',
            description: 'Ravenfield社区客制化文档'
    },
    '/en/': {
            lang: 'en-US', 
            title: 'Ravenfield Modding Documents',
            description: 'Ravenfield Community MODDING Documents'
    }
  },
  head: [['meta', { name: 'robots', content: 'noindex' }]],
  theme,
  bundler: viteBundler(),
  shouldPrefetch: false,
  plugins: [
    redirectPlugin({
        autoLocale: true   
    })//,
    //clarityAnalyticsPlugin({
    //  id: 'G-SE76S2Y1LL'
    //})
  ]
});
