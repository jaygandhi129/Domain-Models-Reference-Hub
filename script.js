// app.js - Main application logic

class DomainModelsWiki {
    constructor() {
        this.currentPage = 'home';
        this.data = domainModelsData; // Must be defined elsewhere
        this.init();
    }

    init() {
        this.renderNavigation();
        this.renderContent();
        this.attachEventListeners();
        this.setActivePage(this.currentPage);
    }

    renderNavigation() {
        const navigationContainer = document.getElementById('navigation');
        const navHTML = this.data.navigation.map(section => `
            <div class="nav-section">
                <h3>${section.section}</h3>
                <ul class="nav-links">
                    ${section.links.map(link => `
                        <li>
                            <a href="#${link.id}" 
                               class="nav-link" 
                               data-page="${link.id}">
                                ${link.icon ? `<span class="nav-icon">${link.icon}</span> ` : ''}
                                ${link.title}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
        
        navigationContainer.innerHTML = navHTML;
    }

    renderContent() {
        const contentContainer = document.getElementById('content');
        const contentHTML = Object.keys(this.data.pages).map(pageId => {
            const page = this.data.pages[pageId];
            return `<section id="${pageId}" class="content-section" style="display:none;">
                        ${this.renderPage(page)}
                    </section>`;
        }).join('');
        
        contentContainer.innerHTML = contentHTML;
    }

    renderPage(page) {
        switch (page.type) {
            case 'overview':
                return this.renderOverviewPage(page);
            case 'domain-model':
                return this.renderDomainModelPage(page);
            case 'documentation':
                return this.renderDocumentationPage(page);
            default:
                return `<h2 class="page-title">${page.title}</h2>
                        <p>Content type not recognized.</p>`;
        }
    }

    renderOverviewPage(page) {
        return `
            <h2 class="page-title">${page.title}</h2>
            <p>${page.description || ''}</p>
            ${page.sections ? page.sections.map(sec => `
                <div class="overview-section">
                    <h3>${sec.heading}</h3>
                    <p>${sec.content}</p>
                </div>
            `).join('') : ''}
        `;
    }

    renderDomainModelPage(page) {
        return `
            <h2 class="page-title">${page.title}</h2>
            <p><strong>Description:</strong> ${page.description || ''}</p>
            ${page.reference ? `<p><strong>Reference:</strong> <a href="${page.reference}" target="_blank">${page.reference}</a></p>` : ''}
            ${page.details ? `<div class="model-details">${page.details}</div>` : ''}
        `;
    }

    renderDocumentationPage(page) {
        return `
            <h2 class="page-title">${page.title}</h2>
            ${page.sections ? page.sections.map(sec => `
                <div class="doc-section">
                    <h3>${sec.heading}</h3>
                    <p>${sec.content}</p>
                </div>
            `).join('') : `<p>${page.content || ''}</p>`}
        `;
    }

    attachEventListeners() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const pageId = link.dataset.page;
                this.setActivePage(pageId);
            });
        });
    }

    setActivePage(pageId) {
        this.currentPage = pageId;

        // Hide all pages
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // Show selected page
        const activeSection = document.getElementById(pageId);
        if (activeSection) {
            activeSection.style.display = 'block';
        }

        // Update active navigation link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            }
        });

        // Update URL hash without reloading
        history.replaceState(null, '', `#${pageId}`);
    }
}

// Initialize app after DOM load
document.addEventListener('DOMContentLoaded', () => {
    window.app = new DomainModelsWiki();
});
