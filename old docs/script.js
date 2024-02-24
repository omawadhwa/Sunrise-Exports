//search bar

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
    
// }

// //search bar data
// const options = [
//   {
//     name: "Daltfresh",
//     url: "http://tripadvisor.com",
//   },
//   {
//     name: "Zamit",
//     url: "https://delicious.com",
//   },
//   {
//     name: "Lotlux",
//     url: "https://soundcloud.com",
//   },
//   {
//     name: "Tresom",
//     url: "https://earthlink.net",
//   },
//   {
//     name: "Holdlamis",
//     url: "https://drupal.org",
//   },
//   {
//     name: "Sonsing",
//     url: "https://pinterest.com",
//   },
//   {
//     name: "Rank",
//     url: "https://mapy.cz",
//   },
//   {
//     name: "Namfix",
//     url: "https://businesswire.com",
//   },
//   {
//     name: "Fix San",
//     url: "http://ocn.ne.jp",
//   },
//   {
//     name: "Biodex",
//     url: "https://symantec.com",
//   },
//   {
//     name: "Stringtough",
//     url: "https://blogs.com",
//   },
//   {
//     name: "Vagram",
//     url: "http://tripadvisor.com",
//   },
//   {
//     name: "Konklux",
//     url: "https://intel.com",
//   },
//   {
//     name: "Pannier",
//     url: "https://cyberchimps.com",
//   },
//   {
//     name: "Flowdesk",
//     url: "http://about.me",
//   },
//   {
//     name: "Tres-Zap",
//     url: "https://nba.com",
//   },
//   {
//     name: "Zoolab",
//     url: "http://yandex.ru",
//   },
//   {
//     name: "Subin",
//     url: "https://apache.org",
//   },
//   {
//     name: "Greenlam",
//     url: "http://columbia.edu",
//   },
//   {
//     name: "Bigtax",
//     url: "http://nih.gov",
//   },
// ];

// const optionsEL = document.querySelector(".options");
// options.forEach((i) => {
//   let option = document.createElement("a");
//   option.classList.add(
//     "option",
//     "h-12",
//     "bg-gray-700",
//     "text-white",
//     "block",
//     "border-b",
//     "border-gray-600",
//     "flex",
//     "items-center",
//     "px-4"
//   );
//   option.innerHTML = i.name;
//   option.setAttribute("href", i.url);
//   optionsEL.appendChild(option);
// });
// //search bar data
// //search function
// const optionsEls = document.querySelectorAll(".option");
//       const searchEl = document.querySelector(".search");

//       const search = () =>
//         optionsEls.forEach(
//           (e) =>
//             (e.style.display =
//               e.innerHTML.toUpperCase().indexOf(searchEl.value.toUpperCase()) >
//               -1
//                 ? ""
//                 : "none")
//         );
// //search function
//search bar

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
  });
var swiper = new Swiper(".home-products-slider", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        991: {
          slidesPerView: 3,
          
        },
      },
  });

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
function scrollToTop(){
  window.scrollTo(0, 0);
}

  function loader(){
    document.querySelector('.loader').style.display = 'none';

  }

  function fadeOut(){
    setInterval(loader,3000);
  }

  window.onload = fadeOut;