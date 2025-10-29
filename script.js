
// var int;
// function setInt() {
//     clearInterval(int);
//     int = setInterval(function () {
//         var btns = document.getElementsByName("carousel");
//         for (var i = 0; i < btns.length; i++) {
//             if (btns[i].checked) {
//                 btns[i].checked = false;
//                 if (i + 1 == btns.length) {
//                     btns[0].checked = true;
//                 }
//                 else {
//                     btns[i + 1].checked = true;
//                 }
//                 return;
//             }
//         }
//     }, 5000);
// }
// setInt();
let current = 1;
let total = 5;
let autoSlide;

function changeSlide() {
    document.getElementById(`slide-btn-${current}`).checked = true;
    current = current % total + 1;
}

function setInt() {
    clearInterval(autoSlide);
    autoSlide = setInterval(changeSlide, 5000);
}

setInt();


document.querySelector('.carousel').addEventListener('mousemove', e => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        const x = (window.innerWidth / 2 - e.pageX) / 80;
        const y = (window.innerHeight / 2 - e.pageY) / 80;
        slide.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
    });
});
