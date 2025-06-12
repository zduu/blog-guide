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
      title: "技术博客",
      description: "探索前沿技术，分享编程经验与见解",
      url: "https://zoeoe.de",  // 👈 修改这里的URL（示例：https://your-blog.com）
      icon: "fas fa-rocket",
      tags: ["前端", "后端", "AI"]
    },
    {
      id: "life-blog", 
      title: "生活感悟",
      description: "记录生活点滴，分享人生感悟与思考",
      url: "https://blog.example2.com",  // 👈 修改这里的URL
      icon: "fas fa-lightbulb",
      tags: ["生活", "思考", "成长"]
    },
    {
      id: "reading-blog",
      title: "读书笔记", 
      description: "好书推荐，读书心得与知识分享",
      url: "https://blog.example3.com",  // 👈 修改这里的URL
      icon: "fas fa-book-open",
      tags: ["阅读", "笔记", "分享"]
    }
  ]
};

// 导出配置供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BLOG_CONFIG;
} else if (typeof window !== 'undefined') {
  window.BLOG_CONFIG = BLOG_CONFIG;
}
