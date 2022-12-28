const menupage = () => {
    const menuContainer = document.createElement('div');
    const menuHeader = document.createElement('div');
    const menuLogo = document.createElement('h1');
    const menuBody = document.createElement('div');
    const bodyLayer = document.createElement('div');
    const firstSpan = document.createElement('span');
    const secondSpan = document.createElement('span');
    const thirdSpan = document.createElement('span');
    const fourthSpan = document.createElement('span');
    const fifthSpan = document.createElement('span');
    const sixthSpan = document.createElement('span');
    const numbers = document.createElement('div');
    const prices = document.createElement('div');
    const items = document.createElement('div');

    const firstheader = document.createElement('span');
    const secondheader = document.createElement('span');
    const thirdheader = document.createElement('span');
    const fourthheader = document.createElement('span');
    const fifthheader = document.createElement('span');
    const sixthheader = document.createElement('span');

    const firstprice = document.createElement('span');
    const secondprice = document.createElement('span');
    const thirdprice = document.createElement('span');
    const fourthprice = document.createElement('span');
    const fifthprice = document.createElement('span');
    const sixthprice = document.createElement('span');

    firstSpan.textContent = '01.';
    secondSpan.textContent = '02.';
    thirdSpan.textContent = '03.';
    fourthSpan.textContent = '04.';
    fifthSpan.textContent = '05.';
    sixthSpan.textContent = '06.';

    firstheader.textContent = 'Teriyaki Veggie Bowl';
    secondheader.textContent = 'Steak frites';
    thirdheader.textContent = 'Truffle Chicken Boursin';
    fourthheader.textContent = 'Bucatini al Persto';
    fifthheader.textContent = 'Mushroom Swiss Burger';
    sixthheader.textContent = 'Philly Steak';

    firstprice.textContent = '$ 15';
    secondprice.textContent = '$ 20';
    thirdprice.textContent = '$ 25';
    fourthprice.textContent = '$ 30';
    fifthprice.textContent = '$ 35';
    sixthprice.textContent = '$ 35';


    firstheader.classList.add('menu-item');
    secondheader.classList.add('menu-item');
    thirdheader.classList.add('menu-item');
    fourthheader.classList.add('menu-item');
    fifthheader.classList.add('menu-item');
    sixthheader.classList.add('menu-item');

    firstprice.classList.add('price');
    secondprice.classList.add('price');
    thirdprice.classList.add('price');
    fourthprice.classList.add('price');
    fifthprice.classList.add('price');
    sixthprice.classList.add('price');

    numbers.classList.add('numbers');
    items.classList.add('items');
    prices.classList.add('prices');

    menuContainer.classList.add('menu-container');
    menuHeader.classList.add('menu-header');
    menuLogo.classList.add('menu-logo');
    menuBody.classList.add('menu-body');
    bodyLayer.classList.add('menu-layer');



    menuLogo.textContent = "Gustave's Menu";
    menuHeader.appendChild(menuLogo);
    menuContainer.appendChild(menuHeader);

    numbers.appendChild(firstSpan);
    numbers.appendChild(secondSpan);
    numbers.appendChild(thirdSpan);
    numbers.appendChild(fourthSpan);
    numbers.appendChild(fifthSpan);
    numbers.appendChild(sixthSpan);

    items.appendChild(firstheader);
    items.appendChild(secondheader);
    items.appendChild(thirdheader);
    items.appendChild(fourthheader);
    items.appendChild(fifthheader);
    items.appendChild(sixthheader);

    prices.appendChild(firstprice);
    prices.appendChild(secondprice);
    prices.appendChild(thirdprice);
    prices.appendChild(fourthprice);
    prices.appendChild(fifthprice);
    prices.appendChild(sixthprice);

    bodyLayer.appendChild(numbers);
    bodyLayer.appendChild(items);
    bodyLayer.appendChild(prices);
    menuBody.appendChild(bodyLayer);
    menuContainer.appendChild(menuBody);
    return menuContainer;

}

const displayMenu = () => {
    const main = document.getElementById('main');
    main.appendChild(menupage());
}

export default displayMenu;
