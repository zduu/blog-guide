# 博客导航网站

一个美观、现代化的博客导航网站，支持Deno和Cloudflare部署。

## ✨ 特性

- 🎨 **现代化设计**: 采用渐变背景、卡片式布局和流畅动画
- 📱 **响应式布局**: 完美适配桌面端和移动端
- 🚀 **高性能**: 优化的CSS和JavaScript，快速加载
- 🌐 **多平台部署**: 支持Deno和Cloudflare Workers部署
- ♿ **无障碍访问**: 支持键盘导航和屏幕阅读器
- 🎯 **用户友好**: 直观的界面和流畅的交互体验

## 🛠️ 技术栈

- **前端**: HTML5 + CSS3 + JavaScript (ES6+)
- **字体**: Inter 字体系列
- **图标**: Font Awesome 6
- **服务器**: Deno (TypeScript)
- **部署**: Cloudflare Workers

## 🚀 快速开始

### 本地开发

#### 使用 Deno

1. 确保已安装 [Deno](https://deno.land/)

2. 启动开发服务器：
   ```bash
   deno task dev
   ```

3. 或者直接运行：
   ```bash
   deno run --allow-net --allow-read --watch server.ts
   ```

4. 访问 http://localhost:8000

#### 直接打开文件

也可以直接在浏览器中打开 `index.html` 文件进行预览。

### 部署

#### 方式一：本地直接部署（推荐）

**Deno Deploy CLI 部署**
```bash
# 安装 Deno Deploy CLI
deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f https://deno.land/x/deploy/deployctl.ts

# 登录（首次使用）
deployctl login

# 直接部署
deployctl deploy --project=your-project-name server.ts
```

**Cloudflare Wrangler 部署**
```bash
# 安装 Wrangler
npm install -g wrangler

# 登录（首次使用）
wrangler login

# 创建 Pages 项目并部署
wrangler pages create blog-navigator
wrangler pages deploy . --project-name=blog-navigator
```

#### 方式二：GitHub 连接部署

**Deno Deploy**
1. 将代码推送到 GitHub 仓库
2. 在 [Deno Deploy](https://dash.deno.com/) 创建新项目
3. 连接 GitHub 仓库并选择 `server.ts` 作为入口文件
4. 部署完成

**Cloudflare Pages**
1. 将代码推送到 GitHub 仓库
2. 登录 [Cloudflare Pages](https://pages.cloudflare.com/)
3. 点击"创建项目" → "连接到Git"
4. 选择您的GitHub仓库
5. 构建设置：
   - 构建命令：留空
   - 构建输出目录：`/`
6. 点击"保存并部署"

## 📁 项目结构

```
blog-navigator/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 交互脚本
├── config.js           # 配置文件（修改URL就在这里！）
├── server.ts           # Deno 服务器
├── deno.json           # Deno 配置
├── _headers            # Cloudflare Pages 配置
├── _redirects          # Cloudflare Pages 重定向
└── README.md           # 项目说明
```

## 🎨 自定义

### 修改博客链接（超简单！）

只需要编辑 `config.js` 文件中的URL：

```javascript
// 只需要修改这些URL即可
{
  url: "https://your-blog.com",  // 👈 修改这里
  title: "你的博客标题",
  description: "你的博客描述"
}
```

### 自定义样式

修改 `style.css` 文件中的 CSS 变量：

```css
:root {
    --primary-color: #667eea;    /* 主色调 */
    --secondary-color: #764ba2;  /* 次要色调 */
    --accent-color: #f093fb;     /* 强调色 */
    /* ... 其他变量 */
}
```

### 添加新的导航卡片

在 `index.html` 中复制现有的卡片结构并修改内容：

```html
<div class="nav-card" data-url="https://new-blog.com">
    <div class="card-icon">
        <i class="fas fa-star"></i>
    </div>
    <div class="card-content">
        <h3 class="card-title">新博客</h3>
        <p class="card-description">博客描述</p>
        <div class="card-tags">
            <span class="tag">标签1</span>
            <span class="tag">标签2</span>
        </div>
    </div>
    <div class="card-arrow">
        <i class="fas fa-arrow-right"></i>
    </div>
</div>
```

## 🔧 开发命令

```bash
# 启动开发服务器（带热重载）
deno task dev

# 启动生产服务器
deno task start
```

## 📱 浏览器支持

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- 移动端浏览器

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

- [Deno](https://deno.land/) - 现代化的 JavaScript/TypeScript 运行时
- [Cloudflare Workers](https://workers.cloudflare.com/) - 边缘计算平台
- [Font Awesome](https://fontawesome.com/) - 图标库
- [Inter](https://rsms.me/inter/) - 字体
