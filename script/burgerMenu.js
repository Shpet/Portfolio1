let butt  = document.querySelector('.menu_btn'),
    menu = document.querySelector('.menu_block ul');

butt.addEventListener('click', (e)=>{
    e.preventDefault();
    butt.classList.toggle('menu_btn_active');
    menu.classList.toggle('menu_active');
});