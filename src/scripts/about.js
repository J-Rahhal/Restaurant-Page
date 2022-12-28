const aboutpage = () => {
    const aboutContainer = document.createElement('div');
    const info = document.createElement('div');
    const title = document.createElement('h1');
    const open = document.createElement('div');
    const close = document.createElement('div');
    const timeContainer = document.createElement('div');

    const firstSpan = document.createElement('span');
    const secondSpan = document.createElement('span');
    const thirdSpan = document.createElement('span');
    const fourthSpan = document.createElement('span');
    const fifthSpan = document.createElement('span');
    const sixthSpan = document.createElement('span');

    title.textContent = 'Opening Hours';
    firstSpan.textContent = 'Sunday to Tuesday';
    secondSpan.textContent = '09:00';
    thirdSpan.textContent = '00:00';
    fourthSpan.textContent = 'Friday to Saturday';
    fifthSpan.textContent = '11:00';
    sixthSpan.textContent = '21:00';

    aboutContainer.classList.add('about-container');
    info.classList.add('info');
    title.classList.add('title');
    timeContainer.classList.add('time-container');
    open.classList.add('times');
    close.classList.add('times');
    firstSpan.classList = 'days';
    secondSpan.classList = 'hours';
    thirdSpan.classList = 'hours';
    fourthSpan.classList = 'days';
    fifthSpan.classList = 'hours';
    sixthSpan.classList = 'hours';

    open.appendChild(firstSpan);
    open.appendChild(secondSpan);
    open.appendChild(thirdSpan);
    close.appendChild(fourthSpan);
    close.appendChild(fifthSpan);
    close.appendChild(sixthSpan);

    info.appendChild(title);
    timeContainer.appendChild(open);
    timeContainer.appendChild(close);
    info.appendChild(timeContainer);
    aboutContainer.appendChild(info);
    return aboutContainer;
};

const displayAbout = () => {
    const main = document.getElementById('main');
    main.appendChild(aboutpage());
};

export default displayAbout;
