const menubtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menubtn.addEventListener('click',
()=>{
    navMenu.classList.toggle('mobile-menu');
})

const account = navMenu.children[4];
account.addEventListener("click", function(){
    location.assign("https://sites.google.com/view/fatema-a-ferdaus/home");
});


//photo slide previous, next
var photoList = ["image/award.png","image/award(1).png", "image/award(2).png", "image/award(3).png" ];
var image = document.querySelector("#photoList");

var count = 0;

function previous(){
    count--;

    if(count < 0){
      count = photoList.length-1;
      image.src = photoList[count];
    }
  
    else{
      image.src = photoList[count];    
    }
 
}

function next(){
    count++;

    if(count >= photoList.length){
      count = 0;
      image.src = photoList[count];
    }
  
    else{
      image.src = photoList[count];    
    }
}

var explore_btn = document.querySelector("#explore");
function explore(){
    location.assign("#order");
}
