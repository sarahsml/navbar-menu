const bar = document.querySelector('.fa-bars')
const menu = document.querySelector('.menu')

bar.addEventListener("click",()=>{
     menu.classlist.toggle("show_menu");
});