def on_button_pressed_a():
    global alarm
    basic.clear_screen()
    basic.show_string("ON")
    basic.pause(1000)
    alarm = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global alarm
    basic.clear_screen()
    basic.show_string("OFF")
    alarm = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def raiseAlarm(raise2: bool):
    if raise2 == True:
        for index in range(4):
            soundExpression.slide.play()
            basic.show_leds("""
                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
                                # # # # #
            """)
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
            """)
        basic.pause(1000)
alarm = 0
alarm = 0
sensitivity = 60
screenMax = 4

def on_forever():
    led.stop_animation()
    led.plot(Math.round(input.sound_level() / (sensitivity / screenMax)),
        Math.round(input.acceleration(Dimension.STRENGTH) / 275))
    if alarm == 1:
        if input.sound_level() > 60 or input.acceleration(Dimension.STRENGTH) > 1100:
            raiseAlarm(True)
    basic.pause(100)
basic.forever(on_forever)
