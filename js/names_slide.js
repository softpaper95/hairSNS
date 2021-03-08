const n_slide_box = document.querySelector('.names_box');
const n_slides = document.getElementsByClassName('names');
const n_len = n_slides.length;
const next_btn = document.querySelector('#right_btn');
const prev_btn = document.querySelector('#left_btn');
current_pg = 0;


//첫번째 slide에서는 prev_btn 숨기기
// function hide() {
//     if(current_pg == 0) {
//         prev_btn.classList.add('hide');
//     }
    
// }


//n_slide_box 오른쪽 이동
function move_right(){
    current_pg += 1;
    n_slide_box.style.left='-'+(current_pg*320)+'px';
};
//n_slide_box 왼쪽 이동
function move_left(){
    current_pg -= 1;
    n_slide_box.style.left='-'+(current_pg*320)+'px';
};

// next_btn 누르면 n_slide_box 오른쪽으로 이동
next_btn.addEventListener('click',move_right);
// prev_btn 누르면 n_slide_box 왼쪽으로 이동
prev_btn.addEventListener('click',move_left);
        
        
//슬라이드 펼치기
function unfold(){
    for(i=0; i<n_len; i++){
        n_slides[i].style.left=i*320+'px';
    }
};


// hide();
unfold();
// console.log(n_slide_box)