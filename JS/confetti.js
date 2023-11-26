document.addEventListener ('DOMContentLoaded',  ()=>{


    const jsConfetti = new JSConfetti({})

   /* jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
     })*/

     jsConfetti.addConfetti({
        confettiColors: [
          '#ff8a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
      }) 

      jsConfetti.addConfetti({
         confettiNumber: 500,
         confettiRadius: 6,

      })



})