input.onButtonPressed(Button.A, function () {
    jugador_combinacion = "" + jugador_combinacion + "A"
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    jugador_combinacion = "" + jugador_combinacion + "C"
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    jugador_combinacion = "" + jugador_combinacion + "B"
    basic.showString("B")
})
input.onPinPressed(TouchPin.P1, function () {
    jugador_combinacion = "" + jugador_combinacion + "1"
    basic.showString("1")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    jugador_combinacion = "" + jugador_combinacion + "0"
    basic.showString("0")
})
function comparar () {
    if (combinacion == jugador_combinacion) {
        basic.showIcon(IconNames.Yes)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
        nivel += 1
        game.addScore(1)
        jugador_combinacion = ""
    } else {
        basic.showIcon(IconNames.No)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
        game.removeLife(1)
        jugador_combinacion = ""
    }
}
let combinacion = ""
let jugador_combinacion = ""
let opciones_combinacion = [
"A",
"B",
"C",
"0",
"1"
]
let nivel = 1
game.setScore(0)
game.setLife(3)
basic.forever(function () {
    if (game.score() == 10) {
        basic.showString("¡Winner!")
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
    }
    if (nivel == 1) {
        combinacion = opciones_combinacion._pickRandom()
        basic.showString("" + (combinacion))
        basic.pause(1000)
        comparar()
    }
    basic.pause(1000)
    if (nivel == 2) {
        combinacion = "" + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom()
        basic.showString("" + (combinacion))
        basic.pause(2000)
        comparar()
    }
    basic.pause(1000)
    if (nivel == 3) {
        combinacion = "" + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom()
        basic.showString("" + (combinacion))
        basic.pause(3000)
        comparar()
    }
    basic.pause(1000)
    if (nivel == 4) {
        combinacion = "" + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom()
        basic.showString("" + (combinacion))
        basic.pause(4000)
        comparar()
    }
    basic.pause(1000)
    if (nivel == 5) {
        combinacion = "" + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom()
        basic.showString("" + (combinacion))
        basic.pause(5000)
        comparar()
    }
    basic.pause(1000)
    if (nivel == 6) {
        combinacion = "" + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom()
        basic.showString("" + (combinacion))
        basic.pause(6000)
        comparar()
    }
    basic.pause(1000)
    if (nivel == 7) {
        combinacion = "" + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom()
        basic.showString("" + (combinacion))
        basic.pause(7000)
        comparar()
    }
    basic.pause(1000)
    if (nivel == 8) {
        combinacion = "" + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom()
        basic.showString("" + (combinacion))
        basic.pause(8000)
        comparar()
    }
    basic.pause(1000)
    if (nivel == 9) {
        combinacion = "" + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom()
        basic.showString("" + (combinacion))
        basic.pause(9000)
        comparar()
    }
    basic.pause(1000)
    if (nivel == 10) {
        combinacion = "" + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom() + opciones_combinacion._pickRandom()
        basic.showString("" + (combinacion))
        basic.pause(10000)
        comparar()
    }
})
