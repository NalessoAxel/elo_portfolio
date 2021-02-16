const txtAnim = document.querySelector('h1')

new Typewriter(txtAnim, {
    pause: 500
})
.changeDelay(100)
.typeString('Elodie Simons,<br>')
.pauseFor(800)
.typeString('<strong> <span style="color: #f32015">community manager</strong></span>')
.pauseFor(1500)
.deleteChars(17)
.typeString('<strong> <span style="color: #f32015">copywriter</strong></span>')
.pauseFor(1500)
.deleteChars(10)
.typeString('<strong> chargée en<br> <span style="color: #f32015">communication</strong></span>')
.pauseFor(1500)
.start()