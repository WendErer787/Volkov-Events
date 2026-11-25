export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;

        li.addEventListener('mouseover', () => {
            li.title = li.textContent;
        });

        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';

    a.addEventListener(
        'click',
        (event) => {
            event.preventDefault();
            a.textContent += ' ' + a.href;
        },
        { once: true },
    );

    document.body.appendChild(a);
}

export function createList() {
    const ul = document.createElement('ul');

    const firstLi = document.createElement('li');
    firstLi.textContent = 'Пункт';
    ul.appendChild(firstLi);

    ul.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'LI') {
            target.textContent += '!';
        }
    });

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    button.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.appendChild(newLi);
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
