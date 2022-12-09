import './style.css';

function component() {
    const content = document.createElement('div');
    content.id = 'content';
    const bgImg = document.createElement('div');
    const slogan = document.createElement('div');
    slogan.classList.add('slogan');
    const bgImg_h1 = document.createElement('h1');
    bgImg_h1.innerHTML = 'An exquisite taste with every bite';
    slogan.appendChild(bgImg_h1);
    bgImg.appendChild(slogan);
    bgImg.classList.add('mainImg');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML = `Chez Gustave`;

    const menu = document.createElement('div');
    menu.classList.add('menu');
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

    menu.appendChild(logo);
    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);
    menu.appendChild(menuItem4);

    bgImg.appendChild(menu);

    content.appendChild(bgImg);
    return content;
}

document.body.appendChild(component());
