// 导航网站交互脚本

// 生成导航卡片的函数
function generateNavigationCards() {
    const navigationGrid = document.getElementById('navigation-grid');
    if (!navigationGrid || !window.BLOG_CONFIG) return;

    const { blogs } = window.BLOG_CONFIG;

    navigationGrid.innerHTML = blogs.map(blog => `
        <div class="nav-card" data-url="${blog.url}">
            <div class="card-icon">
                <i class="${blog.icon}"></i>
            </div>
            <div class="card-content">
                <h3 class="card-title">${blog.title}</h3>
                <p class="card-description">${blog.description}</p>
                <div class="card-tags">
                    ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="card-arrow">
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    // 首先生成导航卡片
    generateNavigationCards();

    // 获取所有导航卡片
    const navCards = document.querySelectorAll('.nav-card');
    
    // 为每个卡片添加点击事件
    navCards.forEach(card => {
        card.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                // 添加点击动画效果
                this.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    // 在新标签页中打开链接
                    window.open(url, '_blank');
                    // 恢复卡片状态
                    this.style.transform = '';
                }, 150);
            }
        });
        
        // 添加键盘支持
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // 使卡片可聚焦
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
    });
    
    // 添加页面加载动画
    const cards = document.querySelectorAll('.nav-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + index * 100);
    });
    
    // 添加标题动画
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            title.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 100);
    }
    
    if (subtitle) {
        subtitle.style.opacity = '0';
        subtitle.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            subtitle.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // 添加鼠标跟踪效果（可选）
    document.addEventListener('mousemove', function(e) {
        const decoration = document.querySelector('.header-decoration');
        if (decoration) {
            const x = (e.clientX / window.innerWidth) * 10;
            const y = (e.clientY / window.innerHeight) * 10;
            decoration.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        }
    });
    
    // 添加滚动效果
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // 添加触摸设备支持
    if ('ontouchstart' in window) {
        navCards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            card.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }
    
    // 性能优化：防抖函数
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // 优化窗口大小调整
    const handleResize = debounce(() => {
        // 重新计算布局相关的逻辑
        console.log('Window resized');
    }, 250);
    
    window.addEventListener('resize', handleResize);
    
    // 添加错误处理
    window.addEventListener('error', function(e) {
        console.error('页面发生错误:', e.error);
    });
    
    // 添加页面可见性API支持
    if (typeof document.hidden !== 'undefined') {
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                console.log('页面隐藏');
            } else {
                console.log('页面显示');
            }
        });
    }
});
