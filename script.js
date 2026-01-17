// Sample blog posts data
const blogPosts = [
    {
        id: 4,
        title: "The Race to $100M ARR",
        category: "Analysis",
        date: "Jan 16, 2026",
        excerpt: "There is actually no meaningful correlation between how quickly a generational startup gets to $100M in ARR and the magnitude of its eventual success.",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect fill='%230a0a0a' width='800' height='450'/%3E%3Ctext x='400' y='200' text-anchor='middle' fill='%2300ffff' font-family='serif' font-size='48' font-style='italic'%3E$100M%3C/text%3E%3Ctext x='400' y='260' text-anchor='middle' fill='%23ff6b35' font-family='serif' font-size='24'%3EARR%3C/text%3E%3Ccircle cx='200' cy='350' r='40' fill='none' stroke='%2300d4aa' stroke-width='2' opacity='0.5'/%3E%3Ccircle cx='600' cy='100' r='60' fill='none' stroke='%23d4380d' stroke-width='2' opacity='0.5'/%3E%3C/svg%3E",
        content: `
            <p>So, it turns out there is actually no meaningful correlation between how quickly a generational startup gets to $100M in ARR and the magnitude of its eventual success.</p>

            <p>Decided to pull this data because every time you turn a corner in SF, there is another VC debating whether the "triple-triple-double-double-double" paradigm is dead because a handful of ripping AI startups are sucking the air out the room for everyone else. That would suggest that nuking to $100M overnight is the only way to win.</p>

            <p>But if the past is any indicator, that's probably… not true.</p>

            <div id="chart-exit-value" class="chart-container"></div>

            <p>There have always been companies that blow traditional growth benchmarks out of the water and ones that grow more steadily over time. (We've all seen the "Fastest to $100M" charts). But when you actually compare that speed to the size of eventual outcomes, there is really no correlation. In fact, if you look at the value of these companies at their respective peaks, there is actually a slightly inverse relationship between speed and success.</p>

            <div id="chart-peak-value" class="chart-container"></div>

            <h2>Takeaways</h2>

            <p><strong>(1) $100M is a milestone (albeit an important one), but it's not the final destination.</strong> We are talking about truly generational companies. At that level of scale, the real north star looks more like ten billion than hundreds of millions, and in case you forgot, $100M is just 1% of $10B.</p>

            <p><strong>(2) Speed is not the only playbook.</strong> Time to $100M isn't destiny, and some of the biggest outcomes took longer to get there while others around them grew faster.</p>

            <p>To be abundantly clear, getting to $100M that quickly is an extremely impressive feat and indicative of companies building incredible products. That should not be discounted, and we will 100% continue to look for these kinds of investments. Too far in the other extreme is also true (limping to $100M with decelerating growth is probably not… great). But none of that detracts from the fact that it is a long road to success in this industry. There are many ways up the mountain, and it takes time to build something enduring!</p>
        `
    },
    {
        id: 1,
        title: "On Building in Public",
        category: "Thoughts",
        date: "Jan 15, 2026",
        excerpt: "Reflections on the journey of sharing your work openly and the unexpected benefits that come from transparency.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80&sat=-100&con=30",
        content: `
            <p>There's something liberating about building in public. It's the act of sharing your progress, your failures, and your learnings as they happen—not after you've achieved some arbitrary milestone of "success."</p>

            <h2>Why It Matters</h2>
            <p>When you build in public, you create accountability. You transform abstract ideas into concrete commitments. The simple act of sharing what you're working on makes it real in a way that private projects never quite achieve.</p>

            <p>But more importantly, you create connections. People resonate with the journey, not just the destination. They want to see the messy middle, the pivots, the moments of doubt.</p>

            <h2>The Unexpected Benefits</h2>
            <p>I've found that building in public leads to:</p>
            <ul>
                <li>Serendipitous connections with like-minded builders</li>
                <li>Feedback that saves you months of wasted effort</li>
                <li>A documented journey you can look back on</li>
                <li>Opportunities you never could have predicted</li>
            </ul>

            <blockquote>"The best time to start was yesterday. The second best time is now."</blockquote>

            <h2>Getting Started</h2>
            <p>You don't need a massive audience or a perfect platform. Start small:</p>
            <ul>
                <li>Share one thing you learned today</li>
                <li>Post a screenshot of what you're building</li>
                <li>Write about a problem you're trying to solve</li>
            </ul>

            <p>The magic isn't in the size of your audience—it's in the consistency of showing up and the authenticity of your voice.</p>
        `
    },
    {
        id: 2,
        title: "The Art of Deep Work",
        category: "Productivity",
        date: "Jan 10, 2026",
        excerpt: "In a world of constant distractions, the ability to focus deeply has become a superpower. Here's how to cultivate it.",
        image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
        content: `
            <p>Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that's increasingly rare and therefore increasingly valuable in our distraction-filled world.</p>

            <h2>The Cost of Context Switching</h2>
            <p>Every time you switch tasks, there's a cognitive cost. Your brain doesn't instantly transition—it leaves "attention residue" behind. This residue makes it harder to focus on the new task and reduces your cognitive performance.</p>

            <p>Research shows that it can take 23 minutes to fully refocus after a distraction. Yet most knowledge workers check their email or messages every 6 minutes. The math doesn't add up.</p>

            <h2>Building a Deep Work Practice</h2>
            <p>Here's what's worked for me:</p>

            <h3>1. Schedule Deep Work Sessions</h3>
            <p>Block out specific times for deep work. Treat these blocks as sacred—no meetings, no email, no exceptions. Start with 90-minute sessions and build from there.</p>

            <h3>2. Create Rituals</h3>
            <p>Develop a routine that signals to your brain it's time to focus. This might be:</p>
            <ul>
                <li>Making a specific type of coffee</li>
                <li>Putting on focus music</li>
                <li>Moving to a specific location</li>
                <li>Doing a brief meditation</li>
            </ul>

            <h3>3. Eliminate Digital Distractions</h3>
            <p>Use tools to block distracting websites. Put your phone in another room. Close unnecessary browser tabs. The goal is to make distraction difficult enough that you can overcome the impulse.</p>

            <blockquote>"Clarity about what matters provides clarity about what does not." - Cal Newport</blockquote>

            <h2>The Compound Effect</h2>
            <p>The magic of deep work isn't in any single session—it's in the compound effect of consistent, focused effort over time. Small improvements compound into extraordinary results.</p>

            <p>Your ability to do deep work will determine your ability to create work that matters. It's worth the effort to protect and cultivate this skill.</p>
        `
    },
    {
        id: 3,
        title: "Minimalism and Technology",
        category: "Life",
        date: "Jan 5, 2026",
        excerpt: "How adopting a minimalist approach to technology has improved my focus, creativity, and overall well-being.",
        image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&q=80",
        content: `
            <p>We live in an age of digital abundance. More apps, more notifications, more content than we could consume in a lifetime. But abundance isn't always better.</p>

            <h2>The Paradox of Choice</h2>
            <p>Having too many options can be paralyzing. Every app you install, every platform you join, every subscription you maintain adds cognitive overhead—even if you're not actively using them.</p>

            <p>Minimalism in technology isn't about deprivation. It's about being intentional. It's about choosing the tools that serve your goals and removing everything else.</p>

            <h2>My Digital Minimalism Experiment</h2>
            <p>Last year, I decided to radically simplify my digital life. Here's what I did:</p>

            <h3>Apps</h3>
            <ul>
                <li>Removed all social media apps from my phone</li>
                <li>Kept only essential communication tools</li>
                <li>Deleted apps I hadn't used in 3 months</li>
            </ul>

            <h3>Content Consumption</h3>
            <ul>
                <li>Unsubscribed from all newsletters except 3</li>
                <li>Unfollowed most accounts on remaining platforms</li>
                <li>Set specific times for content consumption</li>
            </ul>

            <h3>Notifications</h3>
            <ul>
                <li>Disabled all non-essential notifications</li>
                <li>Kept only calls and messages from key contacts</li>
                <li>Embraced asynchronous communication</li>
            </ul>

            <h2>The Results</h2>
            <p>The impact was immediate and profound:</p>
            <ul>
                <li>More time for deep work and creative projects</li>
                <li>Reduced anxiety and FOMO</li>
                <li>Better sleep quality</li>
                <li>Improved relationships (more present in conversations)</li>
                <li>Clearer thinking and decision-making</li>
            </ul>

            <blockquote>"Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry</blockquote>

            <h2>Start Small</h2>
            <p>You don't need to do everything at once. Start with one change:</p>
            <ul>
                <li>Remove one app from your home screen</li>
                <li>Unsubscribe from 5 newsletters</li>
                <li>Turn off one category of notifications</li>
            </ul>

            <p>Notice how it feels. Then do it again. Small changes compound into transformative results.</p>
        `
    }
];

// Load posts on homepage
function loadPosts() {
    const postsGrid = document.getElementById('posts-grid');
    if (!postsGrid) return;

    postsGrid.innerHTML = blogPosts.map((post, index) => `
        <a href="post.html?id=${post.id}" class="post-card" style="animation-delay: ${index * 0.1}s">
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

// Load individual post
function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = blogPosts.find(p => p.id === postId);

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
        articleContent.innerHTML = post.content;
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
if (document.getElementById('posts-grid')) {
    loadPosts();
}

if (document.querySelector('.article-content')) {
    loadPost();
    setTimeout(renderCharts, 100);
}

// Chart data for the $100M ARR analysis
const chartData = [
    { company: "Splunk", months: 74, exitValue: 6.9, peakValue: 36.1 },
    { company: "ServiceNow", months: 72, exitValue: 8.7, peakValue: 235.0 },
    { company: "Docusign", months: 108, exitValue: 19.82, peakValue: 61.1 },
    { company: "Shopify", months: 86, exitValue: 9.17, peakValue: 205.9 },
    { company: "UiPath", months: 24, exitValue: 6.7, peakValue: 45.3 },
    { company: "Box", months: 88, exitValue: 2.11, peakValue: 5.9 },
    { company: "Bill", months: 105, exitValue: 25.2, peakValue: 34.1 },
    { company: "Hubspot", months: 80, exitValue: 1.94, peakValue: 41.43 },
    { company: "Mongo", months: 90, exitValue: 6.6, peakValue: 38.1 },
    { company: "Twilio", months: 62, exitValue: 5.6, peakValue: 68.5 },
    { company: "Slack", months: 36, exitValue: 25.2, peakValue: 32.0 },
    { company: "Datadog", months: 66, exitValue: 43.5, peakValue: 60.7 },
    { company: "Gitlab", months: 42, exitValue: 6.1, peakValue: 18.9 },
    { company: "Elastic", months: 42, exitValue: 9.7, peakValue: 16.8 },
    { company: "Snowflake", months: 52, exitValue: 54.3, peakValue: 116.0 },
    { company: "HashiCorp", months: 50, exitValue: 2.83, peakValue: 17.6 },
    { company: "Confluent", months: 32, exitValue: 9.1, peakValue: 23.8 },
    { company: "Rubrik", months: 18, exitValue: 18.1, peakValue: 18.1 },
    { company: "Deel", months: 20, exitValue: 12.0, peakValue: 12.0 },
    { company: "Wiz", months: 18, exitValue: 32.0, peakValue: 32.0 },
    { company: "Ramp", months: 24, exitValue: 13.0, peakValue: 13.0 },
    { company: "Canva", months: 96, exitValue: 26.0, peakValue: 26.0 },
    { company: "Zoom", months: 50, exitValue: 91.1, peakValue: 160.0 }
];

function renderCharts() {
    renderChart('chart-exit-value', 'exitValue', 'Exit Value ($B)', 60);
    renderChart('chart-peak-value', 'peakValue', 'Peak Value ($B)', 250);
}

function renderChart(containerId, valueKey, yLabel, maxY) {
    const container = document.getElementById(containerId);
    if (!container) return;

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
