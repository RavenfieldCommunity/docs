import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "@vuepress/plugin-redirect";
import { viteBundler } from "@vuepress/bundler-vite";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { umamiAnalyticsPlugin } from '@vuepress/plugin-umami-analytics'

export default defineUserConfig({
  base: "/docs/",
  locales: {
    '/cn/': {
            lang: 'zh-CN',
            title: 'Ravenfield社区文档',
            description: 'Ravenfield社区文档'
    },
    '/en/': {
            lang: 'en-US', 
            title: 'Ravenfield Documents',
            description: 'Ravenfield Community Documents'
    }
  },
  theme,
  bundler: viteBundler(),
  shouldPrefetch: false,
  plugins: [
    redirectPlugin({
        autoLocale: true   
    }),
    googleAnalyticsPlugin({
      id: 'G-SE76S2Y1LL'
    }),
	umamiAnalyticsPlugin({
      id: '545907a5-e0a1-401c-a49a-48f121c37f03',
	    link: "https://analytics.umami.is/script.js"
	})
  ]
});
