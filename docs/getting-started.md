# Getting Started

Welcome to the Custom MkDocs Documentation! This guide will help you get up and running quickly.

## Prerequisites

Before you begin, make sure you have the following installed:

- Python 3.7 or higher
- pip (Python package installer)
- Git

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Dobrunia/mkdocs.git
cd mkdocs
```

### 2. Install Dependencies

```bash
# Install MkDocs and required plugins
pip install mkdocs mkdocs-material

# Install additional dependencies for custom theme
pip install pymdown-extensions
```

### 3. Verify Installation

```bash
mkdocs --version
```

## Development

### Start Development Server

```bash
mkdocs serve
```

This will start a local development server at `http://127.0.0.1:8000` with live reloading enabled.

### Build Static Site

```bash
mkdocs build
```

This creates a `site/` directory with the static HTML files.

## Configuration

The main configuration is in `mkdocs.yml`:

```yaml
site_name: Custom MkDocs Documentation
site_description: A modern documentation site
site_author: Documentation Team

theme:
  name: custom_theme
  custom_dir: mkdocs_theme/custom_theme

extra_css:
  - assets/css/main.css
  - assets/css/custom.css

extra_javascript:
  - assets/js/main.js
```

## Customization

### Adding Pages

1. Create a new Markdown file in the `docs/` directory
2. Add it to the navigation in `mkdocs.yml`

### Styling

- Main styles: `assets/css/main.css`
- Custom styles: `assets/css/custom.css`
- JavaScript: `assets/js/main.js`

### Theme Files

- Base template: `mkdocs_theme/custom_theme/base.html`
- Page template: `mkdocs_theme/custom_theme/main.html`

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
# Build the site
mkdocs build

# Deploy to GitHub Pages
mkdocs gh-deploy
```

## Troubleshooting

### Common Issues

1. **Theme not found**: Make sure the `mkdocs_theme/` directory exists
2. **CSS not loading**: Check that the paths in `mkdocs.yml` are correct
3. **Build errors**: Run `mkdocs build --strict` to see detailed error messages

### Getting Help

- Check the [MkDocs documentation](https://www.mkdocs.org/)
- Review the project's [GitHub repository](https://github.com/Dobrunia/mkdocs)
- Open an issue for bugs or feature requests
