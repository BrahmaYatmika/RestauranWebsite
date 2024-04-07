document.addEventListener("DOMContentLoaded", function(event) {
    const cartButtons = document.querySelectorAll('.cart-button');
    cartButtons.forEach(button => {
    button.addEventListener('click',cartClick);
});

function cartClick(){
    let button =this;
    button.classList.add('clicked');
    }
});

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back Mother F*cker🖕"
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})

/* testi sc*/
let userTexts = document.getElementsByClassName('user-text');
let userPics = document.getElementsByClassName('user-pic');

function showReview(){
    for(userPic of userPics ){
    userPic.classList.remove('active-pic')
}

    for(userText of userTexts){
    userText.classList.remove('active-text')
}

    let i =  Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add('active-pic');
    userTexts[i].classList.add('active-text')
}
//sc end//