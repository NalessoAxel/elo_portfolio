function openNav() {
    document.getElementById('nav').style.width = "50%"
}
function closeNav() {
    document.getElementById('nav').style.width = "0%"
}


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

gsap.from('.container-right', {
    opacity: 0, 
    duration: 1, 
    x: 300, 
    delay: 0.6, 
    stagger: 0.6 })

gsap.from('.split-layout__rule', {
    opacity: 0, 
    duration: 1, 
    y: -300})

gsap.registerPlugin(ScrollTrigger)

gsap.to(".title-about", {
    scrollTrigger:{
        trigger: ".title-about",
        toggleActions: "restart none none none"
    },
    x:50,
    duation: 1,
    })


gsap.to(".formation", {
    scrollTrigger:{
        trigger: ".formation",
        toggleActions: "restart none none none"
    },
    x:-100,
    duation: 1
    })
   
gsap.to(".experiences", {
    scrollTrigger:{
        trigger: ".experiences",
        toggleActions: "restart none none none"   
    },
    x: 100,
    duation: 1,
    })
    
     