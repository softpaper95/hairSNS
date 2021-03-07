const search_box = document.querySelector(".search_box")
const menu_bar = document.getElementById("menu_bar")

function search_box_hide() {
    menu_bar.style.justifyContent="spaceBetween";
}    
        
        
    
    


// search_box_hide();

menu_bar.addEventListener('click',search_box_hide);

// console.log(search_box_hide);