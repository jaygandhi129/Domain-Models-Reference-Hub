document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const domainCards = document.getElementById('domainCards');
    const dynamicSections = document.getElementById('dynamicSections');
    const searchBox = document.getElementById('searchBox');

    // Build sidebar
    function renderSidebar() {
        sidebar.innerHTML = domainModelsData.map(model => `
            <a href="#${model.id}" class="sidebar-link" data-id="${model.id}">
                ${model.name}
            </a>
        `).join('');
    }

    // Build home page cards
    function renderHomeCards(filter = '') {
        const filtered = domainModelsData.filter(model =>
            model.name.toLowerCase().includes(filter) ||
            (model.tags && model.tags.join(' ').toLowerCase().includes(filter))
        );

        domainCards.innerHTML = filtered.map(model => `
            <div class="card">
                <h3>${model.name}</h3>
                <p>${model.description}</p>
                <a href="#${model.id}" class="view-link" data-id="${model.id}">View Details</a>
            </div>
        `).join('');
    }

    // Build dynamic sections
    function renderDynamicSections() {
        dynamicSections.innerHTML = domainModelsData.map(model => `
            <section id="${model.id}" class="content-section">
                <h2 class="page-title">${model.name}</h2>
                <p>${model.description}</p>
                ${model.entities ? `<h3>Entities</h3><ul>${model.entities.map(e => `<li>${e}</li>`).join('')}</ul>` : ''}
                ${model.concepts ? `<h3>Concepts</h3><ul>${model.concepts.map(c => `<li>${c}</li>`).join('')}</ul>` : ''}
                ${model.links ? `<h3>Links</h3><ul>${model.links.map(l => `<li><a href="${l.url}" target="_blank">${l.label}</a></li>`).join('')}</ul>` : ''}
            </section>
        `).join('');
    }

    // Handle clicks (sidebar + cards)
    function attachEvents() {
        document.body.addEventListener('click', e => {
            if (e.target.matches('[data-id]')) {
                e.preventDefault();
                const id = e.target.getAttribute('data-id');
                showSection(id);
            }
        });

        searchBox.addEventListener('input', () => {
            renderHomeCards(searchBox.value.toLowerCase());
        });
    }

    // Show a given section
    function showSection(id) {
        document.querySelectorAll('.content-section').forEach(sec => {
            sec.classList.remove('active');
        });
        const target = document.getElementById(id);
        if (target) target.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Init
    const navSections = [...NAVIGATION_SECTIONS];
navSections.push({
  title: "Domain Models",
  links: DOMAIN_MODELS.map(model => ({ id: model.id, title: model.name }))
});
// Render navSections in sidebar

    renderSidebar();
    renderHomeCards();
    renderDynamicSections();
    attachEvents();
});
