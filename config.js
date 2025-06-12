// 博客导航配置文件
// 只需要修改这个文件中的URL即可，无需修改其他文件

const BLOG_CONFIG = {
  // 网站基本信息
  site: {
    title: "博客导航",
    subtitle: "发现优质内容，开启阅读之旅",
    footer: "© 2025 博客导航. 用心发现，用爱分享."
  },
  
  // 博客链接配置 - 只需要修改下面的URL
  blogs: [
    {
      id: "tech-blog",
      title: "正常人的博客",
      description: "莫种意义上来说相当平庸的一个博客",
      url: "https://zoeoe.de",  // 👈 修改这里的URL（示例：https://your-blog.com）
      icon: "fas fa-rocket",
      tags: ["学习", "折腾", "AI"]
    },
    {
      id: "life-blog", 
      title: "幻想进行时",
      description: "幻想二次元浓度爆表",
      url: "http://zhou12203.top",  // 👈 修改这里的URL
      icon: "fas fa-lightbulb",
      tags: ["幻想", "发癫", "热爱"]
    },
    {
      id: "reading-blog",
      title: "牛刀小试", 
      description: "姑且当作一个收藏品",
      url: "https://blog.zhou12203.top",  // 👈 修改这里的URL
      icon: "fas fa-book-open",
      tags: ["摆设", "收藏", "尝试"]
    },
    {
      id: "suibian-blog",
      title: "我随便挂的", 
      description: "六大美德启动！",
      url: "http://vps.040627.xyz",  // 👈 修改这里的URL
      icon: "fas fa-book-open",
      tags: ["任务", "强制", "学生"]
    }
  ]
};

// 导出配置供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BLOG_CONFIG;
} else if (typeof window !== 'undefined') {
  window.BLOG_CONFIG = BLOG_CONFIG;
}
