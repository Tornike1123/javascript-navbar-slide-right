let button = document.querySelector('#butt');
let butt2 = document.querySelector('#slide2');

button.addEventListener("click", function(e){
    e.preventDefault();
  
    butt2.classList.toggle('show')
    button.classList.toggle('show')

  })
  


  let buts = document.querySelector('#butt');
  let buts2 = document.querySelector(".fa-bars");

  buts.onclick = function(){
    if(buts2.classList.contains("fa-bars")){
      buts2.classList.replace("fa-bars","fa-times");
    }else{
      buts2.classList.replace("fa-times","fa-bars");
    }
  }



  