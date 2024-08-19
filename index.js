const summaryList = document.getElementsByClassName('summary-list')[0];

async function getData() {
  const res = await fetch('./data.json');
  const data = await res.json();
  data.forEach((item, idx) => createSummaryItem(item, idx))
}

function createSummaryItem(item, idx) {
  const { category, score, icon } = item;

  const html = `
  <div class="summary-item accent-${idx + 1}">
            <div class="flex-group">
              <img src="${icon}" alt="item-icon"/>
              <h3 class="summary-item-title">${category}</h3>
            </div>
            <p class="summary-score"><span>${score}</span> / 100</p>
          </div>
  `
  summaryList.innerHTML += html
}

getData()