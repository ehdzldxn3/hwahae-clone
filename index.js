document.addEventListener("DOMContentLoaded", () => {
    console.log('Start')

    //제품소개
    let product = document.getElementById('product')
    let topInner = document.getElementById('top_inner')
    AOS.init({
        duration: 1000
      });

    window.addEventListener('scroll', () => { 
        
        if(window.scrollY > 2000) {
            topInner.classList.add('none')
        } else {

        }
    });


})