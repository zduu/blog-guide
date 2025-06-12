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
    navCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                // 添加点击动画效果和粒子爆炸
                this.style.transform = 'scale(0.95)';
                this.style.filter = 'brightness(1.2)';

                // 创建点击粒子爆炸效果
                createClickExplosion(this);

                setTimeout(() => {
                    // 在新标签页中打开链接
                    window.open(url, '_blank');
                    // 恢复卡片状态
                    this.style.transform = '';
                    this.style.filter = '';
                }, 200);
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
        card.style.transform = 'translateY(50px) scale(0.9)';

        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';

            // 添加加载完成后的微动画
            setTimeout(() => {
                card.style.animation = `cardEntrance 0.5s ease-out`;
            }, 100);
        }, 300 + index * 150);
    });

    // 添加卡片入场动画的CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cardEntrance {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // 动态调整动画以适应卡片数量
    adaptAnimationsToCardCount();
    
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
    
    // 添加鼠标跟踪效果和粒子效果
    document.addEventListener('mousemove', function(e) {
        const decoration = document.querySelector('.header-decoration');
        if (decoration) {
            const x = (e.clientX / window.innerWidth) * 10;
            const y = (e.clientY / window.innerHeight) * 10;
            decoration.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        }

        // 创建鼠标跟随粒子效果
        createParticle(e.clientX, e.clientY);
    });

    // 粒子效果函数（性能优化版本）
    let particleCount = 0;
    const maxParticles = 20;

    function createParticle(x, y) {
        if (Math.random() > 0.97 && particleCount < maxParticles) { // 进一步降低频率并限制数量
            particleCount++;
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 3px;
                height: 3px;
                background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${x}px;
                top: ${y}px;
                animation: particleFloat 1.5s ease-out forwards;
            `;

            document.body.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                    particleCount--;
                }
            }, 1500);
        }
    }

    // 添加粒子动画CSS
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleFloat {
            0% {
                opacity: 1;
                transform: translate(0, 0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
            }
        }
    `;
    document.head.appendChild(particleStyle);

    // 点击爆炸效果函数
    function createClickExplosion(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // 创建多个爆炸粒子
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            const angle = (i / 12) * Math.PI * 2;
            const velocity = 50 + Math.random() * 30;
            const size = 3 + Math.random() * 4;

            particle.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1001;
                left: ${centerX}px;
                top: ${centerY}px;
                animation: explode${i} 0.8s ease-out forwards;
            `;

            // 为每个粒子创建独特的动画
            const explosionStyle = document.createElement('style');
            explosionStyle.textContent = `
                @keyframes explode${i} {
                    0% {
                        opacity: 1;
                        transform: translate(0, 0) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0);
                    }
                }
            `;
            document.head.appendChild(explosionStyle);
            document.body.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
                if (explosionStyle.parentNode) {
                    explosionStyle.parentNode.removeChild(explosionStyle);
                }
            }, 800);
        }
    }
    
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

    // 动态调整动画以适应卡片数量的函数
    function adaptAnimationsToCardCount() {
        const cards = document.querySelectorAll('.nav-card');
        const cardCount = cards.length;

        // 根据卡片数量调整动画时长和延迟
        const baseAnimationDuration = 4; // 基础动画时长（秒）

        cards.forEach((card, index) => {
            const cardType = (index % 6) + 1; // 确定卡片类型 (1-6)
            const animationDelay = (index * 0.5) + 's'; // 错开动画开始时间
            const animationDuration = (baseAnimationDuration + (index % 3)) + 's'; // 变化动画时长

            // 为每个卡片设置独特的动画参数
            card.style.setProperty('--animation-delay', animationDelay);
            card.style.setProperty('--animation-duration', animationDuration);

            // 添加悬停时的额外效果
            card.addEventListener('mouseenter', function() {
                this.style.setProperty('--hover-intensity', '1.2');

                // 为旋转边框卡片添加特殊效果
                if (cardType === 3) {
                    this.style.filter = 'brightness(1.1) saturate(1.2)';
                }

                // 添加悬停时的特殊动画类
                this.classList.add('card-super-hover');

                // 创建悬停时的粒子爆发效果
                createHoverParticles(this);
            });

            card.addEventListener('mouseleave', function() {
                this.style.setProperty('--hover-intensity', '1');
                this.style.filter = '';
                this.classList.remove('card-super-hover');
            });
        });

        // 动态生成适应性CSS
        const adaptiveStyle = document.createElement('style');
        adaptiveStyle.textContent = `
            /* 适应性动画样式 */
            .nav-card {
                --animation-delay: 0s;
                --animation-duration: 4s;
                --hover-intensity: 1;
            }

            /* 根据卡片数量调整整体动画速度 */
            ${cardCount <= 4 ? `
                .nav-card::before, .nav-card::after {
                    animation-duration: 6s !important;
                }
            ` : cardCount >= 8 ? `
                .nav-card::before, .nav-card::after {
                    animation-duration: 8s !important;
                }
            ` : ''}
        `;
        document.head.appendChild(adaptiveStyle);

        console.log(`动画已适配 ${cardCount} 个卡片`);
    }

    // 悬停时的粒子效果函数
    function createHoverParticles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // 创建多个小粒子
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            const angle = (i / 6) * Math.PI * 2;
            const distance = 30 + Math.random() * 20;
            const size = 2 + Math.random() * 3;

            particle.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 70%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1002;
                left: ${centerX}px;
                top: ${centerY}px;
                animation: hoverParticle${i} 1s ease-out forwards;
            `;

            // 为每个粒子创建独特的动画
            const hoverParticleStyle = document.createElement('style');
            hoverParticleStyle.textContent = `
                @keyframes hoverParticle${i} {
                    0% {
                        opacity: 1;
                        transform: translate(0, 0) scale(0.5);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1);
                    }
                }
            `;
            document.head.appendChild(hoverParticleStyle);
            document.body.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
                if (hoverParticleStyle.parentNode) {
                    hoverParticleStyle.parentNode.removeChild(hoverParticleStyle);
                }
            }, 1000);
        }
    }
});
