const left = document.querySelector(".left");
const right = document.querySelector(".right");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector('.card2');
const card3 = document.querySelector(".card3");
const card4 = document.querySelector('.card4');
const petiText = document.querySelector(".petit-text");
const toggleText = document.querySelector(".toggle-text");
const togglebarre = document.querySelector('.btn');
const bodybarre = document.querySelector('body');

        window.addEventListener("scroll", () =>{
            // console.log(window.scrollY);
            if(window.scrollY > 120){
                left.style.transform = "translateX(0)";
                left.style.opacity = "1";
            }else{
                // left.style.transform = "translateX(-200%)";
                left.style.opacity = "0";
            }
        })

        window.addEventListener("scroll", () =>{
            console.log(window.scrollY);
            if(window.scrollY > 120){
                right.style.transform = "translateX(0)";
                right.style.opacity = "1";
            }else{
                // right.style.transform = "translateX(+200%)";
                right.style.opacity = "0";
            }
        })

        togglebarre.addEventListener('click', () =>{
            bodybarre.classList.toggle("open");
        })




