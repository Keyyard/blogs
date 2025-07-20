---
title: "SEO Guide for Quartz Blogs"
description: "Complete guide to SEO optimization and meta data configuration for Quartz static sites"
tags: [seo, quartz, blogging, meta-data, guide]
draft: false
date: 2025-07-21
---

# SEO Guide for Quartz Blogs

This is a comprehensive guide for optimizing SEO on Quartz static sites. If you're using Quartz to publish your digital garden or blog, this guide will help you maximize your search engine visibility.

## Quick Start Checklist

- [ ] Use descriptive `title` under 60 characters
- [ ] Add `description` for search results (155-160 chars)
- [ ] Add `socialDescription` for social media
- [ ] Use relevant `tags` instead of keywords
- [ ] Set proper `date` for content
- [ ] Create internal links between articles
- [ ] Submit sitemap to Google Search Console

## Quartz-Supported Frontmatter for SEO

### Essential SEO Fields
```yaml
title: "Your Page Title"
description: "Page description for search results" 
socialDescription: "Different description for social media previews"
socialImage: "path/to/your-image.webp"
tags: [relevant, keywords, as, tags]
```

### URL and Navigation
```yaml
permalink: /custom-url-path
aliases: ["/old-url", "/another-alias"]
```

### Publishing Control
```yaml
draft: false  # true = hidden from search engines
date: 2024-11-07
```

## SEO Best Practices for Quartz

### 1. Title Optimization
- Keep titles under 60 characters
- Include your main keyword
- Make it descriptive and engaging

### 2. Description Optimization  
- Use both `description` and `socialDescription`
- `description`: For search engine results (155-160 chars)
- `socialDescription`: For social media previews (can be longer)

### 3. Social Images
- Use `socialImage` field (not `ogImage`)
- Quartz auto-generates OG images if you don't specify one
- Images should be 1200x630 pixels for best results

### 4. Tags as Keywords
- Use `tags` instead of `keywords` field
- Quartz creates tag pages automatically
- Tags help with internal linking and topic organization

## Manual SEO Enhancements

For custom meta tags or structured data, you would need to:
1. Modify Quartz's Head component
2. Add custom meta tag generation
3. Or use external tools after site generation

## Why Author/Keywords Don't Work
Quartz doesn't process `author` or `keywords` frontmatter fields. Instead:
- Use `tags` for keyword-like functionality
- Add author info in your content or site configuration
- Rely on Quartz's automatic meta tag generation

## Advanced Tips

### Internal Linking Strategy
Link related articles together to help search engines understand your content structure:
```markdown
Check out my thoughts on [writing better content](/writing-things/how-keyyard-writes-an-article).
```

### Tag Optimization
Create topic clusters using tags:
- Group related content under the same tags
- Use specific tags like `money-mindset` instead of just `money`
- Tags automatically create listing pages at `/tags/tag-name`

### URL Structure
- Use clean, descriptive URLs
- Avoid special characters in filenames
- Organize content in logical folders

### Google Search Console Setup
1. Verify your site ownership
2. Submit your sitemap: `https://blogs.keyyard.xyz/sitemap.xml`
3. Monitor indexing status with `site:blogs.keyyard.xyz`
4. Check for crawl errors and fix them

## Common Mistakes to Avoid

1. **Don't use `keywords` field** - Use `tags` instead
2. **Don't use `ogImage`** - Use `socialImage` or let Quartz auto-generate
3. **Don't forget internal linking** - Link your articles together
4. **Don't skip descriptions** - Always add both `description` and `socialDescription`

## Resources

- [Quartz Documentation](https://quartz.jzhao.xyz/)
- [Google Search Console](https://search.google.com/search-console)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards)
