
let search=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =()=>{
search.classList.toggle('active');
menu.classList.remove('active');

}
let menu=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick =()=>{
menu.classList.toggle('active');
search.classList.remove('active');

}

window.onscroll = ()=>{
  menu.classList.remove('active');
  search.classList.remove('active');
}












var swiper = new Swiper(".product-slider", {
    loop:true,
     spaceBetween: 20,
     autoplay: {
       delay:7500,
       disableOnInteraction: false,
     },
     centeredSlides:true,
   
   breakpoints: {
     0: {
       slidesPerView: 1,
       
     },
     768: {
       slidesPerView: 2,
        
     },
     1020: {
       slidesPerView: 3,
       
     },
   },
 });