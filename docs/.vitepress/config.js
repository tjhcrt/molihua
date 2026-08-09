import { defineConfig } from 'vitepress'
import { getThemeConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  blog:{
    postDir:'posts'
  },
  nav:[
    { text: 'Home', link: '/' },
    { text: '博客', link: '/posts/' }
  ],
  socialLinks: [
    { icon: 'github', link: 'https://github.com' }
  ]
})

export default defineConfig({
  extends: blogTheme,
  title: "MY YIGE WENDANGZHAN",
  description: "A SITE"
})