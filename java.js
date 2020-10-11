

function typing(text) {
    let fullText = text.html(),
        inputText = '',
        letterCount = 0,
        interval = setInterval(function () {
            inputText += fullText[letterCount]
            text.html(inputText)
            letterCount++

            if (inputText === fullText) {
                clearInterval(interval)
            }
        }, 500)
}

typing($('h1'))



var swiper = new Swiper('.swiper .swiper-container', {
  effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          loop:true 
      },
       loop: true
    
});
