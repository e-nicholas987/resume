
const openMenu = () => {
    document.getElementById('aside').style.transform = 'none';
    document.getElementById('main').style.transform = 'translateX(300px)';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('close').style.display = 'block';
    main.style.overflowY = 'hidden';
    document.body.style.overflow = 'hidden';
}

const closeMenu = () => {
    document.getElementById('aside').style.transform = 'translateX(-400px)';
    document.getElementById('main').style.transform = 'translateX(0)';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('close').style.display = 'none';
    main.style.overflowY = 'auto';
    document.body.style.overflow = 'auto';
}