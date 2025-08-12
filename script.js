const homeView = document.getElementById('home-view');
const detailView = document.getElementById('detail-view');
const cardsContainer = document.getElementById('cards-container');
const searchInput = document.getElementById('search-input');

const detailName = document.getElementById('detail-name');
const detailDescription = document.getElementById('detail-description');
const detailComponents = document.getElementById('detail-components');
const detailReferences = document.getElementById('detail-references');
const backBtn = document.getElementById('back-btn');

let domainData = data;
let filteredData = data;
console.log(domainData);


renderCards(filteredData);

function renderCards(data) {
  cardsContainer.innerHTML = '';
  if (data.length === 0) {
    cardsContainer.innerHTML = '<p style="text-align:center; color:#777;">No domain models found.</p>';
    return;
  }
  data.forEach(model => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${model.name}</h3><p>${model.description}</p>`;
    card.addEventListener('click', () => showDetail(model.id));
    cardsContainer.appendChild(card);
  });
}

function showDetail(id) {
  const model = domainData.find(m => m.id === id);
  if (!model) return;

  detailName.textContent = model.name;
  detailDescription.textContent = model.description;

  // Model Types table
  const tableBody = document.querySelector('#model-types-table tbody');
  tableBody.innerHTML = '';
  if (model.modelTypes && model.modelTypes.length > 0) {
    model.modelTypes.forEach(type => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${type.name}</td>
        <td><a href="${type.url}" target="_blank" rel="noopener">${type.url}</a></td>
      `;
      tableBody.appendChild(tr);
    });
  } else {
    tableBody.innerHTML = '<tr><td colspan="2">No model types available.</td></tr>';
  }

  // References list
  const refList = document.getElementById('detail-references');
  refList.innerHTML = '';
  if (model.references && model.references.length > 0) {
    model.references.forEach(ref => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${ref.url}" target="_blank" rel="noopener">${ref.title}</a>`;
      refList.appendChild(li);
    });
  } else {
    refList.innerHTML = '<li>No references available.</li>';
  }

  homeView.classList.add('hidden');
  detailView.classList.remove('hidden');
}



backBtn.addEventListener('click', () => {
  detailView.classList.add('hidden');
  homeView.classList.remove('hidden');
});

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  filteredData = domainData.filter(model => 
    model.name.toLowerCase().includes(term) ||
    model.description.toLowerCase().includes(term)
  );
  renderCards(filteredData);
});

// Hide detail view, show home on page load (optional safety)
document.getElementById('detail-view').classList.add('hidden');
document.getElementById('home-view').classList.remove('hidden');
