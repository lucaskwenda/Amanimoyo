const spinner = document.getElementById('spinner')
const loadingContent = document.querySelector('.loading-content')
const btnScrollToTop = document.getElementById("btnScrolToTop");
const btnScrollIA = document.querySelector(".btnScrolIA");


function handleSpinner(){    
  if(loadingContent){
    loadingContent.style.display = 'block'
    spinner.style.display = 'none'
  }
  
  
}
setTimeout(handleSpinner,3000) //processa durante 3 segundos
// ... rest of the code ...

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollToTop.style.display = "block";
    btnScrollIA.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
    btnScrollIA.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   //document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }