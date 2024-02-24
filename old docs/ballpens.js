// let calcScrollValue = () =>{
//   let scrollProgress = document.getElementById("bttb");
//   let progressValue = document.getElementById("progress");
//   let pos = document.documentElement.scrollTop;
//   console.log(pos);
//   let calcHeight = 
//     document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   let scrollValue = Math.round((pos * 100) / calcHeight);
//   if (pos > 100){
//     scrollProgress.style.display = "grid";
//   }
//   else{
//     scrollProgress.style.display = "none";
//   }
//   scrollProgress.addEventListener("click",() => {
//     document.documentElement.scrollTop = 0;
//   });
//   scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
// };

// window.onscroll = calcScrollValue;
// window.onload = calcScrollValue;

function scrollToTop(){
  window.scrollTo(0, 0);
}
function scrollToPack(){
  window.scrollTo(0,12800);
}


// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
    
// }

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// var swiper = new Swiper(".home-slider", {
//     pagination: {
//       el: ".swiper-pagination",
//       type: "progressbar",
//       clickable:true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     loop:true,
//   });
// var swiper = new Swiper(".home-products-slider", {
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//       loop: true,
//       grabCursor: true,
//       spaceBetween: 20,
//       breakpoints: {
//         0: {
//           slidesPerView: 1,
          
//         },
//         768: {
//           slidesPerView: 2,
          
//         },
//         991: {
//           slidesPerView: 3,
          
//         },
//       },
//   });

//   function body1(){
//     document.querySelector('.body').style.display = 'none';
//   }
//   function fadeOutBody(){
//     setInterval(body,0);
//   }
  
//   window.onload = fadeOutBody;

// function body2(){
//   document.querySelector('.body').style.display = 'visible';
// }
// function fadeInBody(){
//   setInterval(body2,3000);
// }

// window.onload = fadeInBody;


  function loader(){
    document.querySelector('.loader').style.display = 'none';

  }

  function fadeOut(){
    setInterval(loader,3000);
  }

  window.onload = fadeOut;