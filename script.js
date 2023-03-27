const left = document.querySelector(".left");
const right = document.querySelector(".right");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector('.card2');
const card3 = document.querySelector(".card3");
const card4 = document.querySelector('.card4');
const petiText = document.querySelector(".petit-text")
const toggleText = document.querySelector(".toggle-text")
const granChef1 = document.querySelector(".grand1");
const granChef2 = document.querySelector(".grand2");
const granChef3 = document.querySelector(".grand3");

        window.addEventListener("scroll", () =>{
            if(window.scrollY > 120){
                left.style.transform = "translateX(0)";
                left.style.opacity = "1";
            }else{
                // left.style.transform = "translateX(-200%)";
                left.style.opacity = "0";
            }
        })

        window.addEventListener("scroll", () =>{
            if(window.scrollY > 120){
                right.style.transform = "translateX(0)";
                right.style.opacity = "1";
            }else{
                // right.style.transform = "translateX(+200%)";
                right.style.opacity = "0";
            }
        })


        card1.addEventListener("click", () =>{
            // petiText.classList.toggle("clicked");
            petiText.style.transform = "translateY(-200px)";
        })


       


