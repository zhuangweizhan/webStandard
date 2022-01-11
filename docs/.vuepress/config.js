module.exports = {
  title: 'WEB规范',
  description: '本案例仅供参考',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/logo.png' }],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '主页', link: '/' },
      {text: '前端规范', link: '/standard/' },
    ],
    displayAllHeaders: true,
    lastUpdated: '最后更新时间：', // 最后更新时间提示
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    sidebar: {
      '/standard/': [
        '命名规范',
        '文本规范',
        '开发规范',
        'html规范',
        'css规范',
        'js规范',
        'vue规范'
      ]
    },
    sidebarDepth: 2
  },
  chainWebpack: (config, isServer) => {
    config.module.rule('less')
    .test(/\.less$/)
    .oneOf('normal')
      .use('less')
        .loader('less-loader')
        .end()
      .end()
  },
  less: {
    javascriptEnabled: true
  }
};