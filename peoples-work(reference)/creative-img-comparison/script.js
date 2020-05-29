let a = document.querySelector('.range'),

    b = document.querySelector('.line'),

    c = document.querySelector('.inner.n2'),

    d = document.querySelector('.notice'),

    e = document.querySelector('.close'),

    f = document.querySelector('section'),

    g = document.querySelectorAll('.close > span');

if (localStorage.getItem('base') == 1) {
    d.remove();
    f.removeAttribute('class');
};

a.oninput = _ => {
    c.style.clipPath = `polygon(0 0,0 100%,${a.value}% 100%,${a.value}% 0)`;
    b.style.left = `${a.value}%`;
};
window.onkeydown = (e) => {
    if (e.keyCode == 39) {
        a.value++;
        c.style.clipPath = `polygon(0 0,0 100%,${a.value}% 100%,${a.value}% 0)`;
        b.style.left = `${a.value}%`;
    }
    else if (e.keyCode == 37) {
        a.value--;
        c.style.clipPath = `polygon(0 0,0 100%,${a.value}% 100%,${a.value}% 0)`;
        b.style.left = `${a.value}%`;
    }
};
window.onload = _ => {
    d.style.top = "50%";
    d.style.opacity = "1";
};
e.onclick = _ => {
    localStorage.setItem('base', 1)
    g.forEach(a => { a.className = "actt" });
    d.style.transitionDelay = "0s";
    d.style.transition = ".75s";
    d.style.opacity = '0';
    d.style.top = '25%';
    f.removeAttribute('class');
    setTimeout(_ => d.remove(), 1000);
};