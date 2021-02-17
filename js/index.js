const card = document.querySelectorAll('.extra-content')
gsap.registerPlugin(ScrollTrigger)

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true
  })
  locoScroll.on("scroll", ScrollTrigger.update)
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
    })

function openNav() {
    document.getElementById('nav').style.width = "50%"
}
function closeNav() {
    document.getElementById('nav').style.width = "0%"
}


const allRounds = document.querySelectorAll('.timeline ul li::after')
const allBoxes = document.querySelectorAll('.timeline')

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

gsap.from('.timeline-experiences',{
    opacity: 0,
    durattion: 1,
    x: 100
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

gsap.to(".title-about", {
    scrollTrigger:{
        trigger: ".title-about",
        toggleActions: "restart none none none"
    },
    x:50,
    duation: 0.5,
    })


gsap.to(".title-formation", {
    scrollTrigger:{
        trigger: ".title-formation",
        toggleActions: "restart none none none"
    },
    x: 150,
    duation: 1
    })
   
gsap.to(".title-experiences", {
    scrollTrigger:{
        trigger: ".title-experiences",
        toggleActions: "restart none none none"   
    },
    x: -150,
    duation: 3,
    })
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update())
    ScrollTrigger.refresh()

    TweenMax.from('.card', 2,{
        scrollTrigger:{
            trigger: ".card",
            toggleActions: "restart none none none"   
        },
        left: 400,
        
    })