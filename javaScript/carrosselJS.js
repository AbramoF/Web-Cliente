const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");


let ida = 0;

function carrossel() {
    ida++;
    if (ida > img.length - 1) {
        ida=0;

    }

    imgs.style.transform = 'translateX(${idx-*40%}px)';
}setInterval(carrossel,1800);
