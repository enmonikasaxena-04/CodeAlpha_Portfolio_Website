// Smooth Active Navigation

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

link.addEventListener("click", function(){

navLinks.forEach(item=>item.classList.remove("active"));

this.classList.add("active");

});

});

// Reveal Animation

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top=window.scrollY;

const offset=section.offsetTop-250;

if(top>offset){

section.style.opacity="1";

section.style.transform="translateY(0px)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="0.8s";

});

// Typing Effect

const text="Frontend Developer | AWS Learner | B.Tech CSE Student";

const heading=document.querySelector(".hero-text h2");

let i=0;

heading.innerHTML="";

function typing(){

if(i<text.length){

heading.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();