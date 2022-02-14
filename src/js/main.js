var splide = new Splide( '.splide', {
    type   : 'loop',
    padding: '0px',
  } );
  
  splide.mount();

let i = 0;
const play = document.querySelector(".play_icon"),
      section = document.querySelector(".play"),
      audio = document.querySelector('audio')
      pause = document.querySelector(".pause");

section.addEventListener('click',()=>{
  console.log('hello!')
  if(i==0){
    play.style.display = 'none',
    pause.style.display = 'flex',
    i++;
    audio.play()
  } else {
    play.style.display = 'flex',
    pause.style.display = 'none',    
    i--;
    audio.pause()
  }
  audio.addEventListener('ended',()=>{
    console.log('wow!'),
    play.style.display = 'flex',
    pause.style.display = 'none';
  })

})

