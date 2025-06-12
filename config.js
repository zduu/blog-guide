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
      description: "探索前沿技术，分享编程经验与见解",
      url: "https://zoeoe.de",  // 👈 修改这里的URL（示例：https://your-blog.com）
      icon: "fas fa-rocket",
      tags: ["学习", "捣腾", "AI"]
    },
    {
      id: "life-blog", 
      title: "幻想进行时",
      description: "记录生活点滴，分享人生感悟与思考",
      url: "http://zhou12203.top",  // 👈 修改这里的URL
      icon: "fas fa-lightbulb",
      tags: ["幻想", "发癫", "热爱"]
    },
    {
      id: "reading-blog",
      title: "牛刀小试", 
      description: "好书推荐，读书心得与知识分享",
      url: "https://blog.zhou12203.top",  // 👈 修改这里的URL
      icon: "fas fa-book-open",
      tags: ["摆设", "收藏", "尝试"]
    }
  ]
};

// 导出配置供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BLOG_CONFIG;
} else if (typeof window !== 'undefined') {
  window.BLOG_CONFIG = BLOG_CONFIG;
}
