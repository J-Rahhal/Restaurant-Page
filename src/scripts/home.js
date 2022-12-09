import '../styles/style.css';
const createHomepage = (header) => {
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
    bgImg.appendChild(header);
    content.appendChild(bgImg);
    return content;
}

export default createHomepage;
