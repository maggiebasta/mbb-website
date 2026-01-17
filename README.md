# MBB Blog

A minimalist, aesthetic blog website inspired by modern design principles.

## Features

- Clean, minimalist design with bold typography
- High contrast aesthetic (black on white)
- Smooth animations and transitions
- Fully responsive layout
- Sample blog posts included
- Easy to customize

## Getting Started

Simply open `index.html` in your web browser to view your blog.

## File Structure

```
mbb-website/
├── index.html          # Homepage with blog post listings
├── post.html           # Individual blog post template
├── style.css           # All styling
├── script.js           # Blog posts data and interactions
└── README.md           # This file
```

## Customization

### Adding New Blog Posts

Edit `script.js` and add new post objects to the `blogPosts` array:

```javascript
{
    id: 4,
    title: "Your Post Title",
    category: "Category",
    date: "Jan 16, 2026",
    excerpt: "A brief description of your post...",
    image: "https://images.unsplash.com/...",
    content: `
        <p>Your post content here...</p>
        <h2>Subheading</h2>
        <p>More content...</p>
    `
}
```

### Changing Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --color-bg: #ffffff;           /* Background color */
    --color-text: #000000;         /* Text color */
    --color-text-muted: #666666;   /* Muted text */
    --color-accent: #da462c;       /* Accent color (links, highlights) */
    --color-border: #e0e0e0;       /* Border color */
}
```

### Changing Fonts

The site currently uses:
- **Space Grotesk** for headlines
- **Inter** for body text

To change fonts, update the Google Fonts link in both HTML files and the CSS variables:

```css
:root {
    --font-primary: 'Your Headline Font', sans-serif;
    --font-secondary: 'Your Body Font', sans-serif;
}
```

### Updating Site Name

Replace "MBB" in:
- `index.html` (logo and title)
- `post.html` (logo and title)

### Customizing Images

Replace the Unsplash image URLs in `script.js` with your own images or use a different image service.

## Hosting

This is a static website that can be hosted anywhere:

- **GitHub Pages**: Push to a repository and enable Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **Any web server**: Upload all files to your server

## Design Inspiration

This design draws inspiration from:
- Bold, editorial typography
- Minimalist luxury aesthetics
- High contrast, clean layouts
- Subtle, sophisticated animations

## Browser Support

Works in all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## License

Feel free to use and modify this template for your personal blog.
