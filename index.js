const GIT_HUB_API_URL = 'https://api.github.com/users/jdsecurity/repos';
const tableTag = document.getElementById('table');

async function getRepo() {
    const response = await fetch('https://api.github.com/users/jdsecurity/repos');
    const users = response.json();

    return users;
}

let sortedRows;

const fragment = new DocumentFragment();

const users = getRepo().then(users => {
    for (let user of users) {
        const fragment = new DocumentFragment();
        const tr = document.createElement('tr');
        const name = user.name;
        const language = user.language;
        const description = user.description;
        const created = user.created_at;
        const published = user.pushed_at;
        const updated = user.updated_at;

        const td1 = document.createElement('td');
        td1.innerHTML = name;
        tr.appendChild(td1);
        const td2 = document.createElement('td');
        td2.innerHTML = language;
        tr.appendChild(td2);
        const td3 = document.createElement('td');
        td3.innerHTML = description;
        tr.appendChild(td3);
        const td4 = document.createElement('td');
        td4.innerHTML = created;
        tr.appendChild(td4);
        const td5 = document.createElement('td');
        td5.innerHTML = published;
        tr.appendChild(td5);
        const td6 = document.createElement('td');
        td6.innerHTML = updated;
        tr.appendChild(td6);

        fragment.appendChild(tr);
        tableTag.appendChild(fragment);
    }

})

const sortChange = () => {
    let sortedRows = Array.from(table.rows);

    if(document.getElementById('title_select').value == "A-Z"){
        sortedRows = sortedRows
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[0].innerHTML.toLowerCase() > rowB.cells[0].innerHTML.toLowerCase() ? 1 : -1);
  
      table.tBodies[0].append(...sortedRows)
    } else {
        sortedRows = sortedRows.slice(1)
        .sort((rowA, rowB) => rowA.cells[0].innerHTML.toLowerCase() > rowB.cells[0].innerHTML.toLowerCase() ? -1 : 1);
        table.tBodies[0].append(...sortedRows);
    }
}