const front_1= document.getElementById('front_1')
const back_1= document.getElementById('back_1')
const btn_front_1 = document.getElementById('button_front_1')
const btn_back_1 = document.getElementById('button_back_1')
function handleFlip1() {
  front_1.classList.toggle('flipped')
  back_1.classList.toggle('flipped')
}
btn_front_1.addEventListener('click', handleFlip1)
btn_back_1.addEventListener('click', handleFlip1)


const front_2 = document.getElementById('front_2')
const back_2 = document.getElementById('back_2')
const btn_front_2 = document.getElementById('button_front_2')
const btn_back_2 = document.getElementById('button_back_2')
function handleFlip2() {
  front_2.classList.toggle('flipped')
  back_2.classList.toggle('flipped')
}
btn_front_2.addEventListener('click', handleFlip2)
btn_back_2.addEventListener('click', handleFlip2)

const front_3 = document.getElementById('front_3')
const back_3= document.getElementById('back_3')
const btn_front_3 = document.getElementById('button_front_3')
const btn_back_3= document.getElementById('button_back_3')
function handleFlip3() {
  front_3.classList.toggle('flipped')
  back_3.classList.toggle('flipped')
}
btn_front_3.addEventListener('click', handleFlip3)
btn_back_3.addEventListener('click', handleFlip3)

const front_4 = document.getElementById('front_4')
const back_4= document.getElementById('back_4')
const btn_front_4 = document.getElementById('button_front_4')
const btn_back_4= document.getElementById('button_back_4')
function handleFlip4() {
  front_4.classList.toggle('flipped')
  back_4.classList.toggle('flipped')
}
btn_front_4.addEventListener('click', handleFlip4)
btn_back_4.addEventListener('click', handleFlip4)



const targetDiv = document.getElementById("iphone_filter_div");
const btn = document.getElementById("iphone_filter_button");
btn.onclick = function() {
if (targetDiv.style.display == "" || targetDiv.style.display == "none") {
  targetDiv.style.display = "block";
} else {
  targetDiv.style.display = "none";
}
};