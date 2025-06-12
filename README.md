# 博客导航网站

一个美观、现代化的博客导航网站，支持Deno和Cloudflare部署。

## ✨ 特性

- 🎨 **现代化设计**: 采用渐变背景、卡片式布局和流畅动画
- 📱 **响应式布局**: 完美适配桌面端和移动端
- 🚀 **高性能**: 优化的CSS和JavaScript，快速加载
- 📱 **移动端优化**: 专门针对手机端性能优化，减少卡顿
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
├── style.css           # 样式文件（包含移动端优化）
├── script.js           # 交互脚本（包含移动端性能优化）
├── config.js           # 配置文件（修改URL就在这里！）
├── server.ts           # Deno 服务器
├── deno.json           # Deno 配置
├── _headers            # Cloudflare Pages 配置
├── _redirects          # Cloudflare Pages 重定向
└── README.md           # 项目说明
```

## 📱 移动端性能优化

为了解决Cloudflare部署时的移动端卡顿问题，本项目进行了以下优化：

### 🚫 移动端移除的功能
- **卡片位置变化动画**: 移除hover时的translateY、rotate、scale等变换
- **卡片大小变化动画**: 移除复杂的缩放和倾斜效果
- **粒子效果**: 完全禁用鼠标跟随粒子和悬停粒子效果
- **复杂背景动画**: 移除背景渐变动画和装饰元素动画
- **边框旋转动画**: 简化边框动画效果
- **点击爆炸效果**: 移除点击时的粒子爆炸动画

### ✅ 移动端保留的功能
- **基础悬停效果**: 保留简单的阴影变化
- **点击反馈**: 保留基础的点击缩放效果
- **页面导航**: 完整保留所有导航功能
- **响应式布局**: 保持完美的移动端适配

### 🖥️ 桌面/iPad端
- **完整动画效果**: 保留所有原有的动画和特效
- **粒子系统**: 保持完整的粒子效果
- **复杂变换**: 保留所有hover时的3D变换效果
- **视觉增强**: 保持所有视觉增强效果

### 🎯 性能提升
- **减少DOM操作**: 移动端避免频繁的DOM创建和销毁
- **简化CSS动画**: 使用更轻量的CSS属性
- **条件加载**: 根据设备类型选择性加载功能
- **优化渲染**: 减少重绘和重排操作

## 🎨 自定义

### 修改博客链接（超简单！）

只需要编辑 `config.js` 文件中的URL：

```javascript
// 只需要修改这些URL即可
    {
      id: "tech-blog",
      title: "正常人的博客",
      description: "莫种意义上来说相当平庸的一个博客",
      url: "https://zoeoe.de",  // 👈 修改这里的URL（示例：https://your-blog.com）
      icon: "fas fa-rocket",
      tags: ["学习", "折腾", "AI"]
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

## 🙏 致谢

- [Deno](https://deno.land/) - 现代化的 JavaScript/TypeScript 运行时
- [Cloudflare Workers](https://workers.cloudflare.com/) - 边缘计算平台
- [Font Awesome](https://fontawesome.com/) - 图标库
- [Inter](https://rsms.me/inter/) - 字体
