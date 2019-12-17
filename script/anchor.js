"use strict";

const anchors = document.querySelectorAll('a[href^="#"');

for(let anchor of anchors) {

    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        let timer,
            scrolled = pageYOffset,
            blockId = anchor.getAttribute('href');

        document.querySelector(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })

        // scrollingToTop(timer, scrolled);
    });
}

//Спросить что лучше
// function scrollingToTop(timer, scrolled) {
//
//     if(scrolled > 49){
//         window.scrollTo(0, scrolled);
//         scrolled = scrolled - 50;
//         timer = setTimeout(()=>{
//             scrollingToTop(timer, scrolled);
//         }, 10);
//     }
//     else{
//         clearTimeout(timer);
//         window.scrollTo(0,0);
//     }
// }