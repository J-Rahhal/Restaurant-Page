
const createSlogan = () => {
    const homeSlogan = document.createElement('div');
    const sloganContainer = document.createElement('div');
    const slogan = document.createElement('h1');
    slogan.innerText = 'An exquisite taste with every bite';
    sloganContainer.appendChild(slogan);
    sloganContainer.classList.add('slogan-text');
    return sloganContainer;
}

export default createSlogan;
