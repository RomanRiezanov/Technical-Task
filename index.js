const GIT_HUB_API_URL = 'https://api.github.com/users/jdsecurity/repos';
const tableTag = document.getElementById('table');

async function getRepo() {
    const response = await fetch('https://api.github.com/users/jdsecurity/repos');
    const users = response.json();

    return users;
}


const fragment = new DocumentFragment();

const users = getRepo().then(users => {
    for (let user of users) {
        const fragment = new DocumentFragment();
        const tr = document.createElement('tr');
        fragment.appendChild(tr);
        const name = user.name;
        const language = user.language;
        const description = user.description;
        const created = user.created_at;
        const published = user.pushed_at;
        const updated = user.updated_at;

        const td1 = document.createElement('td');
        td1.innerHTML = name;
        fragment.appendChild(td1);
        const td2 = document.createElement('td');
        td2.innerHTML = language;
        fragment.appendChild(td2);
        const td3 = document.createElement('td');
        td3.innerHTML = description;
        fragment.appendChild(td3);
        const td4 = document.createElement('td');
        td4.innerHTML = created;
        fragment.appendChild(td4);
        const td5 = document.createElement('td');
        td5.innerHTML = published;
        fragment.appendChild(td5);
        const td6 = document.createElement('td');
        td6.innerHTML = updated;
        fragment.appendChild(td6);

        tableTag.appendChild(fragment);
    }
})

