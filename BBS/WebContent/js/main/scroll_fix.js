const fixed_menu = document.querySelector("#menu_bar");


document.addEventListener('scroll', function() {
    var currentScrollValue = document.documentElement.scrollTop;
    if (currentScrollValue > 54) {
        fixed_menu.classList.add("fixed");
        
    }else{
        fixed_menu.classList.remove("fixed");
        
    }
    // console.log('currentScrollValue is ' + currentScrollValue);
});