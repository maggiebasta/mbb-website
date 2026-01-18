// Blog posts loaded from posts/ folder structure
let blogPosts = [];
let chartData = [];

// Load all posts from manifest
async function loadPostsFromManifest() {
    const manifestRes = await fetch('posts/manifest.json');
    const slugs = await manifestRes.json();
    
    const posts = await Promise.all(slugs.map(async (slug) => {
        const postRes = await fetch(`posts/${slug}/post.json`);
        const post = await postRes.json();
        
        // Resolve image path
        if (post.image && !post.image.startsWith('http') && !post.image.startsWith('data:')) {
            post.image = `posts/${slug}/${post.image}`;
        }
        post.slug = slug;
        return post;
    }));
    
    return posts;
}

// Load individual post content
async function loadPostContent(slug) {
    const contentRes = await fetch(`posts/${slug}/content.html`);
    return await contentRes.text();
}

// Load chart data for a post
async function loadChartData(slug) {
    const dataRes = await fetch(`posts/${slug}/data/chart-data.json`);
    return await dataRes.json();
}

// Render posts on homepage
function renderPosts(posts) {
    const postsGrid = document.getElementById('posts-grid');
    if (!postsGrid) return;

    postsGrid.innerHTML = posts.map((post, index) => `
        <a href="post.html?slug=${post.slug}" class="post-card" style="animation-delay: ${index * 0.1}s">
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <div class="post-meta">
                <span class="post-category">${post.category}</span>
                <span class="post-date">${post.date}</span>
            </div>
            <h2 class="post-title">${post.title}</h2>
            <p class="post-excerpt">${post.excerpt}</p>
        </a>
    `).join('');
}

// Render individual post
async function renderPost(posts) {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        window.location.href = 'index.html';
        return;
    }

    document.title = `${post.title} - MBB Blog`;

    const articleHeader = document.querySelector('.article-header .container');
    if (articleHeader) {
        articleHeader.innerHTML = `
            <div class="article-category">${post.category}</div>
            <h1 class="article-title">${post.title}</h1>
            <div class="article-meta">
                <span>${post.date}</span>
            </div>
        `;
    }

    const articleContent = document.querySelector('.article-content');
    if (articleContent) {
        const content = await loadPostContent(slug);
        articleContent.innerHTML = content;
        
        // Load chart data if this post has charts
        if (post.hasChart) {
            chartData = await loadChartData(slug);
            setTimeout(renderCharts, 100);
        }
    }
}

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Initialize
async function init() {
    try {
        blogPosts = await loadPostsFromManifest();
        
        if (document.getElementById('posts-grid')) {
            renderPosts(blogPosts);
        }

        if (document.querySelector('.article-content')) {
            await renderPost(blogPosts);
        }
    } catch (error) {
        console.error('Failed to load posts:', error);
        const postsGrid = document.getElementById('posts-grid');
        if (postsGrid) {
            postsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: #8a8a8a;">
                    <p style="margin-bottom: 1rem;">Unable to load posts. If viewing locally, run a server:</p>
                    <code style="background: #1a1a1a; padding: 0.5rem 1rem; border-radius: 4px; color: #00ffff;">python -m http.server 8000</code>
                </div>
            `;
        }
    }
}

init();

// Chart rendering functions
function renderCharts() {
    if (chartData.length === 0) return;
    renderChart('chart-exit-value', 'exitValue', 'Exit Value ($B)', 100);
    renderChart('chart-peak-value', 'peakValue', 'Peak Value ($B)', 250);
}

function renderChart(containerId, valueKey, yLabel, maxY) {
    const container = document.getElementById(containerId);
    if (!container || chartData.length === 0) return;

    const width = 800;
    const height = 500;
    const padding = { top: 40, right: 40, bottom: 80, left: 80 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const maxMonths = 120;
    const xScale = (months) => padding.left + (months / maxMonths) * chartWidth;
    const yScale = (value) => padding.top + chartHeight - (value / maxY) * chartHeight;

    let svg = `
        <svg viewBox="0 0 ${width} ${height}" class="themed-chart">
            <defs>
                <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#00ffff;stop-opacity:0.1"/>
                    <stop offset="100%" style="stop-color:#ff6b35;stop-opacity:0.1"/>
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <!-- Background -->
            <rect x="0" y="0" width="${width}" height="${height}" fill="#0a0a0a"/>
            <rect x="${padding.left}" y="${padding.top}" width="${chartWidth}" height="${chartHeight}" fill="url(#gridGrad)" opacity="0.3"/>
            
            <!-- Grid lines -->
    `;

    // Y-axis grid lines
    for (let i = 0; i <= 5; i++) {
        const y = padding.top + (i / 5) * chartHeight;
        const value = maxY - (i / 5) * maxY;
        svg += `<line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="#2a2a2a" stroke-width="1"/>`;
        svg += `<text x="${padding.left - 15}" y="${y + 5}" text-anchor="end" fill="#8a8a8a" font-family="'EB Garamond', serif" font-size="14">$${Math.round(value)}B</text>`;
    }

    // X-axis grid lines
    for (let i = 0; i <= 4; i++) {
        const x = padding.left + (i / 4) * chartWidth;
        const months = Math.round((i / 4) * maxMonths);
        svg += `<line x1="${x}" y1="${padding.top}" x2="${x}" y2="${height - padding.bottom}" stroke="#2a2a2a" stroke-width="1"/>`;
        svg += `<text x="${x}" y="${height - padding.bottom + 25}" text-anchor="middle" fill="#8a8a8a" font-family="'EB Garamond', serif" font-size="14">${months}</text>`;
    }

    // Axis labels
    svg += `<text x="${width / 2}" y="${height - 20}" text-anchor="middle" fill="#e8e8e8" font-family="'Crimson Pro', serif" font-size="16" font-style="italic">Months to $100M ARR</text>`;
    svg += `<text x="25" y="${height / 2}" text-anchor="middle" fill="#e8e8e8" font-family="'Crimson Pro', serif" font-size="16" font-style="italic" transform="rotate(-90, 25, ${height / 2})">${yLabel}</text>`;

    // Trend line
    const sortedData = [...chartData].sort((a, b) => a.months - b.months);
    const n = sortedData.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    sortedData.forEach(d => {
        sumX += d.months;
        sumY += d[valueKey];
        sumXY += d.months * d[valueKey];
        sumXX += d.months * d.months;
    });
    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
    
    const trendX1 = 18;
    const trendX2 = 108;
    const trendY1 = slope * trendX1 + intercept;
    const trendY2 = slope * trendX2 + intercept;
    
    svg += `<line x1="${xScale(trendX1)}" y1="${yScale(Math.max(0, trendY1))}" x2="${xScale(trendX2)}" y2="${yScale(Math.max(0, trendY2))}" stroke="#00d4aa" stroke-width="2" stroke-dasharray="8,4" opacity="0.6"/>`;
    svg += `<text x="${xScale(trendX2) + 10}" y="${yScale(Math.max(0, trendY2))}" fill="#00d4aa" font-family="'EB Garamond', serif" font-size="12" opacity="0.8">Trend</text>`;

    // Data points
    chartData.forEach((d, i) => {
        const x = xScale(d.months);
        const y = yScale(d[valueKey]);
        const color = d.months < 40 ? '#00ffff' : d.months < 70 ? '#00d4aa' : '#ff6b35';
        const value = d[valueKey];
        
        svg += `
            <g class="data-point" data-company="${d.company}" data-value="${value}" data-months="${d.months}">
                <circle class="point-glow" cx="${x}" cy="${y}" r="16" fill="${color}" opacity="0"/>
                <circle class="point-outer" cx="${x}" cy="${y}" r="8" fill="${color}" opacity="0.9"/>
                <circle class="point-inner" cx="${x}" cy="${y}" r="4" fill="#0a0a0a"/>
                <text class="point-label" x="${x}" y="${y - 20}" text-anchor="middle" fill="#ffffff" font-family="'Crimson Pro', serif" font-size="14" font-weight="600" opacity="0">${d.company}</text>
                <text class="point-value" x="${x}" y="${y - 35}" text-anchor="middle" fill="${color}" font-family="'EB Garamond', serif" font-size="13" opacity="0">$${value.toFixed(1)}B · ${d.months}mo</text>
            </g>
        `;
    });

    svg += `</svg>`;
    container.innerHTML = svg;
    
    // Add hover interactions
    container.querySelectorAll('.data-point').forEach(point => {
        point.style.cursor = 'pointer';
        point.addEventListener('mouseenter', () => {
            point.querySelector('.point-glow').style.opacity = '0.3';
            point.querySelector('.point-glow').style.filter = 'blur(8px)';
            point.querySelector('.point-outer').style.transform = 'scale(1.2)';
            point.querySelector('.point-outer').style.transformOrigin = 'center';
            point.querySelector('.point-outer').style.transformBox = 'fill-box';
            point.querySelector('.point-label').style.opacity = '1';
            point.querySelector('.point-value').style.opacity = '1';
        });
        point.addEventListener('mouseleave', () => {
            point.querySelector('.point-glow').style.opacity = '0';
            point.querySelector('.point-outer').style.transform = 'scale(1)';
            point.querySelector('.point-label').style.opacity = '0';
            point.querySelector('.point-value').style.opacity = '0';
        });
    });
}

// Add subtle parallax effect to hero on scroll
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const hero = document.querySelector('.hero-title');
            if (hero) {
                const scrolled = window.pageYOffset;
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                hero.style.opacity = 1 - (scrolled * 0.002);
            }
            ticking = false;
        });
        ticking = true;
    }
});
