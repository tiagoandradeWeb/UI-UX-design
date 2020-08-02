let show = true;

const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () =>{
	nav.classList.toggle("on", show);
	show = !show;
})