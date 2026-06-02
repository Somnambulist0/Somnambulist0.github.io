// ==============================================
// 🎨 【渲染引擎】根据配置自动渲染页面内容
// 无需修改此文件，只需更新 config.js
// ==============================================

function renderPage() {
    if (typeof CONFIG === 'undefined') {
        console.error('CONFIG is not defined. Please make sure config.js is loaded.');
        return;
    }

    renderPersonalInfo();
    renderNavigation();
    renderContactLinks();
    renderNews();
    renderWorkExperience();
    renderResearch();
    renderProjects();
    renderEducation();
    renderFooter();
    updatePageTitle();
}

// 渲染个人信息
function renderPersonalInfo() {
    const personal = CONFIG.personal;
    const interests = personal.researchInterests
        .split(/(?<=\.)\s+/)
        .filter(Boolean)
        .join('<br>');
    
    // 更新标题
    const titleEl = document.querySelector('#about h1');
    if (titleEl) {
        const chineseNameHTML = personal.chineseName
            ? ` <span class="chinese-name" lang="zh-CN">${personal.chineseName}</span>`
            : '';
        titleEl.innerHTML = `${personal.name}${chineseNameHTML}`;
    }
    
    // 更新头像
    const avatarEl = document.querySelector('#about img[src*="placeholder"]');
    if (avatarEl) avatarEl.src = personal.avatar;
    
    // 更新简介
    const bioContainer = document.querySelector('#about .space-y-4');
    if (bioContainer) {
        bioContainer.innerHTML = personal.bio.map(para => `<p>${para}</p>`).join('');
        
        // 添加研究兴趣
        const interestsHTML = `
            <div class="mt-6 p-5 bg-[#F7F4FC] rounded-lg border-l-4 border-[#B8A7D9]">
                <h3 class="font-bold text-theme-text mb-1 text-sm">Interests</h3>
                <p class="text-[#7A63A8] font-semibold text-sm">
                    ${interests}
                </p>
            </div>
        `;
        bioContainer.innerHTML += interestsHTML;
    }
}

// 渲染导航菜单
function renderNavigation() {
    const navEl = document.querySelector('#nav-links') || document.querySelector('nav .hidden.md\\:flex');
    if (navEl && CONFIG.navigation) {
        navEl.innerHTML = CONFIG.navigation.map(item => 
            `<a href="${item.href}" class="hover:text-theme-primary transition whitespace-nowrap">${item.label}</a>`
        ).join('');
    }
    
    // 更新导航栏品牌名
    const brandEl = document.querySelector('nav a.font-bold');
    if (brandEl) brandEl.textContent = CONFIG.personal.shortName;
}

// 渲染联系方式链接
function renderContactLinks() {
    const contact = CONFIG.contact;
    
    // 找到联系方式容器（在 about 部分的图标容器）
    const contactContainer = document.querySelector('#about .flex.gap-5');
    if (!contactContainer) return;
    
    // 定义所有可能的联系方式及其图标 SVG
    const contactTypes = {
        email: {
            title: 'Email',
            href: contact.email ? `mailto:${contact.email}` : null,
            svg: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
        },
        github: {
            title: 'GitHub',
            href: contact.github || null,
            svg: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.475.087.687-.206.687-.456 0-.226-.008-.809-.013-1.589-2.783.62-3.367-1.341-3.367-1.341-.454-1.156-1.107-1.464-1.107-1.464-.908-.62.068-.608.068-.608 1.007.072 1.532 1.033 1.532 1.033.89 1.533 2.336 1.087 2.903.834.09-.646.349-1.087.635-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.684-.103-.254-.447-1.272.098-2.646 0 0 .84-.269 2.75 1.025A9.539 9.539 0 0112 6.844c.85.004 1.704.116 2.502.338 1.91-1.294 2.747-1.025 2.747-1.025.546 1.373.202 2.392.099 2.646.64.7 1.029 1.593 1.029 2.684 0 3.842-2.338 4.686-4.562 4.935.359.307.678.918.678 1.846 0 1.337-.013 2.418-.013 2.741 0 .252.208.547.693.455C21.144 20.198 24 16.44 24 12.017 24 6.484 19.522 2 14 2h-2z" clip-rule="evenodd"/></svg>'
        },
        linkedin: {
            title: 'LinkedIn',
            href: contact.linkedin || null,
            svg: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>'
        },
        scholar: {
            title: 'Google Scholar',
            href: contact.scholar || null,
            svg: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>'
        }
    };
    
    // 清空容器并重新生成图标（只显示配置中存在的）
    contactContainer.innerHTML = '';
    
    // 按顺序添加存在的联系方式
    Object.entries(contactTypes).forEach(([key, info]) => {
        const href = info.href;
        // 如果配置中存在且不为空，则显示
        if (href && href !== '#' && href !== '') {
            const link = document.createElement('a');
            link.href = href;
            link.className = 'text-theme-subtext hover:text-theme-text transition transform hover:scale-110';
            link.title = info.title;
            link.innerHTML = info.svg;
            contactContainer.appendChild(link);
        }
    });
}

// 获取分类颜色（统一颜色映射）
function getCategoryColor(category) {
    const colorMap = {
        'Research': 'bg-blue-50 text-blue-600 border-blue-100',
        'School': 'bg-green-50 text-green-600 border-green-100',
        'Work': 'bg-purple-50 text-purple-600 border-purple-100',
        'Award': 'bg-yellow-50 text-yellow-600 border-yellow-100',
        'Publication': 'bg-indigo-50 text-indigo-600 border-indigo-100',
        'Conference': 'bg-pink-50 text-pink-600 border-pink-100',
        'Workshop': 'bg-orange-50 text-orange-600 border-orange-100',
    };
    // 如果找到映射，使用映射的颜色；否则使用默认灰色
    return colorMap[category] || 'bg-gray-100 text-gray-600 border-gray-200';
}

// 渲染工作经历
function renderWorkExperience() {
    const workContainer = document.querySelector('#work-experience .work-list');
    if (!workContainer || !CONFIG.workExperience) return;

    workContainer.innerHTML = CONFIG.workExperience.map(work => {
        const date = work.displayDate || (work.endDate ? `${work.startDate} - ${work.endDate}` : work.startDate);
        const imageClass = work.logoText
            ? 'max-w-[8rem] sm:max-w-[9rem] max-h-16'
            : 'max-w-[8rem] sm:max-w-[9rem] max-h-14';
        const companyLink = work.link
            ? `<a href="${work.link}" class="text-theme-primary hover:underline">${work.company}</a>`
            : work.company;
        const meta = date;

        return `
            <div class="grid grid-cols-1 sm:grid-cols-[12rem_minmax(0,1fr)] gap-4 sm:gap-6 items-center">
                <a href="${work.link || '#'}" class="group flex flex-col items-center justify-center gap-2 sm:min-h-28">
                    <img src="${work.logo}" alt="${work.company} logo" class="${imageClass} object-contain transition duration-200 group-hover:scale-[1.02]">
                    ${work.logoText ? `<div class="text-xl sm:text-2xl font-bold tracking-[0.32em] text-gray-400 leading-none pl-[0.32em]">${work.logoText}</div>` : ''}
                </a>
                <div class="min-w-0 text-center sm:text-left">
                    <h3 class="text-sm sm:text-base font-bold text-theme-text leading-snug">
                        ${work.role} at ${companyLink}
                    </h3>
                    ${meta ? `<p class="mt-2 text-xs sm:text-sm text-theme-subtext">${meta}</p>` : ''}
                    ${work.description ? `<p class="mt-3 text-sm text-theme-text/80 leading-relaxed">${work.description}</p>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// 渲染新闻动态
function renderNews() {
    const newsContainer = document.querySelector('#news .space-y-4');
    if (!newsContainer || !CONFIG.news) return;
    
    newsContainer.innerHTML = CONFIG.news.map(item => {
        const dateClass = item.highlight 
            ? "font-mono text-theme-primary font-bold text-sm"
            : "font-mono text-theme-subtext text-sm";
        
        // 使用统一的颜色映射，而不是 item.categoryColor
        const categoryColor = getCategoryColor(item.category);
        
        return `
            <div class="flex flex-col md:flex-row gap-3 md:items-center w-full">
                <div class="flex items-center gap-3 md:w-32 shrink-0">
                    <span class="${dateClass}">${item.date}</span>
                    <span class="${categoryColor} text-[10px] font-bold px-1.5 py-0.5 rounded border whitespace-nowrap">${item.category}</span>
                </div>
                <div class="text-theme-text text-sm flex-1 min-w-0">${item.content}</div>
            </div>
        `;
    }).join('');
}

// 渲染研究内容
function renderResearch() {
    const researchContainer = document.querySelector('#Research .space-y-6');
    if (!researchContainer || !CONFIG.Research) return;
    
    researchContainer.innerHTML = CONFIG.Research.map(research => {
        const linksHTML = Object.entries(research.links).map(([key, url]) => 
            `<a href="${url}" class="text-xs font-bold text-theme-subtext hover:text-theme-text transition">${key.toUpperCase()}</a>`
        ).join('');
        const statusTags = [research.status, ...(research.extraStatuses || [])]
            .filter(Boolean)
            .map(status => `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-theme-text text-white">${status}</span>`)
            .join('');
        
        return `
            <div class="bg-white px-3 sm:px-4 pt-2 pb-4 rounded-xl paper-card hover:bg-theme-surface/50 w-full overflow-hidden" style="max-width: 100%; box-sizing: border-box;">
                <div class="flex flex-col gap-3 w-full" style="max-width: 100%; box-sizing: border-box;">
                    <div class="w-full flex items-center justify-center overflow-hidden" style="max-width: 100%; width: 100%; box-sizing: border-box;">
                        <img src="${research.image}" class="w-full h-auto max-h-64 object-contain transition duration-500" style="max-width: 100% !important; width: 100% !important; height: auto !important; display: block; box-sizing: border-box;">
                    </div>
                    <div class="w-full min-w-0" style="max-width: 100%; box-sizing: border-box;">
                        <h3 class="text-base sm:text-lg font-bold text-theme-text mb-2 leading-tight break-words">
                            <a href="${research.links.pdf || '#'}" class="hover:text-theme-primary transition">${research.title}</a>
                        </h3>
                        <p class="text-theme-subtext text-xs sm:text-sm mb-3 leading-relaxed break-words">
                            ${research.authors}
                        </p>
                        <div class="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
                            ${statusTags}
                            ${linksHTML}
                        </div>
                        <details class="group/abstract">
                            <summary class="text-xs font-bold text-theme-primary cursor-pointer select-none flex items-center gap-1 hover:opacity-80 mb-2">
                                <span>Abstract</span>
                                <svg class="w-3 h-3 group-open/abstract:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </summary>
                            <div class="text-sm text-theme-text/80 bg-theme-surface p-3 rounded border border-theme-border leading-relaxed">
                                ${research.abstract}
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 渲染项目
function renderProjects() {
    const projectContainer = document.querySelector('#projects .grid');
    if (!projectContainer || !CONFIG.projects) return;
    
    projectContainer.innerHTML = CONFIG.projects.map(project => {
        return `
            <div class="bg-white border border-theme-border rounded-xl overflow-hidden hover:border-theme-primary transition duration-300 group shadow-sm w-full">
                <div class="h-48 bg-slate-900 overflow-hidden relative">
                    <img src="${project.image}" class="w-full h-full object-cover opacity-90" style="max-width: 100%; height: auto;">
                </div>
                <div class="p-5">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="font-bold text-base text-theme-text">${project.name}</h3>
                        <span class="text-[10px] font-mono bg-theme-surface px-2 py-1 rounded text-theme-subtext border border-theme-border">${project.tags}</span>
                    </div>
                    <p class="text-sm text-theme-subtext mb-4 line-clamp-2 leading-relaxed">
                        ${project.description}
                    </p>
                    <a href="${project.link}" class="text-xs font-bold text-theme-primary hover:underline">VIEW PROJECT -></a>
                </div>
            </div>
        `;
    }).join('');
}

// 渲染教育背景
function renderEducation() {
    if (!CONFIG.education) return;
    
    // 找到教育部分的容器
    const sections = document.querySelectorAll('section');
    let eduSection = null;
    sections.forEach(section => {
        const h2 = section.querySelector('h2');
        if (h2 && h2.textContent.includes('Education')) {
            eduSection = section;
        }
    });
    
    if (eduSection) {
        const container = eduSection.querySelector('.space-y-3');
        if (container) {
            container.innerHTML = CONFIG.education.map(edu => {
                const dateRange = edu.endDate 
                    ? `${edu.startDate} - ${edu.endDate}${edu.expected ? ' (expected)' : ''}`
                    : edu.startDate;
                
                return `
                    <div class="grid grid-cols-1 sm:grid-cols-[13rem_minmax(0,1fr)] gap-1 sm:gap-4 text-sm text-theme-text w-full">
                        <span class="font-mono text-theme-subtext text-xs mt-0.5 whitespace-nowrap">${dateRange}</span>
                        <div class="flex-1 min-w-0 break-words">
                            <span class="font-medium">${edu.degree}</span>
                            <span class="text-theme-subtext">, ${edu.school}</span>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }
}

// 渲染页脚
function renderFooter() {
    const footer = CONFIG.footer;
    
    // 更新版权信息
    const copyrightEl = document.querySelector('footer .copyright-text') || document.querySelector('footer .text-xs.text-theme-subtext.font-mono');
    if (copyrightEl) {
        copyrightEl.textContent = footer.copyright;
    }

    const lastUpdatedEl = document.querySelector('footer .last-updated');
    if (lastUpdatedEl && footer.lastUpdated) {
        lastUpdatedEl.textContent = footer.lastUpdated;
    }
    
    // 更新页脚链接（只显示配置中存在的）
    const footerLinks = document.querySelectorAll('footer a');
    if (footerLinks.length > 0 && CONFIG.contact) {
        footerLinks.forEach((link) => {
            const text = link.textContent.trim().toUpperCase();
            if (text.includes('EMAIL') && CONFIG.contact.email) {
                link.href = `mailto:${CONFIG.contact.email}`;
                link.style.display = '';
            } else if (text.includes('GITHUB') && CONFIG.contact.github) {
                link.href = CONFIG.contact.github;
                link.style.display = '';
            } else if (text.includes('LINKEDIN') && CONFIG.contact.linkedin) {
                link.href = CONFIG.contact.linkedin;
                link.style.display = '';
            } else if (text.includes('SCHOLAR') && CONFIG.contact.scholar) {
                link.href = CONFIG.contact.scholar;
                link.style.display = '';
            } else {
                // 如果配置中没有，隐藏该链接
                link.style.display = 'none';
            }
        });
    }
}

// 更新页面标题
function updatePageTitle() {
    const titleEl = document.querySelector('title');
    if (titleEl) {
        titleEl.textContent = `${CONFIG.personal.name} | ${CONFIG.personal.title}`;
    }
}

// 页面加载完成后自动渲染
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPage);
} else {
    renderPage();
}
