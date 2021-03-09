const n_slide_box = document.querySelector('.names_box');
const n_slides = document.getElementsByClassName('names');
const n_len = n_slides.length;
const next_btn = document.querySelector('#right_btn');
const prev_btn = document.querySelector('#left_btn');
current_pg = 0;

//첫화면에 prev_btn안보이게 하기
function hide(){
    if (current_pg==0){
        prev_btn.classList.add('disabled');
    }
}

//슬라이드 펼치기
function unfold(){
    for(i=0; i<n_len; i++){
        n_slides[i].style.left=i*320+'px';
    }
};

//n_slide_box 오른쪽 이동
next_btn.addEventListener('click',function(){
    current_pg += 1;
    n_slide_box.style.left='-'+(current_pg*320)+'px';
    // 마지막 슬라이드면 #right_btn 안보이게, 아니라면 보이게
    if (current_pg == n_len-2){
        next_btn.classList.add('disabled');
    // else 구문 주의!!
    //슬라이드가 마지막 장으로 갔을때 next_btn에는 disabled가 적용되므로
    //prev_btn을 클릭해서 disabled를 없애줘야 한다.
    }else{
        prev_btn.classList.remove('disabled');
    }
});
// function move_right(){
    

// };
//n_slide_box 왼쪽 이동
// prev_btn 누르면 n_slide_box 왼쪽으로 이동
prev_btn.addEventListener('click',function(){
    current_pg -= 1;
    n_slide_box.style.left='-'+(current_pg*320)+'px';
    if (current_pg == 0){
        prev_btn.classList.add('disabled');
    }else{
        next_btn.classList.remove('disabled');
    }
});
// function move_left(){
    
// };



// next_btn 누르면 n_slide_box 오른쪽으로 이동


        
        

hide();

// hide();
unfold();
// console.log(n_slide_box)