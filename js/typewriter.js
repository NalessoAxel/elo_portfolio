const txtAnim = document.querySelector('h1')

new Typewriter(txtAnim, {
    
    pause: 300
})
.changeDelay(50)
.typeString('Elodie Simons,')
.pauseFor(500)
.typeString('<strong> chargée en <span style="color: #f32015">communication</strong></span>')
.start()