import displayHome from "./home";
import displayMenu from "./menu";
import displayAbout from "./about";

const navigation = () => {
    const headerContainer = document.createElement('div');
    const headerLogoContainer = document.createElement('div');
    const headerLogo = document.createElement('h1');
    const headerNav = document.createElement('ul');
    const socialContainer = document.createElement('div');

    const Home = document.createElement('li');
    const Menu = document.createElement('li');
    const About = document.createElement('li');

    const twitter = document.createElement('i');
    const instagram = document.createElement('i');
    const facebook = document.createElement('i');

    twitter.setAttribute('class', 'fa-brands fa-twitter');
    instagram.setAttribute('class', 'fa-brands fa-instagram');
    facebook.setAttribute('class', 'fa-brands fa-facebook');


    headerContainer.classList.add('header-container');
    headerLogoContainer.classList.add('header-logo-container');
    headerLogo.classList.add('header-logo');
    headerNav.classList.add('header-nav');
    socialContainer.classList.add('socials');

    Home.classList.add('link');
    Menu.classList.add('link');
    About.classList.add('link');

    Home.textContent = 'Home';
    Menu.textContent = 'Menu';
    About.textContent = 'About';

    headerLogo.textContent = 'Chez Gustave';
    headerNav.appendChild(Home);
    headerNav.appendChild(Menu);
    headerNav.appendChild(About);

    socialContainer.appendChild(twitter);
    socialContainer.appendChild(instagram);
    socialContainer.appendChild(facebook);

    headerLogoContainer.appendChild(headerLogo);
    headerContainer.appendChild(headerNav);
    headerContainer.appendChild(headerLogoContainer);
    headerContainer.appendChild(socialContainer);

    displayPages(Home, displayHome);
    displayPages(Menu, displayMenu);
    displayPages(About, displayAbout);

    return headerContainer;
}

const main = () => {
    const main = document.createElement('div');
    main.id = 'main';
    return main;
}

const displayPages = (navlink, page) => {
    const links = Array.from(document.querySelectorAll('.link'));
    navlink.addEventListener('click', (e) => {
        if (!e.target.classList.contains('active')) {
            links.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
            const main = document.getElementById('main');
            if (main.hasChildNodes()) {
                main.removeChild(main.firstChild);
                page();
            }

        }
        e.target.classList.remove('active');
    });
}

const initialize = () => {
    const content = document.getElementById('content');
    content.appendChild(navigation());
    content.appendChild(main());
    displayHome();

}

export default initialize;
