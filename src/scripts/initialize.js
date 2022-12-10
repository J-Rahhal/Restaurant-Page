import createSlogan from "./home";


const navigation = () => {
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML = `Chez Gustave`;

    const menu = document.createElement('div');
    const menuItem1 = document.createElement('a');
    const menuItem2 = document.createElement('a');
    const menuItem3 = document.createElement('a');
    const menuItem4 = document.createElement('a');
    menuItem1.href = '#';
    menuItem2.href = '#';
    menuItem3.href = '#';

    menuItem1.innerHTML = 'Home';
    menuItem2.innerHTML = 'Menu';
    menuItem3.innerHTML = 'About';
    menuItem4.innerHTML = 'Contact';

    menu.classList.add('menu');

    menu.appendChild(logo);
    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);
    menu.appendChild(menuItem4);
    return menu;
}

const main = () => {
    const homeSlogan = document.createElement('div');
    homeSlogan.classList.add('slogan');
    homeSlogan.appendChild(createSlogan());
    return homeSlogan;
}

const initialize = () => {
    const content = document.getElementById('content');
    content.appendChild(navigation());
    content.appendChild(main());

}

export default initialize;
