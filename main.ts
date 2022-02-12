input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("ON")
    basic.pause(1000)
    alarm = 1
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("OFF")
    alarm = 0
    basic.showIcon(IconNames.Asleep)
})
function raiseAlarm (raise2: boolean) {
    if (raise2 == true) {
        for (let index = 0; index < 4; index++) {
            soundExpression.slide.play()
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        basic.pause(1000)
    }
}
let alarm = 0
alarm = 0
let sensitivity = 60
let screenMax = 4
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    if (alarm == 1) {
        led.stopAnimation()
        led.plot(Math.round(input.soundLevel() / (sensitivity / screenMax)), Math.round(input.acceleration(Dimension.Strength) / (sensitivity * 20 / screenMax)))
        if (input.soundLevel() > sensitivity || input.acceleration(Dimension.Strength) > 20 * sensitivity) {
            raiseAlarm(true)
        }
        basic.pause(100)
    }
})
