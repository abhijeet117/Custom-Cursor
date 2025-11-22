let main = document.querySelector('#main');
let crsr = document.querySelector('.cursor');



main.addEventListener('mousemove', function(elem){
    crsr.style.top = elem.y+'px';
    crsr.style.left = elem.x+ 'px';
    crsr.style.opacity = '1'
})
