const courseBtn = document.querySelector(".courseBtn");
const dropDown = document.querySelector("nav .navbar li .dropmenu");
const bundle = document.querySelectorAll(".bundleContainer .content");

const bar = document.querySelector(".mobile .bar");
// console.log(bar);

const menu = document.querySelector("nav .navbar_container");
// console.log(menu);



bar.addEventListener("click",()=>{
    menu.classList.toggle("active")
})


courseBtn.addEventListener("click",()=>{
    dropDown.classList.toggle("active")
    // console.log("hello");
})

// bundle

bundle.forEach(function(obj){
    obj.addEventListener("click",()=>{
        obj.classList.toggle("active")
    })
})





// home Swiper

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },

        800: {
            slidesPerView: 2.5,
        },

        900: {
            slidesPerView: 2.5,
        },
        1000: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let swiper1 = new Swiper(".courseSwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },

        800: {
            slidesPerView: 2.5,
        },

        900: {
            slidesPerView: 2.5,
        },
        1000: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5,
        },
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let swiper2 = new Swiper(".instructorSwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },

        800: {
            slidesPerView: 2.5,
        },

        900:{
            slidesPerView:2.5,
        },

        1000: {
            slidesPerView: 3,
        },

        1200: {
            slidesPerView: 4,
        },

    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Question Section

const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
    // console.log(question);
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click", function () {

        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});

// bundle




