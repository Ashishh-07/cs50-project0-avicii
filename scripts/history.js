function createTable() {
  let table = document.createElement('table');
  table.className = 'table';

  let caption = document.createElement('caption');
  caption.textContent = "Tim's Life Events";
  table.appendChild(caption);

  let thead = document.createElement('thead');
  table.appendChild(thead);

  let tbody = document.createElement('tbody');
  table.appendChild(tbody);

  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let year = document.createElement('th');
  year.setAttribute('scope', 'row');
  year.textContent = 'Year';
  tr.appendChild(year);

  let event = document.createElement('th');
  event.setAttribute('scope', 'row');
  event.textContent = 'Event';
  tr.appendChild(event);

  let historySection = document.querySelector('.history-section');
  historySection.appendChild(table);
}

async function fetchData() {
  let response = await fetch(
    'https://my-json-server.typicode.com/giorgiPapava/cs50-project0-avicii/db'
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let json = await response.json();
    let dataList = await json.events;

    createTable();

    let table = document.querySelector('.table');

    dataList.forEach((data) => {
      let tr = document.createElement('tr');

      let th = document.createElement('th');
      th.setAttribute('scope', 'row');
      th.textContent = data.date;
      tr.appendChild(th);

      let td = document.createElement('td');
      td.textContent = data.event;
      tr.appendChild(td);

      table.tBodies[0].appendChild(tr);
    });
  }
}

fetchData();
