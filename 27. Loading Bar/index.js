const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

let idx = 100;

updateNum();

function updateNum(){
    counterEl.innerText = idx + "%"
    barEl.style.width = idx + "%"
    idx--;
    if(idx >= 0){
        setTimeout(updateNum, 200);
    }
}












