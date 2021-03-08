const n_slide_box = document.querySelector('.names_box');
const n_slides = document.getElementsByClassName('names');
const n_len = n_slides.length;







//슬라이드 펼치기
function unfold(){
    for(i=0; i<n_len; i++){
        n_slides[i].style.left=i*320+'px';
    }
};
// function ex() {
//     for(i=0; i<n_len; i++){
//         f_names[i].style.backgroundColor='red';
//     }
// };


unfold();
// console.log(n_slide_box)