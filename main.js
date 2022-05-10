
function openMenu() {
    document.getElementById('aside').style.transform = 'none';
    document.getElementById('main').style.transform = 'translateX(300px)';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('close').style.display = 'block';
    document.getElementsByClassName('wrapper')[0].style.overflow = 'hidden'
    main.style.overflowY = 'hidden';
}


function closeMenu() {
    if(window.innerWidth > 768) return
    document.getElementById('aside').style.transform = 'translateX(-400px)';
    document.getElementById('main').style.transform = 'translateX(0px)';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('close').style.display = 'none';
    main.style.overflowY = 'auto';
    document.getElementsByClassName('wrapper')[0].style.overflow = 'auto'
}

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };


function animate() {
    document.querySelectorAll('.fade-in').forEach(element => {
        const section = element.closest('section')
        if (elementInView(section, 1.25)) {
            element.style.top = ('0')
            element.style.opacity = ('1')
        }
        else if (elementOutofView(section)) {
            element.style.top = ('100px')
            element.style.opacity = ('0')
        }
    })

}


document.getElementById('main').addEventListener('scroll', animate);
window.addEventListener('load', animate)