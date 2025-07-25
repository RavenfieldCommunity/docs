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
    googleAnalyticsPlugin({
      id: 'G-SE76S2Y1LL'
    }),
	umamiAnalyticsPlugin({
      id: 'f49691ea-f10a-4dc3-a42d-c1a2f844e0b4',
	    link: "https://analytics.umami.is/script.js"
	})
  ]
});
