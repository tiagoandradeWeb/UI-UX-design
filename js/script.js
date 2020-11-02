function menuMobile(){
   let show = true;

const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () =>{
	nav.classList.toggle("on", show);
	show = !show;
}) 
}

function modalImage(){
    const imgs = document.querySelectorAll(".box-img img");
    const view = document.querySelectorAll(".view")
    const modalBox = document.querySelector(".img-modal")
    const modalImg = document.querySelector(".img-modal img");
    const btnModalClose = document.querySelector(".btn-modal-close");
    
    imgs.forEach(function(item){
        item.addEventListener("click", function(){
            const srcImg= item.getAttribute("src");
            modalImg.setAttribute("src", srcImg);
            modalBox.style.display="flex";
            btnModalClose.addEventListener("click", function(){
               modalBox.style.display="none"; 
            });
            
    
    })
                 });
}

menuMobile();
modalImage();