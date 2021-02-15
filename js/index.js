const allRounds = document.querySelectorAll('.round')
const allBoxes = document.querySelectorAll('.box')

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {
    
    for(i = 0; i < allRounds.length; i++) {
        if(allRounds[i].getAttribute('data-anim') === box.getAttribute('data-anim')) {

            let tween = gsap.from(box, {y: -10, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRounds[i],
                reverse: false
            })
            .setTween(tween)
            
            .addTo(controller)
        }
    }

})


