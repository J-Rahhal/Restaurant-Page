
const homepage = () => {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    const SloganContainer = document.createElement('div');
    const Slogan = document.createElement('h1');
    const paragraph = document.createElement('p');

    SloganContainer.classList.add('slogan-container');
    Slogan.classList.add('slogan');
    paragraph.classList.add('slogan-paragraph');

    Slogan.textContent = "Chez Gustave"
    paragraph.textContent = "An exquisite taste with every bite";

    SloganContainer.appendChild(Slogan);
    SloganContainer.appendChild(paragraph);
    homeContainer.append(SloganContainer);

    return homeContainer;
}

const displayHome = () => {
    const main = document.getElementById('main');
    main.appendChild(homepage());
}

export default displayHome;
