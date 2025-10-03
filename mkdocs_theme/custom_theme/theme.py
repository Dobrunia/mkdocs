from mkdocs.theme import Theme

class CustomTheme(Theme):
    name = 'custom_theme'
    static_templates = {
        '404',
        'sitemap',
    }
