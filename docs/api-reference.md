# API Reference

This section provides detailed information about the custom theme's API and configuration options.

## Theme Configuration

### Basic Configuration

```yaml
theme:
  name: custom_theme
  custom_dir: mkdocs_theme/custom_theme
  static_templates:
    - 404.html
    - sitemap.xml
```

### CSS and JavaScript

```yaml
extra_css:
  - assets/css/main.css
  - assets/css/custom.css

extra_javascript:
  - assets/js/main.js
```

## Template Variables

### Global Variables

| Variable                  | Description               |
| ------------------------- | ------------------------- |
| `config.site_name`        | Site name from mkdocs.yml |
| `config.site_description` | Site description          |
| `config.site_author`      | Site author               |
| `page.title`              | Current page title        |
| `page.content`            | Rendered page content     |
| `nav`                     | Navigation structure      |

### Page Variables

| Variable             | Description                |
| -------------------- | -------------------------- |
| `page.meta.author`   | Page author (if specified) |
| `page.meta.date`     | Page date (if specified)   |
| `page.toc`           | Table of contents          |
| `page.canonical_url` | Canonical URL              |

## CSS Classes

### Layout Classes

- `.site-header` - Main site header
- `.navbar` - Navigation bar
- `.main-content` - Main content area
- `.sidebar` - Sidebar navigation
- `.site-footer` - Site footer

### Content Classes

- `.page-title` - Page title styling
- `.page-meta` - Page metadata
- `.page-body` - Main content body
- `.card` - Card component
- `.hero-section` - Hero section

### Navigation Classes

- `.nav-section` - Navigation section
- `.nav-section-title` - Section title
- `.nav-link` - Navigation link
- `.nav-link.active` - Active navigation link

## JavaScript API

### Main Functions

```javascript
// Initialize theme functionality
initSmoothScrolling();
initCodeHighlighting();
initMobileMenu();
initSearch();
```

### Event Handlers

- `DOMContentLoaded` - Initialize theme
- `click` - Smooth scrolling for anchor links
- `input` - Search functionality
- `resize` - Responsive behavior

## Custom Components

### Hero Section

```html
<div class="hero-section">
  <h1 class="hero-title">Title</h1>
  <p class="hero-subtitle">Subtitle</p>
  <a href="#" class="hero-cta">Call to Action</a>
</div>
```

### Card Component

```html
<div class="card">
  <h3 class="card-title">Card Title</h3>
  <p class="card-content">Card content</p>
</div>
```

## Markdown Extensions

### Code Blocks

````markdown
```python
def hello_world():
    print("Hello, World!")
```
````

### Tables

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |

### Admonitions

!!! note "Note"
This is a note admonition.

!!! warning "Warning"
This is a warning admonition.

## Customization Examples

### Adding Custom CSS

```css
/* Custom styles */
.my-custom-class {
  color: #667eea;
  font-weight: bold;
}
```

### Adding Custom JavaScript

```javascript
// Custom functionality
document.addEventListener('DOMContentLoaded', function () {
  // Your custom code here
});
```

## Performance Optimization

### CSS Optimization

- Use CSS custom properties for theming
- Minimize CSS specificity
- Use efficient selectors
- Leverage CSS Grid and Flexbox

### JavaScript Optimization

- Use event delegation
- Implement debouncing for scroll events
- Lazy load non-critical scripts
- Minimize DOM queries

### Build Optimization

- Enable HTML minification
- Compress CSS and JavaScript
- Optimize images
- Use CDN for external resources
