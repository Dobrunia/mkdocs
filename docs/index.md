# Welcome to Custom MkDocs Documentation

<div class="hero-section">
    <h1 class="hero-title">Modern Documentation</h1>
    <p class="hero-subtitle">Built with custom theme, PostCSS, and GitHub Actions</p>
    <a href="getting-started.md" class="hero-cta">Get Started</a>
</div>

## Features

<div class="card">
    <h3 class="card-title">🎨 Custom Theme</h3>
    <p class="card-content">Beautiful, responsive design with custom HTML, CSS, and JavaScript components.</p>
</div>

<div class="card">
    <h3 class="card-title">⚡ Fast Build</h3>
    <p class="card-content">Optimized build pipeline with PostCSS, HTML validation, and asset minification.</p>
</div>

<div class="card">
    <h3 class="card-title">🚀 Auto Deploy</h3>
    <p class="card-content">Automatic deployment to GitHub Pages with every push to main branch.</p>
</div>

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/Dobrunia/mkdocs.git
cd mkdocs

# Install dependencies
pip install mkdocs mkdocs-material
```

### Development

```bash
# Start development server
mkdocs serve

# Build static site
mkdocs build
```

### Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

## Project Structure

```
mkdocs/
├── .github/workflows/     # GitHub Actions workflows
├── assets/                 # Static assets (CSS, JS, images)
├── docs/                  # Documentation content
├── mkdocs_theme/          # Custom theme files
├── mkdocs.yml            # MkDocs configuration
└── README.md             # Project documentation
```

## Technologies Used

- **MkDocs** - Static site generator
- **Custom Theme** - HTML/CSS/JS template
- **PostCSS** - CSS processing and optimization
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Hosting platform
