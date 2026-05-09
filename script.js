/* ==================================
   GRA_EDITZ CINEMATIC JAVASCRIPT
================================== */



/* ==================================
   COUNTER ANIMATION
================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target =
    +counter.getAttribute("data-target");

    let count = 0;

    const speed = target / 100;


    function updateCounter(){

        if(count < target){

            count += speed;

            counter.innerText =
            Math.ceil(count);

            requestAnimationFrame(
                updateCounter
            );

        }
        else{

            counter.innerText =
            target + "+";

        }

    }

    updateCounter();

});






/* ==================================
   BUTTON PULSE
================================== */

const button =
document.querySelector(".showreel-btn");


setInterval(()=>{

    button.classList.add("pulse");

    setTimeout(()=>{

        button.classList.remove("pulse");

    },1000);

},2500);







/* ==================================
   VIDEO HOVER AUTO PLAY
================================== */

const videos =
document.querySelectorAll(".video-card video");


videos.forEach(video=>{


    video.addEventListener(
        "mouseenter",

        ()=>{

            video.play();

        }

    );



    video.addEventListener(
        "mouseleave",

        ()=>{

            video.pause();

            video.currentTime = 0;

        }

    );


});








/* ==================================
   3D MOUSE EFFECT
================================== */

const cards =
document.querySelectorAll(".video-card");


cards.forEach(card=>{


    card.addEventListener(
        "mousemove",

        (e)=>{


            const rect =
            card.getBoundingClientRect();


            const x =
            e.clientX - rect.left;


            const y =
            e.clientY - rect.top;



            const centerX =
            rect.width / 2;


            const centerY =
            rect.height / 2;



            const rotateX =
            ((y-centerY)/15);


            const rotateY =
            ((centerX-x)/15);



            card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
            `;


        }

    );



    card.addEventListener(
        "mouseleave",

        ()=>{

            card.style.transform =
            `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
            `;

        }

    );


});








/* ==================================
   SHOWREEL BUTTON
================================== */

button.addEventListener(
    "click",

    ()=>{


        window.open(

            "videos/showreel.mp4",

            "_blank"

        );


    }

);









/* ==================================
   SCROLL REVEAL
================================== */

const observer =

new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }


    });


},

{
    threshold:0.2
}

);




const hiddenElements =

document.querySelectorAll(

".video-card, .stat-box, .about-text, .contact-box"

);




hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});










/* ==================================
   GSAP CINEMATIC ENTRANCE
================================== */

window.addEventListener(

    "load",

    ()=>{


        gsap.from(

            ".dp-ring",

            {

                duration:1.5,

                x:-200,

                opacity:0,

                ease:"power4.out"

            }

        );





        gsap.from(

            ".main-logo",

            {

                duration:1.5,

                y:100,

                opacity:0,

                delay:.3,

                ease:"power4.out"

            }

        );






        gsap.from(

            ".tagline",

            {

                duration:1.5,

                y:50,

                opacity:0,

                delay:.7,

                ease:"power4.out"

            }

        );







        gsap.from(

            ".showreel-btn",

            {

                duration:1.5,

                scale:0,

                opacity:0,

                delay:1,

                ease:"back.out"

            }

        );



    }

);









/* ==================================
   PARALLAX BACKGROUND
================================== */

document.addEventListener(

    "mousemove",

    (e)=>{


        const overlay =

        document.querySelector(
            ".bg-overlay"
        );



        const x =
        e.clientX / 50;


        const y =
        e.clientY / 50;



        overlay.style.transform =

        `translate(${x}px,${y}px)`;


    }

);









/* ==================================
   TITLE FLASH EFFECT
================================== */

const title =

document.querySelector(
    ".main-logo"
);



setInterval(()=>{


    title.style.opacity = ".7";


    setTimeout(()=>{

        title.style.opacity = "1";

    },100);



},4000);










/* ==================================
   CONSOLE SIGNATURE
================================== */

console.log(

    "GRA_EDITZ — Turning Ideas Into Motion"

);