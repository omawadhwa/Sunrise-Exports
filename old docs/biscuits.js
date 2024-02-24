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