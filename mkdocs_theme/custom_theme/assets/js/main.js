// Main JavaScript for custom MkDocs theme

document.addEventListener('DOMContentLoaded', function () {
  // Initialize theme functionality
  initSmoothScrolling();
  initCodeHighlighting();
  initMobileMenu();
  initSearch();
});

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

// Code highlighting and copy functionality
function initCodeHighlighting() {
  const codeBlocks = document.querySelectorAll('pre code');

  codeBlocks.forEach((block) => {
    // Add copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    copyButton.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: #667eea;
            color: white;
            border: none;
            padding: 0.25rem 0.5rem;
            border-radius: 3px;
            font-size: 0.75rem;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

    const pre = block.parentElement;
    pre.style.position = 'relative';
    pre.appendChild(copyButton);

    // Show copy button on hover
    pre.addEventListener('mouseenter', () => {
      copyButton.style.opacity = '1';
    });

    pre.addEventListener('mouseleave', () => {
      copyButton.style.opacity = '0';
    });

    // Copy functionality
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(block.textContent);
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  });
}

// Mobile menu functionality
function initMobileMenu() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Create mobile menu toggle
  const toggle = document.createElement('button');
  toggle.className = 'mobile-menu-toggle';
  toggle.innerHTML = '☰';
  toggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
    `;

  const brand = navbar.querySelector('.navbar-brand');
  brand.appendChild(toggle);

  const menu = navbar.querySelector('.navbar-menu');

  // Toggle menu on mobile
  toggle.addEventListener('click', () => {
    menu.classList.toggle('is-active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      menu.classList.remove('is-active');
    }
  });

  // Responsive styles
  const style = document.createElement('style');
  style.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: block !important;
            }
            
            .navbar-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: #667eea;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                flex-direction: column;
                padding: 1rem;
            }
            
            .navbar-menu.is-active {
                display: flex;
            }
            
            .navbar-start {
                flex-direction: column;
                width: 100%;
            }
            
            .navbar-item {
                width: 100%;
                text-align: center;
                padding: 0.75rem;
            }
        }
    `;
  document.head.appendChild(style);
}

// Simple search functionality
function initSearch() {
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search documentation...';
  searchInput.className = 'search-input';
  searchInput.style.cssText = `
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #e9ecef;
        border-radius: 4px;
        margin-bottom: 1rem;
        font-size: 0.9rem;
    `;

  const sidebar = document.querySelector('.sidebar-content');
  if (sidebar) {
    sidebar.insertBefore(searchInput, sidebar.firstChild);

    // Simple search implementation
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase();
      const navLinks = document.querySelectorAll('.nav-link');

      navLinks.forEach((link) => {
        const text = link.textContent.toLowerCase();
        const navItem = link.closest('.nav-item, .nav-section');

        if (text.includes(query) || query === '') {
          navItem.style.display = 'block';
        } else {
          navItem.style.display = 'none';
        }
      });
    });
  }
}

// Utility functions
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

// Performance optimization
const debouncedResize = debounce(() => {
  // Handle resize events
}, 250);

window.addEventListener('resize', debouncedResize);
